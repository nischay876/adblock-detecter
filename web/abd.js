        checkAdblock()

        async function checkAdblock() {
            this.appendIframeAds();
            let isBlocked = await this.hasAdblockByIframe();
            if (!isBlocked) {
                isBlocked = await this.hasAdblockByScript();
            }

            if (isBlocked) {
                console.log("Ad blocker is used.")
                document.write('<iframe src="https://abd.nischay.ovh/web/" style="position:absolute; top:0px; left:0px;width:100%; height:100%; border: none; overflow: hidden;"></iframe>');
            } else {
          
            }
        }

        async function hasAdblockByScript() {
            let status = false;
            let url = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            const config = {
                method: 'HEAD',
                mode: 'no-cors',
            }
            let request = new Request(url, config);
            try {
                await fetch(request);
                status = false
            } catch (error) {
                status = true;
            }

            if (status) return status;


            url = 'https://adblockanalytics.com'
            request = new Request(url, config);
            try {
                await fetch(request);
                status = false;
            } catch (error) {
                status = true
            }
            return status;
        }

        function hasAdblockByIframe() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let status = false;
                    const iframe = document.getElementById("ads-text-iframe");
                    if (iframe.style.display == "none" ||
                        iframe.style.display == "hidden" ||
                        iframe.style.visibility == "hidden" ||
                        iframe.offsetHeight == 0) {
                        status = true;
                    }
                    iframe.remove();
                    resolve(status);
                }, 100)
            })
        }

        function appendIframeAds() {
            const iframe = document.createElement("iframe");
            iframe.height = "1px";
            iframe.width = "1px";
            iframe.id = "ads-text-iframe";
            iframe.src = "https://domain.com/ads.html";
            document.body.appendChild(iframe);
        }