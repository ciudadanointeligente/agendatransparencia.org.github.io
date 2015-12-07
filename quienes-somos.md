---
layout: default
---

<section id="manifesto" class="container">
  <ul class="share-btn list-inline">
    <li class="text-center">
      <a class="twitter-share-button btn btn-primary btn-xs" onclick="window.open('//twitter.com/intent/tweet?{% if site.twitter_username %}via={{ site.twitter_username }}&{% endif %}url={{ site.baseurl | url_param_escape }}&text={{ site.description }}','_blank','height=300,width=600')"><i class="fa fa-twitter"></i> Twittear</a>
    </li>
    <li class="fb-share-button" data-href="{{ site.baseurl }}" data-layout="button"></li>
  </ul>
  <div class="manifiesto">
    {% capture about %}{% include quienes-somos.md %}{% endcapture %}
    {{ about  | markdownify }}

  </div>
  </div>
</section>
