window.digitalData = {
    'page': {
        'pageInfo': {
            'pageName': document.title || 'unknown-page',
            'pageUrl': window.location.href
        }
    }    
};
window.digitalData.page.pageInfo.referringURL = document.referrer;
window.digitalData.page.pageInfo.sysEnv = navigator.userAgent;