import{_ as n,a as s}from"./app.c7499a6b.js";const a={},p=s(`<h1 id="\u624B\u5199-\u9632\u6296\u3001\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199-\u9632\u6296\u3001\u8282\u6D41" aria-hidden="true">#</a> \u624B\u5199 \u9632\u6296\u3001\u8282\u6D41</h1><h2 id="\u9632\u6296-debounce" tabindex="-1"><a class="header-anchor" href="#\u9632\u6296-debounce" aria-hidden="true">#</a> \u9632\u6296\uFF08debounce\uFF09</h2><h3 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h3><p>\u9632\u6296\uFF08debounce\uFF09\uFF1A\u4E0D\u7BA1\u4E8B\u4EF6\u89E6\u53D1\u9891\u7387\u591A\u9AD8\uFF0C\u4E00\u5B9A\u5728\u4E8B\u4EF6\u89E6\u53D1 n \u79D2\u540E\u624D\u6267\u884C\uFF0C\u5982\u679C\u4F60\u5728\u4E00\u4E2A\u4E8B\u4EF6\u89E6\u53D1\u7684 n \u79D2\u5185\u53C8\u89E6\u53D1\u4E86\u8FD9\u4E2A\u4E8B\u4EF6\uFF0C\u5C31\u4EE5\u65B0\u7684\u4E8B\u4EF6\u7684\u65F6\u95F4\u4E3A\u51C6\uFF0Cn \u79D2\u540E\u624D\u6267\u884C\uFF0C\u603B\u4E4B\uFF0C\u89E6\u53D1\u5B8C\u4E8B\u4EF6 n \u79D2\u5185\u4E0D\u518D\u89E6\u53D1\u4E8B\u4EF6\uFF0Cn \u79D2\u540E\u518D\u6267\u884C\u3002</p><h3 id="\u5E38\u89C1\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u5E38\u89C1\u4F7F\u7528\u573A\u666F</h3><ul><li>\u7A97\u53E3\u5927\u5C0F\u53D8\u5316</li><li>\u76D1\u542C\u6EDA\u52A8\u4E8B\u4EF6</li><li>\u8868\u5355\u9A8C\u8BC1\uFF0C\u8F93\u5165\u5B8C\u6210\u540E m \u79D2\u540E\u9A8C\u8BC1</li></ul><h3 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h3><h4 id="\u57FA\u7840\u7248" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7248" aria-hidden="true">#</a> \u57FA\u7840\u7248</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="\u57FA\u7840\u7248-\u7ACB\u5373\u6267\u884C\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7248-\u7ACB\u5373\u6267\u884C\u529F\u80FD" aria-hidden="true">#</a> \u57FA\u7840\u7248 + \u7ACB\u5373\u6267\u884C\u529F\u80FD</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> immediate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>immediate <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u8282\u6D41-throttle" tabindex="-1"><a class="header-anchor" href="#\u8282\u6D41-throttle" aria-hidden="true">#</a> \u8282\u6D41\uFF08throttle\uFF09</h2><h3 id="\u5B9A\u4E49-1" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49-1" aria-hidden="true">#</a> \u5B9A\u4E49</h3><p>\u8282\u6D41\uFF08throttle\uFF09\uFF1A\u6301\u7EED\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u53EA\u5728\u5355\u4F4D\u65F6\u95F4\u5185\u6267\u884C\u4E00\u6B21\u3002</p><ul><li>\u8F93\u5165\u6846\u641C\u7D22</li></ul><h3 id="\u5E38\u89C1\u4F7F\u7528\u573A\u666F-1" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u4F7F\u7528\u573A\u666F-1" aria-hidden="true">#</a> \u5E38\u89C1\u4F7F\u7528\u573A\u666F</h3><ul><li>\u8F93\u5165\u6846\u641C\u7D22</li></ul><h3 id="\u65F6\u95F4\u6233\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u6233\u5B9E\u73B0" aria-hidden="true">#</a> \u65F6\u95F4\u6233\u5B9E\u73B0</h3><blockquote><p>\u7B2C\u4E00\u6B21\u4E8B\u4EF6\u80AF\u5B9A\u89E6\u53D1\uFF0C\u6700\u540E\u4E00\u6B21\u4E0D\u4F1A\u89E6\u53D1</p></blockquote><p>\u7528\u65F6\u95F4\u6233\uFF0C\u5F53\u89E6\u53D1\u4E8B\u4EF6\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53D6\u51FA\u5F53\u524D\u7684\u65F6\u95F4\u6233\uFF0C\u7136\u540E\u51CF\u53BB\u4E4B\u524D\u7684\u65F6\u95F4\u6233(\u6700\u4E00\u5F00\u59CB\u503C\u8BBE\u4E3A 0 )\uFF0C\u5982\u679C\u5927\u4E8E\u8BBE\u7F6E\u7684\u65F6\u95F4\u5468\u671F\uFF0C\u5C31\u6267\u884C\u51FD\u6570\uFF0C\u7136\u540E\u66F4\u65B0\u65F6\u95F4\u6233\u4E3A\u5F53\u524D\u7684\u65F6\u95F4\u6233\uFF0C\u5982\u679C\u5C0F\u4E8E\uFF0C\u5C31\u4E0D\u6267\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> pre <span class="token operator">&gt;</span> wait<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      pre <span class="token operator">=</span> now<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528</span>
<span class="token keyword">const</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">throttle</span><span class="token punctuation">(</span>fun<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="\u5B9A\u65F6\u5668\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u5668\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9A\u65F6\u5668\u5B9E\u73B0</h3><blockquote><p>\u7B2C\u4E00\u6B21\u4E8B\u4EF6\u4E0D\u4F1A\u89E6\u53D1\uFF0C\u6700\u540E\u4E00\u6B21\u4E00\u5B9A\u89E6\u53D1</p></blockquote><p>\u5F53\u89E6\u53D1\u4E8B\u4EF6\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u8BBE\u7F6E\u4E00\u4E2A\u5B9A\u65F6\u5668\uFF1B\u518D\u89E6\u53D1\u4E8B\u4EF6\u7684\u65F6\u5019\uFF0C\u5982\u679C\u5B9A\u65F6\u5668\u5B58\u5728\uFF0C\u5C31\u4E0D\u6267\u884C\uFF0C\u76F4\u5230\u5B9A\u65F6\u5668\u6267\u884C\uFF0C\u7136\u540E\u6267\u884C\u51FD\u6570\uFF0C\u6E05\u7A7A\u5B9A\u65F6\u5668\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u8BBE\u7F6E\u4E0B\u4E2A\u5B9A\u65F6\u5668\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// timer === null</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528</span>
<span class="token keyword">const</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">throttle</span><span class="token punctuation">(</span>fun<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="\u5B8C\u6574\u7248" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6574\u7248" aria-hidden="true">#</a> \u5B8C\u6574\u7248</h3><blockquote><p>\u5B9A\u65F6\u5668\u548C\u65F6\u95F4\u6233\u7684\u7ED3\u5408\u7248\uFF0C\u4E5F\u76F8\u5F53\u4E8E\u8282\u6D41\u548C\u9632\u6296\u7684\u7ED3\u5408\u7248\uFF0C\u7B2C\u4E00\u6B21\u548C\u6700\u540E\u4E00\u6B21\u90FD\u4F1A\u89E6\u53D1</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> pre <span class="token operator">&gt;</span> wait<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      pre <span class="token operator">=</span> now<span class="token punctuation">;</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u53EA\u6709\u6700\u540E\u4E00\u6B21\u624D\u4F1A\u89E6\u53D1</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2><ul><li><p>\u4FEE\u6B63 this \u6307\u5411</p><ul><li>\u5982\u679C\u4E0D\u505A\u4EFB\u4F55\u5904\u7406\uFF0C\u88AB\u9632\u6296\u8282\u6D41\u7684\u51FD\u6570\u4E2D\u7684 this \u6307\u5411\u4F1A\u6539\u4E3A\u6267\u884C window\u3002</li><li>\u5728 debounce \u51FD\u6570\u4E2D\u8FD4\u56DE\u4E00\u4E2A\u95ED\u5305\uFF0C\u8FD9\u91CC\u7528\u7684\u666E\u901A function\uFF0C\u91CC\u9762\u7684 setTimeout \u5219\u7528\u7684\u7BAD\u5934\u51FD\u6570\uFF0C\u8FD9\u6837\u505A\u7684\u610F\u4E49\u662F\u8BA9 this \u7684\u6307\u5411\u51C6\u786E\uFF0Cthis \u7684\u771F\u5B9E\u6307\u5411\u5E76\u975E debounce \u7684\u8C03\u7528\u8005\uFF0C\u800C\u662F\u8FD4\u56DE\u95ED\u5305\u7684\u8C03\u7528\u8005\u3002</li></ul></li><li><p>\u5BF9\u4F20\u5165\u95ED\u5305\u7684\u53C2\u6570\u8FDB\u884C\u900F\u4F20\u3002</p></li></ul>`,30);function t(e,o){return p}var u=n(a,[["render",t]]);export{u as default};