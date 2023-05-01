/*import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

export class CorsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    // Ajouter les entêtes pour activer CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  }
}*/