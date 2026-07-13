---
layout: default
title: 앱과 지원 문서
description: 앱 안내와 고객지원, 개인정보처리방침을 확인하세요.
permalink: /
---

<section class="home-hero">
  <div class="site-shell home-hero-inner">
    <div>
      <p class="eyebrow">APP SUPPORT</p>
      <h1>앱 안내와<br>고객지원</h1>
      <p class="hero-copy">앱 사용 안내와 고객지원, 개인정보처리방침을 한곳에서 확인할 수 있습니다.</p>
    </div>
    <div class="hero-symbol" aria-hidden="true"><span>?</span><i></i></div>
  </div>
</section>

<section class="section" id="apps">
  <div class="site-shell">
    <div class="section-header">
      <h2>앱</h2>
      <p>앱별 안내와 지원 문서를 확인할 수 있습니다.</p>
    </div>
    {% for app in site.data.apps %}
      <article class="app-card">
        <img src="{{ app.icon | relative_url }}" alt="{{ app.name }} 앱 아이콘">
        <div>
          <h3>{{ app.name }}</h3>
          <p>{{ app.summary }}</p>
          <div class="platforms">
            {% for platform in app.platforms %}<span>{{ platform }}</span>{% endfor %}
          </div>
        </div>
        <a class="button" href="{{ app.links.overview | relative_url }}">앱 문서 보기</a>
      </article>
    {% endfor %}
  </div>
</section>
