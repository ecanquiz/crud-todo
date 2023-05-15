import{_ as s,o as a,c as e,O as t}from"./chunks/framework.18ccff08.js";const m=JSON.parse('{"title":"Crear Base de Datos","description":"","frontmatter":{},"headers":[],"relativePath":"comenzar/create-database.md"}'),o={name:"comenzar/create-database.md"},n=t(`<h1 id="crear-base-de-datos" tabindex="-1">Crear Base de Datos <a class="header-anchor" href="#crear-base-de-datos" aria-label="Permalink to &quot;Crear Base de Datos&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">Nota</p><p>Para este tutorial utilizaremos Postgres como motor de base de datos. Siéntase libre de elegir otro como MySQL.</p></div><h2 id="entrar-en-el-ambiente-de-postgres" tabindex="-1">Entrar en el ambiente de Postgres <a class="header-anchor" href="#entrar-en-el-ambiente-de-postgres" aria-label="Permalink to &quot;Entrar en el ambiente de Postgres&quot;">​</a></h2><p>Para entrar en el ambiénte de Postgres ejecute:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">su</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">postgres</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># psql -h ip_servidor -U usuario -d base_de_datos</span></span>
<span class="line"><span style="color:#FFCB6B;">psql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-U</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">postgres</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">postgres</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># CREATE DATABASE nuevadb;</span></span>
<span class="line"><span style="color:#FFCB6B;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">crud_todo_db</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,7),l=[n];function r(p,c,i,d,C,_){return a(),e("div",null,l)}const y=s(o,[["render",r]]);export{m as __pageData,y as default};
