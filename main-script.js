// ==UserScript==
// @name         Gmail - Remove emoji on mail list
// @name:zh-TW   Gmail - 移除信件列表中的表情符號
// @name:zh-CN   Gmail - 移除邮件列表中的表情符号
// @version      1.0.0
// @description  Remove mail titles' emoji on Gmail.
// @author       BaconBao
// @namespace    https://github.com/baconbao/
// @match        https://mail.google.com/mail/*
// @icon         https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico
// @grant        GM_addStyle
// @compatible  chrome
// @compatible  firefox
// @compatible  Tampermonkey
// ==/UserScript==

GM_addStyle(`
    tr[data-inboxsdk-thread-row] img[data-emoji] {
        display: none;
    }
`);
