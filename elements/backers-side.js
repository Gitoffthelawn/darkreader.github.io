// @ts-check

import './backers-graph.js';
import {
    createHTMLElement as html,
} from './utils.js';

const hnURL = 'https://www.joinhoney.com/darkreader';
const ocURL = 'https://opencollective.com/darkreader';

const htmlText = `
<h2 class="heading">
    Support us
</h2>
<section class="hr">
    <a class="logo-link hl" href="${hnURL}">
        <span class="logo-link-image hl-image">Honey</span>
        <span class="hl-message">
            Owned by <span class="hl-paypal">PayPal</span>
        </span>
    </a>
    <a class="text-link ht" href="${hnURL}">
        Save <span class="ht-usd">$$$</span> when you shop online
    </a>
    <a class="button-link hb" href="${hnURL}">
        <span class="hb-icon"></span>
        <span class="button-link-text hb-text">Join Honey</span>
    </a>
</section>
<section class="dr">
    <a class="logo-link dl" href="${ocURL}">
        <darkreader-backers-graph class="dl-graph" width="360" height="240" rows="4" columns="6">
        </darkreader-backers-graph>
    </a>
    <a class="text-link dt" href="${ocURL}">
        Become a sponsor too
    </a>
    <a class="button-link db" href="${ocURL}">
        <span class="button-link-text">Donate</span>
    </a>
</section>
`;

const cssText = `
a {
    color: var(--color-text);
    outline: none;
    transition: color 125ms;
}
a:hover {
    color: var(--color-text-hover);
}
:host {
    width: 16rem;
}
.heading {
    color: var(--color-highlight);
    margin: 0 0 1rem 0;
    -webkit-text-stroke: 0.0625rem;
    text-transform: uppercase;
}
section {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.25rem;
}
.logo-link {
    align-items: center;
    border-radius: 1.25rem;
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 0), 0 0 0 var(--color-text);
    display: inline-flex;
    flex-direction: column;
    overflow: hidden;
    text-align: center;
    text-decoration: none;
    transition: box-shadow 250ms;
    width: 100%;
}
.logo-link:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem var(--color-text);
}
.logo-link-image {
    display: inline-block;
    width: 100%;
}
.text-link {
    font-weight: bold;
    text-decoration: none;
    transition: color 250ms;
}
.text-link:hover {
    color: var(--color-text-hover);
}
.button-link {
    align-items: center;
    border-radius: 1.25rem;
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 0), 0 0 0 var(--color-text);
    color: white;
    display: inline-flex;
    flex-direction: row;
    height: 2.5rem;
    justify-content: center;
    margin-top: 0.25rem;
    text-decoration: none;
    transition: box-shadow 250ms;
    width: 10rem;
}
.button-link:hover {
    box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 100%, 1), 0 0 0.75rem var(--color-text);
}
.button-link-text {
    display: inline-block;
    font-weight: bold;
    font-size: 1.25rem;
    -webkit-text-stroke: 0.0625rem;
    text-transform: uppercase;
    transform: skewX(-10deg);
}
.hl {
    position: relative;
}
.hl-image {
    background-color: var(--color-honey);
    background-image: url(/images/honey-logo-white.svg);
    background-position: 50% 52%;
    background-repeat: no-repeat;
    background-size: 10rem auto;
    height: 10.25rem;
    text-indent: -999rem;
    width: 16rem;
}
.hl-message {
    bottom: 0.25rem;
    color: white;
    display: inline-block;
    font-weight: 400;
    position: absolute;
    right: 0.5rem;
}
.hl-paypal {
    background-image: url(/images/paypal-logo-white.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    height: 1.2rem;
    text-indent: -999rem;
    transform: translate(-0.0625rem, 0.0625rem);
    width: 3.5rem;
}
.ht {
    color: var(--color-honey);
}
.ht-usd {
    color: #53b378;
}
.hb {
    background-color: var(--color-honey);
    width: 12.5rem;
}
.hb-icon {
    background-image: url(/images/icon-chrome-512x512.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    height: 2rem;
    margin-right: 0.5rem;
    width: 2rem;
}
@-moz-document url-prefix() {
    .hb-icon {
        background-image: url(/images/icon-firefox-87x82.svg);
    }
}
.dl,
.dl:hover {
    box-shadow: none;
}
.dl-graph {
    width: 100%;
}
.db {
    background-color: var(--color-control);
}
`;

class BackersSideElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        const style = html('style', null, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);
    }
}

customElements.define('darkreader-backers-side', BackersSideElement);
