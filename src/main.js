import './style.css'
import ad from './advdata.json'

// Layout styr maner-texten (uppgift 3).
const TITLES = {
  veckans_pris: 'Veckans pris!',
  veckans_kortpris: 'Veckans kortpris!',
}

const bannerText = TITLES[ad.layout] ?? TITLES.veckans_pris
const articleMeta = `${ad.article_brand_name} ${ad.article_origin_country} ${ad.article_package_info}`

document.title = `ICA Nära – ${ad.ad_title}`

document.querySelector('#app').innerHTML = `
  <article class="stage ${ad.layout}" aria-label="Annons: ${ad.ad_title}">
    <header class="banner">
      <h1 class="banner__text">${bannerText}</h1>
    </header>

    <img class="product" src="/${ad.promotion_image}" alt="${ad.article_name}" />

    <div class="splash" data-motion="${ad.splash_motion ?? 'slingshot'}">
      <div class="splash__shape" aria-hidden="true"></div>
      <p class="price">
        <span class="price__kr">${ad.promotion_unit}</span>
        <span class="price__frac">
          <span class="price__ore">${ad.promotion_sub_unit}</span>
          <span class="price__unit">/${ad.article_unit_of_measurement}</span>
        </span>
      </p>
    </div>

    <footer class="article">
      <h2 class="article__name">${ad.article_name}</h2>
      <p class="article__meta">${articleMeta}</p>
    </footer>
  </article>
`

// Skärmen är 1080×1920. Skala ned canvasen så den ryms i förhandsvisningen
// (den fysiska skärmen kör 1:1).
const stage = document.querySelector('.stage')
const fit = () => {
  const scale = Math.min(window.innerWidth / 1080, window.innerHeight / 1920)
  stage.style.transform = `translate(-50%, -50%) scale(${scale})`
}
window.addEventListener('resize', fit)
fit()
