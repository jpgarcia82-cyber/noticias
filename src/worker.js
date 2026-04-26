// worker.js - Todo integrado en Cloudflare Workers

const YOUTUBE_API_KEY = 'AIzaSyDmuNb4bZSv2qQyS5zpaOefARxbA-ZyUNg';

// Palabras clave para análisis de sentimiento
const sentimentKeywords = {
    positivas: ['bueno', 'excelente', 'bien', 'ganador', 'fuerte', 'apoyo', 'victoria', 'avance', 'futuro', 'mejor', 'bellísimo', 'fantástico', 'gana', 'adelante', 'éxito', 'feliz', 'contento', 'espera', 'progreso', 'cambio positivo'],
    negativas: ['malo', 'fracaso', 'pésimo', 'perdedor', 'débil', 'corrupción', 'derrota', 'retroceso', 'peor', 'terrible', 'desastre', 'caos', 'ineficiencia', 'pierde', 'atrás', 'enojado', 'disgustado', 'robo', 'crisis', 'problema']
};

// HTML Frontend - Integrado en el Worker
const HTML_CONTENT = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Análisis Sentimiento YouTube - Cloudflare</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, sans-serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            color: #1a1a1a;
            padding: 20px;
            min-height: 100vh;
        }
        .container { max-width: 1200px; margin: 0 auto; }
        header {
            background: white;
            padding: 30px;
            border-radius: 10px;
            margin-bottom: 20px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
            text-align: center;
        }
        header h1 {
            color: #d32f2f;
            font-size: 2.2em;
            margin-bottom: 10px;
        }
        header p {
            color: #666;
            font-size: 0.95em;
        }
        .cf-badge {
            background: #f4a460;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            display: inline-block;
            margin-bottom: 20px;
            font-weight: bold;
        }
        .search-container {
            background: white;
            padding: 25px;
            border-radius: 10px;
            margin-bottom: 20px;
            box-shadow: 0 3px 15px rgba(0,0,0,0.1);
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .search-container input {
            flex: 1;
            min-width: 250px;
            padding: 12px;
            border: 2px solid #2a5298;
            border-radius: 5px;
            font-size: 0.95em;
        }
        .btn {
            padding: 12px 30px;
            background: #2a5298;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 8px;
            white-space: nowrap;
        }
        .btn:hover {
            background: #1e3c72;
            transform: translateY(-2px);
        }
        .btn:disabled {
            background: #ccc;
            cursor: not-allowed;
        }
        .spinner {
            display: inline-block;
            width: 18px;
            height: 18px;
            border: 3px solid rgba(255,255,255,0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .status {
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            font-weight: 500;
            display: none;
        }
        .status.show { display: block; }
        .status.loading { background: #fff3e0; border-left: 5px solid #ff9800; color: #e65100; }
        .status.error { background: #ffebee; border-left: 5px solid #d32f2f; color: #b71c1c; }
        .status.success { background: #e8f5e9; border-left: 5px solid #388e3c; color: #2e7d32; }
        .sentiment-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 15px;
            margin-bottom: 30px;
            display: none;
        }
        .sentiment-cards.show { display: grid; }
        .sentiment-card {
            background: white;
            padding: 25px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 3px 15px rgba(0,0,0,0.1);
            border-top: 5px solid;
        }
        .sentiment-card.positive { border-top-color: #388e3c; }
        .sentiment-card.negative { border-top-color: #d32f2f; }
        .sentiment-card.neutral { border-top-color: #ff9800; }
        .sentiment-card h3 { font-size: 1em; margin-bottom: 10px; }
        .sentiment-card .percentage { font-size: 2.5em; font-weight: bold; margin-bottom: 5px; }
        .sentiment-card.positive .percentage { color: #388e3c; }
        .sentiment-card.negative .percentage { color: #d32f2f; }
        .sentiment-card.neutral .percentage { color: #ff9800; }
        .sentiment-card .count { font-size: 0.9em; color: #666; }
        .charts {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
            display: none;
        }
        .charts.show { display: grid; }
        .chart-box {
            background: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 3px 15px rgba(0,0,0,0.1);
        }
        .chart-box h3 { color: #2a5298; margin-bottom: 20px; text-align: center; }
        .comments-section {
            background: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 3px 15px rgba(0,0,0,0.1);
            display: none;
        }
        .comments-section.show { display: block; }
        .comments-section h2 { color: #d32f2f; margin-bottom: 20px; }
        .comment-group h3 { color: #1e3c72; margin-top: 25px; margin-bottom: 15px; }
        .comment {
            background: #f5f5f5;
            padding: 15px;
            margin-bottom: 10px;
            border-left: 4px solid;
            border-radius: 4px;
        }
        .comment.positive { border-left-color: #388e3c; }
        .comment.negative { border-left-color: #d32f2f; }
        .comment.neutral { border-left-color: #ff9800; }
        .keywords {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 15px;
        }
        .keyword {
            background: #2a5298;
            color: white;
            padding: 8px 15px;
            border-radius: 15px;
            font-size: 0.9em;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="cf-badge">☁️ Cloudflare Workers</div>
            <h1>💭 ANÁLISIS DE SENTIMIENTO YOUTUBE</h1>
            <p>Análisis en vivo desde Cloudflare (serverless integrado)</p>
        </header>

        <div class="search-container">
            <input type="text" id="searchQuery" placeholder="Buscar: Morena, elecciones, Claudia..." value="Morena elecciones 2027">
            <button class="btn" id="searchBtn" onclick="buscar()">
                <span>🔍 Analizar</span>
                <span id="spinner" class="spinner" style="display: none;"></span>
            </button>
        </div>

        <div id="status" class="status"></div>

        <div id="cards" class="sentiment-cards">
            <div class="sentiment-card positive">
                <h3>😊 Positivo</h3>
                <div class="percentage" id="posP">0%</div>
                <div class="count"><span id="posC">0</span> comentarios</div>
            </div>
            <div class="sentiment-card negative">
                <h3>😠 Negativo</h3>
                <div class="percentage" id="negP">0%</div>
                <div class="count"><span id="negC">0</span> comentarios</div>
            </div>
            <div class="sentiment-card neutral">
                <h3>😐 Neutral</h3>
                <div class="percentage" id="neuP">0%</div>
                <div class="count"><span id="neuC">0</span> comentarios</div>
            </div>
        </div>

        <div id="charts" class="charts">
            <div class="chart-box">
                <h3>📊 Distribución Sentimiento</h3>
                <canvas id="sentimentChart"></canvas>
            </div>
            <div class="chart-box">
                <h3>🏷️ Palabras Clave</h3>
                <canvas id="keywordsChart"></canvas>
            </div>
        </div>

        <div id="comments" class="comments-section">
            <h2>💬 Comentarios por Sentimiento</h2>
            
            <div class="comment-group">
                <h3>✅ Positivos</h3>
                <div id="posComments"></div>
            </div>

            <div class="comment-group">
                <h3>❌ Negativos</h3>
                <div id="negComments"></div>
            </div>

            <div class="comment-group">
                <h3>⚪ Neutrales</h3>
                <div id="neuComments"></div>
            </div>

            <div class="comment-group">
                <h3>🔥 Temas Principales</h3>
                <div class="keywords" id="keywords"></div>
            </div>
        </div>
    </div>

    <script>
        function mostrarStatus(msg, tipo) {
            const status = document.getElementById('status');
            status.textContent = msg;
            status.className = \`status \${tipo} show\`;
        }

        async function buscar() {
            const query = document.getElementById('searchQuery').value;
            if (!query) {
                mostrarStatus('Escribe algo para buscar', 'error');
                return;
            }

            document.getElementById('searchBtn').disabled = true;
            document.getElementById('spinner').style.display = 'inline-block';
            mostrarStatus(\`🔍 Analizando: "\${query}"...\`, 'loading');

            try {
                const response = await fetch('/api/analizar', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query })
                });

                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.error || 'Error desconocido');
                }

                const datos = await response.json();
                mostrarStatus(\`✅ Análisis completado: \${datos.comentariosProcesados} comentarios en \${datos.videosAnalizados} videos\`, 'success');
                mostrarResultados(datos);

            } catch (error) {
                mostrarStatus(\`❌ Error: \${error.message}\`, 'error');
            } finally {
                document.getElementById('searchBtn').disabled = false;
                document.getElementById('spinner').style.display = 'none';
            }
        }

        function mostrarResultados(datos) {
            const sent = datos.sentimiento;
            
            document.getElementById('cards').classList.add('show');
            document.getElementById('posP').textContent = sent.positivo.porcentaje + '%';
            document.getElementById('posC').textContent = sent.positivo.cantidad;
            document.getElementById('negP').textContent = sent.negativo.porcentaje + '%';
            document.getElementById('negC').textContent = sent.negativo.cantidad;
            document.getElementById('neuP').textContent = sent.neutral.porcentaje + '%';
            document.getElementById('neuC').textContent = sent.neutral.cantidad;

            crearGraficas(datos);
            mostrarComentarios(datos);
            mostrarPalabras(datos);

            document.getElementById('charts').classList.add('show');
            document.getElementById('comments').classList.add('show');
        }

        function crearGraficas(datos) {
            const sent = datos.sentimiento;
            
            const ctxSent = document.getElementById('sentimentChart').getContext('2d');
            if (window.chartSent) window.chartSent.destroy();
            window.chartSent = new Chart(ctxSent, {
                type: 'doughnut',
                data: {
                    labels: ['😊 Positivo', '😠 Negativo', '😐 Neutral'],
                    datasets: [{
                        data: [sent.positivo.cantidad, sent.negativo.cantidad, sent.neutral.cantidad],
                        backgroundColor: ['#388e3c', '#d32f2f', '#ff9800'],
                        borderColor: ['#2e7d32', '#b71c1c', '#f57f17'],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'bottom' } }
                }
            });

            const topPalabras = Object.entries(datos.palabrasClave).slice(0, 8);
            const ctxKey = document.getElementById('keywordsChart').getContext('2d');
            if (window.chartKey) window.chartKey.destroy();
            window.chartKey = new Chart(ctxKey, {
                type: 'bar',
                data: {
                    labels: topPalabras.map(p => p[0]),
                    datasets: [{
                        label: 'Menciones',
                        data: topPalabras.map(p => p[1]),
                        backgroundColor: '#2a5298',
                        borderColor: '#1e3c72',
                        borderWidth: 1
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        }

        function mostrarComentarios(datos) {
            let html = '';
            datos.comentarios.positivos.forEach(c => {
                html += \`<div class="comment positive">"\${c.texto}"</div>\`;
            });
            document.getElementById('posComments').innerHTML = html || '<p style="color: #999;">Sin comentarios</p>';

            html = '';
            datos.comentarios.negativos.forEach(c => {
                html += \`<div class="comment negative">"\${c.texto}"</div>\`;
            });
            document.getElementById('negComments').innerHTML = html || '<p style="color: #999;">Sin comentarios</p>';

            html = '';
            datos.comentarios.neutrales.forEach(c => {
                html += \`<div class="comment neutral">"\${c.texto}"</div>\`;
            });
            document.getElementById('neuComments').innerHTML = html || '<p style="color: #999;">Sin comentarios</p>';
        }

        function mostrarPalabras(datos) {
            let html = '';
            Object.entries(datos.palabrasClave).forEach(([palabra, freq]) => {
                html += \`<span class="keyword">\${palabra} (\${freq})</span>\`;
            });
            document.getElementById('keywords').innerHTML = html;
        }
    </script>
</body>
</html>`;

// Función para analizar sentimiento
function analizarSentimiento(texto) {
    const textoBajo = texto.toLowerCase();
    const tienePositivo = sentimentKeywords.positivas.some(p => textoBajo.includes(p));
    const tieneNegativo = sentimentKeywords.negativas.some(p => textoBajo.includes(p));
    
    if (tienePositivo && !tieneNegativo) return 'positivo';
    if (tieneNegativo && !tienePositivo) return 'negativo';
    return 'neutral';
}

// Función para extraer palabras clave
function extraerPalabras(texto) {
    const palabras = texto.toLowerCase().match(/\b\w+\b/g) || [];
    const palabrasValidas = {};
    
    palabras.forEach(palabra => {
        if (palabra.length > 4 && !['para', 'sobre', 'como', 'entre', 'desde', 'durante', 'comentario'].includes(palabra)) {
            palabrasValidas[palabra] = (palabrasValidas[palabra] || 0) + 1;
        }
    });
    
    return palabrasValidas;
}

// HANDLER PRINCIPAL
export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const path = url.pathname;

        // Servir el HTML frontend en la raíz
        if (path === '/' && request.method === 'GET') {
            return new Response(HTML_CONTENT, {
                headers: {
                    'Content-Type': 'text/html; charset=utf-8',
                    'Cache-Control': 'max-age=3600'
                }
            });
        }

        // API: Analizar sentimiento
        if (path === '/api/analizar' && request.method === 'POST') {
            try {
                const body = await request.json();
                const query = body.query;

                if (!query) {
                    return new Response(JSON.stringify({ error: 'Query vacío' }), {
                        status: 400,
                        headers: { 'Content-Type': 'application/json' }
                    });
                }

                console.log(`🔍 Buscando: ${query}`);

                // 1. Buscar videos
                const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&maxResults=8&type=video&key=${YOUTUBE_API_KEY}`;
                
                const searchRes = await fetch(searchUrl);
                const searchData = await searchRes.json();
                const videos = searchData.items;

                if (!videos || videos.length === 0) {
                    return new Response(JSON.stringify({ error: 'No se encontraron videos' }), {
                        status: 404,
                        headers: { 'Content-Type': 'application/json' }
                    });
                }

                // 2. Procesar comentarios
                let comentariosAnalisis = {
                    positivos: [],
                    negativos: [],
                    neutrales: [],
                    palabras: {},
                    estadisticas: { pos: 0, neg: 0, neu: 0, total: 0 }
                };

                for (let i = 0; i < videos.length; i++) {
                    const videoId = videos[i].id.videoId;
                    const commentsUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=100&textFormat=plainText&key=${YOUTUBE_API_KEY}`;

                    try {
                        const commentsRes = await fetch(commentsUrl);
                        const commentsData = await commentsRes.json();
                        
                        if (!commentsData.items) continue;

                        commentsData.items.forEach(thread => {
                            const texto = thread.snippet.topLevelComment.snippet.textDisplay;
                            const sentimiento = analizarSentimiento(texto);
                            const palabras = extraerPalabras(texto);

                            Object.entries(palabras).forEach(([palabra, freq]) => {
                                comentariosAnalisis.palabras[palabra] = (comentariosAnalisis.palabras[palabra] || 0) + freq;
                            });

                            const comentarioObj = {
                                texto: texto.substring(0, 150),
                                likes: thread.snippet.topLevelComment.snippet.likeCount,
                                respuestas: thread.snippet.replyCount
                            };

                            if (sentimiento === 'positivo') {
                                comentariosAnalisis.positivos.push(comentarioObj);
                                comentariosAnalisis.estadisticas.pos++;
                            } else if (sentimiento === 'negativo') {
                                comentariosAnalisis.negativos.push(comentarioObj);
                                comentariosAnalisis.estadisticas.neg++;
                            } else {
                                comentariosAnalisis.neutrales.push(comentarioObj);
                                comentariosAnalisis.estadisticas.neu++;
                            }

                            comentariosAnalisis.estadisticas.total++;
                        });
                    } catch (e) {
                        console.log(`Video ${i + 1}: Error - ${e.message}`);
                    }
                }

                // 3. Calcular resultados
                const total = comentariosAnalisis.estadisticas.total;
                const porcentajes = {
                    positivo: total > 0 ? ((comentariosAnalisis.estadisticas.pos / total) * 100).toFixed(1) : 0,
                    negativo: total > 0 ? ((comentariosAnalisis.estadisticas.neg / total) * 100).toFixed(1) : 0,
                    neutral: total > 0 ? ((comentariosAnalisis.estadisticas.neu / total) * 100).toFixed(1) : 0
                };

                const topPalabras = Object.entries(comentariosAnalisis.palabras)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 15)
                    .reduce((obj, [palabra, freq]) => {
                        obj[palabra] = freq;
                        return obj;
                    }, {});

                const respuesta = {
                    query,
                    videosAnalizados: videos.length,
                    comentariosProcesados: total,
                    sentimiento: {
                        positivo: {
                            cantidad: comentariosAnalisis.estadisticas.pos,
                            porcentaje: porcentajes.positivo
                        },
                        negativo: {
                            cantidad: comentariosAnalisis.estadisticas.neg,
                            porcentaje: porcentajes.negativo
                        },
                        neutral: {
                            cantidad: comentariosAnalisis.estadisticas.neu,
                            porcentaje: porcentajes.neutral
                        }
                    },
                    comentarios: {
                        positivos: comentariosAnalisis.positivos.slice(0, 5),
                        negativos: comentariosAnalisis.negativos.slice(0, 5),
                        neutrales: comentariosAnalisis.neutrales.slice(0, 5)
                    },
                    palabrasClave: topPalabras,
                    timestamp: new Date().toISOString()
                };

                return new Response(JSON.stringify(respuesta), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });

            } catch (error) {
                return new Response(JSON.stringify({ error: error.message }), {
                    status: 500,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
        }

        // Health check
        if (path === '/api/health') {
            return new Response(JSON.stringify({ status: 'OK', platform: 'Cloudflare Workers' }), {
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response('Not found', { status: 404 });
    }
};
