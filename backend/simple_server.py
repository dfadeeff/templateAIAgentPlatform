#!/usr/bin/env python3
import json
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse

class CORSRequestHandler(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', 'http://localhost:3000')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_OPTIONS(self):
        self._set_headers()

    def do_GET(self):
        parsed_path = urlparse(self.path)
        if parsed_path.path == '/api/v1/agents/' or parsed_path.path == '/api/v1/agents':
            self._set_headers()
            agents = [
                {
                    "id": 1,
                    "name": "SAP ERP Integration",
                    "description": "Connects to SAP ERP system for real-time data synchronization and business process automation",
                    "status": "active",
                    "agent_type": "sap_erp",
                    "created_at": "2025-07-20T13:08:53",
                    "updated_at": None,
                    "is_active": True,
                    "config": {
                        "sap_server": "sap.company.com",
                        "sap_client": "100",
                        "modules": ["FI", "CO", "SD", "MM"],
                        "sync_interval": 300,
                        "authentication": "oauth2"
                    }
                },
                {
                    "id": 2,
                    "name": "Salesforce CRM Agent",
                    "description": "Integrates with Salesforce for customer data management and sales automation",
                    "status": "active",
                    "agent_type": "salesforce",
                    "created_at": "2025-07-20T13:08:53",
                    "updated_at": None,
                    "is_active": True,
                    "config": {
                        "instance_url": "https://company.salesforce.com",
                        "api_version": "v58.0",
                        "objects": ["Account", "Contact", "Opportunity", "Lead"],
                        "sync_interval": 600
                    }
                }
            ]
            self.wfile.write(json.dumps(agents).encode())
        else:
            self.send_response(404)
            self.end_headers()

if __name__ == '__main__':
    server = HTTPServer(('localhost', 8001), CORSRequestHandler)
    print('Starting simple server on http://localhost:8001')
    print('Test with: curl http://localhost:8001/api/v1/agents/')
    server.serve_forever()