---
layout: default
---

<section id="manifesto" class="container">
  <ul class="share-btn list-inline">
    <li class="text-center">
      <a class="twitter-share-button btn btn-primary btn-xs" onclick="window.open('https://twitter.com/intent/tweet?via=ciudadanoi&url={{ site.baseurl | url_param_escape }}&text={{ site.description }}','_blank','height=400,width=300')"><i class="fa fa-twitter"></i> Twittear</a>
    </li>
    <li class="fb-share-button" data-href="{{ site.baseurl }}" data-layout="button"></li>
  </ul>
  <div class="manifiesto">
    {% capture about %}{% include quienes-somos.md %}{% endcapture %}
    {{ about  | markdownify }}

  </div>
  </div>
</section>
