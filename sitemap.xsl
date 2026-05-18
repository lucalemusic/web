<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html lang="es">
            <head>
                <title>LUCALE MUSIC | XML Sitemap Oficial</title>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <style>
                    /* Fondo Negro Mate / Textura de Estudio */
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                        color: #e5e5e5;
                        background-color: #0d0d0d;
                        background-image: radial-gradient(circle at 50% 30%, #1a1a1a 0%, #0a0a0a 100%);
                        margin: 0;
                        padding: 60px 20px;
                    }
                    
                    /* Contenedor con Borde Dorado Elegante */
                    .container {
                        max-width: 1000px;
                        margin: 0 auto;
                        background: #121212;
                        padding: 40px;
                        border-radius: 14px;
                        border: 1px solid rgba(212, 175, 55, 0.3);
                        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(212, 175, 55, 0.05);
                    }
                    
                    /* Cabecera Estratégica con Logo Alíneado */
                    .header-area {
                        display: flex;
                        align-items: center;
                        gap: 25px;
                        margin-bottom: 40px;
                        border-bottom: 1px solid rgba(212, 175, 55, 0.15);
                        padding-bottom: 30px;
                    }
                    
                    /* Contenedor del Logo Tridente */
                    .logo-wrapper {
                        flex-shrink: 0;
                    }
                    .logo-wrapper img {
                        width: 90px;
                        height: 90px;
                        object-fit: contain;
                        filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.3));
                    }
                    
                    .brand-info {
                        flex-grow: 1;
                    }
                    
                    /* Tipografía en Oro y Blanco */
                    h1 {
                        font-size: 26px;
                        color: #ffffff;
                        margin: 0 0 6px 0;
                        font-weight: 800;
                        letter-spacing: -0.5px;
                        text-transform: uppercase;
                    }
                    h1 span {
                        background: linear-gradient(135deg, #bf953f 0%, #fcf6ba 25%, #b38728 50%, #fbf5b7 75%, #aa771c 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        font-weight: 900;
                    }
                    
                    p.desc {
                        color: #8c8c8c;
                        font-size: 13px;
                        margin: 0;
                        line-height: 1.5;
                    }
                    
                    /* Medallón del Contador en Oro Viejo */
                    .counter {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        background: rgba(212, 175, 55, 0.07);
                        color: #d4af37;
                        padding: 8px 18px;
                        border-radius: 50px;
                        font-size: 12px;
                        font-weight: 700;
                        border: 1px solid rgba(212, 175, 55, 0.25);
                        margin-bottom: 25px;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    }
                    .counter span {
                        width: 8px;
                        height: 8px;
                        background-color: #00ff66;
                        border-radius: 50%;
                        box-shadow: 0 0 8px #00ff66;
                    }
                    
                    /* Estructura de la Tabla */
                    table {
                        width: 100%;
                        border-collapse: separate;
                        border-spacing: 0;
                        text-align: left;
                        border-radius: 8px;
                        overflow: hidden;
                        border: 1px solid rgba(212, 175, 55, 0.1);
                    }
                    
                    th {
                        background-color: #161616;
                        color: #a6a6a6;
                        padding: 16px 20px;
                        font-size: 11px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 1.5px;
                        border-bottom: 1px solid rgba(212, 175, 55, 0.2);
                    }
                    
                    td {
                        padding: 16px 20px;
                        font-size: 14px;
                        background-color: #111111;
                        border-bottom: 1px solid #1a1a1a;
                        word-break: break-all;
                        transition: all 0.25s ease;
                    }
                    
                    tr:last-child td {
                        border-bottom: none;
                    }
                    
                    /* Efecto Iluminación Oro al pasar el mouse */
                    tr:hover td {
                        background-color: #171717;
                    }
                    
                    td a {
                        color: #e5e5e5;
                        text-decoration: none;
                        font-weight: 500;
                        transition: all 0.2s ease;
                        display: inline-block;
                    }
                    
                    /* Flecha dorada animada */
                    td a::before {
                        content: "➔";
                        color: rgba(212, 175, 55, 0.4);
                        margin-right: 8px;
                        opacity: 0;
                        transform: translateX(-6px);
                        display: inline-block;
                        transition: all 0.2s ease;
                    }
                    
                    tr:hover td a {
                        color: #f3e5ab; /* Tono crema/oro suave */
                        text-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
                    }
                    
                    tr:hover td a::before {
                        opacity: 1;
                        transform: translateX(0);
                        color: #d4af37;
                    }
                    
                    .meta-cell {
                        color: #666;
                        font-size: 13px;
                        font-weight: 500;
                    }
                    tr:hover .meta-cell {
                        color: #d4af37;
                    }
                    
                    /* Footer de Marca */
                    .footer-brand {
                        text-align: center;
                        margin-top: 40px;
                        font-size: 11px;
                        color: #444;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header-area">
                        <div class="logo-wrapper">
                            <img src="tridente.png" alt="LÚCALE Logo Oficial"/>
                        </div>
                        <div class="brand-info">
                            <h1>XML SITEMAP // <span>LÚCALE MUSIC</span></h1>
                            <p class="desc">
                                Índice digital de distribución y rastreo SEO. Optimizado para el mapeo automatizado de Google Core.
                            </p>
                        </div>
                    </div>
                    
                    <div class="counter">
                        <span/> URLS INDEXADAS EN TIEMPO REAL: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
                    </div>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Ruta de Navegación Oficial (URL)</th>
                                <th style="width: 100px; text-align: center;">Prioridad</th>
                                <th style="width: 130px; text-align: center;">Frecuencia</th>
                                <th style="width: 150px; text-align: center;">Última Modif.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="sitemap:urlset/sitemap:url">
                                <tr>
                                    <td>
                                        <a href="{sitemap:loc}">
                                            <xsl:value-of select="sitemap:loc"/>
                                        </a>
                                    </td>
                                    <td class="meta-cell" style="text-align: center;"><xsl:value-of select="sitemap:priority"/></td>
                                    <td class="meta-cell" style="text-align: center; text-transform: capitalize;"><xsl:value-of select="sitemap:changefreq"/></td>
                                    <td class="meta-cell" style="text-align: center;"><xsl:value-of select="sitemap:lastmod"/></td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>
                    
                    <div class="footer-brand">
                        © 2026 LÚCALE MUSIC | OFFICIAL WEB ARCHIVE
                    </div>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
