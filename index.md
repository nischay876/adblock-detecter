# Adblock Detecter
## Preview
![!](https://i.imgur.com/zPU6g1Y.png)
## Installation
### Add This Script Between `<body>  </body>` Tag Of Your Website
#### Script With [Cloudflare Pages](https://pages.cloudflare.com) CDN Network
```
<script src="https://abd.nischay.ovh/abd.js"></script>
```
#### Script With [Amazon CloudFront](https://aws.amazon.com/cloudfront) CDN Network
```
<script src="https://cloudfront.nischay.ovh/abd.js"></script>
```
#### Script With [JsDelivr](https://www.jsdelivr.com) CDN Network
```
<script src="https://cdn.jsdelivr.net/gh/nischay876/adblock-detecter/abd.js"></script>
```
#### Script With [Gitlab Raw](https://gitlab.com) CDN Network
```
<script src="https://gitlab.com/nischay876/adblock-detecter/-/raw/main/abd.js"></script>
```
#### Script With [Github Pages](https://pages.github.com) CDN Network
```
<script src="https://nischay876.github.io/adblock-detecter/abd.js"></script>
```
#### Script With [Github Raw](https://github.com) CDN Network
```
<script src="https://raw.githubusercontent.com/nischay876/adblock-detecter/main/abd.js"></script>
```
<script src="https://cloudfront.nischay.ovh/abd.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script type="text/javascript">
    $(window).load(function(){
        $("a").click(function(){
            top.window.location.href=$(this).attr("href");
            return true;
        })
    })
</script>
