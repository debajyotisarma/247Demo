/* jshint laxcomma: true */
function initialDeploymentMap() {
    return {
        /**
         * App ID which would be used for e.f.o.id var in events
         * __mvp_appId__ : MVP_APP_01"
         */
        __mvp_appId__ : "1005"

        /**
         * HTML path of 247SN.html on client's site, relative to base location
         * __mvp_snHtmlPath__ : "/psp247/247SN.html"
         */
        ,__mvp_snHtmlPath__ : "2"

        /**
         * Assist queue to be used in desktop chat
         * __mvp_queueDesktop__ : "demo-demo-queue-fehours"
         */
        ,__mvp_queueDesktop__ : "2"

        /**
         * Assist queue to be used in mobile chat
         * __mvp_queueMobile__ : "demo-demo-queue-fehours-m"
         */
        ,__mvp_queueMobile__ : "2"

        /**
         * Assist account id for production
         * __mvp_accountIdProd__ : "demo-account-default"
         */
        ,__mvp_accountIdProd__ : "5"

        /**
         * Assist Production CA server domain
         * __mvp_caServerProd__ : "demo.ca.assist.247-inc.net"
         */
        ,__mvp_caServerProd__ : "6"

        /**
         * Assist Production VS server domain
         * __mvp_vsServerProd__ : "demo.vs.assist.247-inc.net"
         */
        ,__mvp_vsServerProd__ : "7"

        /**
         * Assist account id for staging
         * __mvp_accountIdStage__ : "demo-account-default"
         */
        ,__mvp_accountIdStage__ : "8"

        /**
         * Assist Staging CA server domain
         * __mvp_caServerStage__ : "demo.ca.assist.staging.247-inc.net"
         */
        ,__mvp_caServerStage__ : "9"

        /**
         * Assist Staging VS server domain
         * __mvp_vsServerStage__ : "demo.vs.assist.staging.247-inc.net"
         */
        ,__mvp_vsServerStage__ : "10"

        /**
         * Docked button image width on desktop
         * __mvp_desktopBtnWidth__ : "192px"
         */
        ,__mvp_desktopBtnWidth__ : "11"

        /**
         * Docked button image height on desktop
         * __mvp_desktopBtnHeight__ : "38px"
         */
        ,__mvp_desktopBtnHeight__ : "12"

        /**
         * Docked button position from bottom on desktop
         * __mvp_desktopBtnLocBottom__ : "0px"
         */
        ,__mvp_desktopBtnLocBottom__ : "13"

        /**
         * Docked button position from right on desktop
         * __mvp_desktopBtnLocRight__ : "0px"
         */
        ,__mvp_desktopBtnLocRight__ : "14"

        /**
         * Docked button image width on mobile/tablet
         * __mvp_mobileBtnWidth__ : "192px"
         */
        ,__mvp_mobileBtnWidth__ : "15"

        /**
         * Docked button image height on mobile/tablet
         * __mvp_mobileBtnHeight__ : "38px"
         */
        ,__mvp_mobileBtnHeight__ : "16"

        /**
         * Docked button position from bottom on mobile/tablet
         * __mvp_mobileBtnLocBottom__ : "0px"
         */
        ,__mvp_mobileBtnLocBottom__ : "17"

        /**
         * Docked button position from right on mobile/tablet
         * __mvp_mobileBtnLocRight__ : "0px"
         */
        ,__mvp_mobileBtnLocRight__ : "18"

        /**
         * Proactive invite image width on desktop
         * __mvp_proWidth__ : "478px"
         */
        ,__mvp_proWidth__ : "19"

        /**
         * Proactive invite image height on desktop
         * __mvp_proHeight__ : "226px"
         */
        ,__mvp_proHeight__ : "20"

        /**
         * Proactive invite position from top on desktop
         * __mvp_proLocTop__ : "125px"
         */
        ,__mvp_proLocTop__ : "21"

        /**
         * Proactive invite position from right on desktop
         * __mvp_proLocRight__ : "125px"
         */
        ,__mvp_proLocRight__ : "22"

        /**
         * Proactive invite accept button width on invite
         * __mvp_proAccWidth__ : "192px"
         */
        ,__mvp_proAccWidth__ : "23"

        /**
         * Proactive invite accept button height on invite
         * __mvp_proAccHeight__ : "38px"
         */
        ,__mvp_proAccHeight__ : "24"

        /**
         * Proactive invite accept button position from top on invite
         * __mvp_proAccLocTop__ : "171px"
         */
        ,__mvp_proAccLocTop__ : "25"

        /**
         * Proactive invite accept button position from left on invite
         * __mvp_proAccLocLeft___ : "271px"
         */
        ,__mvp_proAccLocLeft__ : "26"

        /**
         * Proactive invite decline button width on invite
         * __mvp_proDecWidth__ : "18px"
         */
        ,__mvp_proDecWidth__ : "27"

        /**
         * Proactive invite decline button height on invite
         * __mvp_proDecHeight__ : "18px"
         */
        ,__mvp_proDecHeight__ : "28"

        /**
         * Proactive invite decline button position from top of invite
         * __mvp_proDecLocTop__ : "14px"
         */
        ,__mvp_proDecLocTop__ : "29"

        /**
         * Proactive invite decline button position from left of invite
         * __mvp_proDecLocLeft__ : "443px"
         */
        ,__mvp_proDecLocLeft__ : "30"

        /**
         * Tenant id for the client
         * __mvp_tenant__ : "nemo-client-mvp"
         */
        ,__mvp_tenant__ : "31"

        /**
         * Sub-Tenant id for the project/client. Keep it similar to client if not known
         * __mvp_subtenant__ : "nemo-client-mvp"
         */
        ,__mvp_subtenant__ : "31"

        /**
         * Client domain where we want to set the cookie. Can have comma seperated domain names
         * __mvp_cookiepath__ : "['example.com']"
         */
        ,__mvp_cookiepath__ : "31"

        /**
         * PSP/App server domain for production
         * __mvp_pspRootProd__ : "fehours.app.pub.247-inc.net"
         */
        ,__mvp_pspRootProd__ : "34"


        /**
         * CDN server domain for production
         * __mvp_cdnRootProd__ : "fehours.static.pub.247-inc.net"
         */
        ,__mvp_cdnRootProd__ : "35"


        /**
         * PSP/App server domain for staging
         * __mvp_pspRootStage__ : "fehours-staging.app.pub.247-inc.net"
         */
        ,__mvp_pspRootStage__ : "36"


        /**
         * CDN server domain for staging
         * __mvp_cdnRootStage__ : "fehours-staging.static.pub.247-inc.net"
         */
        ,__mvp_cdnRootStage__ : "37"
    };
}
