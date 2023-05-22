import{_ as e,c as a,o as s,O as t}from"./chunks/framework.13642e85.js";const u=JSON.parse('{"title":"Base de Datos","description":"","frontmatter":{},"headers":[],"relativePath":"comenzar/database.md"}'),o={name:"comenzar/database.md"},n=t(`<h1 id="base-de-datos" tabindex="-1">Base de Datos <a class="header-anchor" href="#base-de-datos" aria-label="Permalink to &quot;Base de Datos&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">Nota</p><p>Para este tutorial utilizaremos <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">PostgreSQL</a> como motor de base de datos. Siéntase libre de elegir otro como <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">MySQL</a>.</p></div><h2 id="entrar-en-el-ambiente-de-postgresql" tabindex="-1">Entrar en el ambiente de PostgreSQL <a class="header-anchor" href="#entrar-en-el-ambiente-de-postgresql" aria-label="Permalink to &quot;Entrar en el ambiente de PostgreSQL&quot;">​</a></h2><p>Para entrar en el ambiénte de PostgreSQL ejecute:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">su</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">postgres</span></span></code></pre></div><p>Luego:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># psql -h ip_servidor -U usuario -d base_de_datos</span></span>
<span class="line"><span style="color:#FFCB6B;">psql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-U</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">postgres</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">postgres</span></span></code></pre></div><h2 id="crear-base-de-datos" tabindex="-1">Crear Base de Datos <a class="header-anchor" href="#crear-base-de-datos" aria-label="Permalink to &quot;Crear Base de Datos&quot;">​</a></h2><p>Dentro del ambiente de PostgreSQL, crearemos la base de datos <code>crud_todo_db</code> ejecutando:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># CREATE DATABASE new_db;</span></span>
<span class="line"><span style="color:#FFCB6B;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">crud_todo_db</span><span style="color:#89DDFF;">;</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">Nota</p><p>Siéntase libre de elegir otro nombre de base de datos mientras sea concistente a lo largo del tutorial.</p></div><p>Ya fue creada la base de datos para este tutorial, avancemos con el backend...</p>`,12),l=[n];function r(p,c,d,i,b,h){return s(),a("div",null,l)}const _=e(o,[["render",r]]);export{u as __pageData,_ as default};
