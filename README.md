# 🚀 SENTIMENT YOUTUBE ANALYSIS - Cloudflare Workers

## ¿Qué es esto?

Análisis de sentimiento en tiempo real desde comentarios de YouTube, corriendo en Cloudflare Workers (serverless).

**Todo integrado en un solo lugar. Sin servidor local.**

---

## 📋 Requisitos

- Cuenta en Cloudflare (gratis): https://dash.cloudflare.com/
- Node.js instalado: https://nodejs.org/

---

## ⚡ INSTALACIÓN (3 PASOS)

### 1. Instalar Wrangler
```bash
npm install -g wrangler
```

### 2. Conectar con Cloudflare
```bash
wrangler login
```
(Se abrirá tu navegador - autoriza)

### 3. Desplegar
```bash
wrangler deploy
```

**¡Listo!** Te dará una URL como:
```
https://sentiment-youtube.tu-usuario.workers.dev
```

---

## 🌐 Usar la aplicación

1. Abre la URL en tu navegador
2. Escribe: `Morena`, `elecciones`, `Claudia`, etc.
3. Haz click en "🔍 Analizar"
4. Espera 20-30 segundos
5. **¡Ves las gráficas!**

---

## 📁 Estructura

```
sentiment-youtube/
├── wrangler.toml      ← Configuración
├── package.json       ← Dependencias
├── src/
│   └── worker.js      ← Todo el código
└── README.md          ← Este archivo
```

---

## 🔄 Actualizar cambios

Si modificas `worker.js`:
```bash
wrangler deploy
```

---

## 💻 Desarrollo local (opcional)

Para probar antes de desplegar:
```bash
wrangler dev
```

Abre: http://localhost:8787

---

## ⚙️ API Key de YouTube (IMPORTANTE)

La key ya no va en el código: el worker la lee de `env.YOUTUBE_API_KEY`.

1. Crea una key en: https://console.cloud.google.com/
2. Guárdala como secreto en Cloudflare:
   ```bash
   wrangler secret put YOUTUBE_API_KEY
   ```
3. Para desarrollo local, crea `.dev.vars` (no se sube a git):
   ```
   YOUTUBE_API_KEY=tu-key
   ```

---

## ❓ Problemas?

### "wrangler: command not found"
```bash
npm install -g wrangler
```

### "Cannot find module"
Verifica que `worker.js` está en carpeta `src/`

### "Not authenticated"
```bash
wrangler login
```

---

## 📊 Características

✅ Búsqueda en tiempo real  
✅ Análisis de sentimiento (positivo/negativo/neutral)  
✅ Gráficas interactivas  
✅ Palabras clave  
✅ Comentarios de ejemplo  
✅ URL pública compartible  
✅ 100,000 requests/mes gratis  

---

## 🎯 Próximas mejoras

- Guardar histórico en Cloudflare KV
- Dashboard de tendencias
- Exportar datos a CSV
- Comparar múltiples búsquedas

---

**¿Listo? Ejecuta `wrangler deploy` 🚀**
