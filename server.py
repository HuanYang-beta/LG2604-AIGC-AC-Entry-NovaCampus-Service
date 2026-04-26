import http.server
import socketserver
import os

PORT = 8080

os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.html': 'text/html',
    '.json': 'application/json',
    '.svg': 'image/svg+xml',
    '.ttf': 'application/font-ttf',
    '.woff': 'application/font-woff',
    '.woff2': 'application/font-woff2',
})

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Server running at http://localhost:{PORT}")
    print(f"Serving directory: {os.getcwd()}")
    httpd.serve_forever()
