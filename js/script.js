let params = new URLSearchParams(document.location.search);
////////////////////////Product Detail////////////////////////////
let product = params.get("product");
if(params.has("product")){
  let productInfo = document.getElementById("hProductInfo");
let productImg = document.getElementById("hProductImg");
let productTitle = document.getElementById("hProductTitle");
let productPrice = document.getElementById("hProductPrice");
let mproductImg1 = document.getElementById("hMProductImg1");
let mproductImg2 = document.getElementById("hMProductImg2");
let mproductImg3 = document.getElementById("hMProductImg3");
let mproductTitle1 = document.getElementById("hMProductTitle1");
let mproductTitle2 = document.getElementById("hMProductTitle2");
let mproductTitle3 = document.getElementById("hMProductTitle3");
let hProductLink1 = document.getElementById("hProductLink1");
let hProductLink2 = document.getElementById("hProductLink2");
let hProductLink3 = document.getElementById("hProductLink3");
if(product == 'cambodia-silk'){
  productTitle.textContent = "Cambodia Silk";
  productPrice.textContent = "50 - 100 USD";
  productImg.src="../assets/gallery/products/silk.jpg";
  productImg.alt="Cambodia silk";
  productInfo.innerHTML = "<p>Khmer silk, beautifully designed and hand-woven, is one of the most popular souvenirs sold all over the country. With traditional weaving techniques and the hand-dyeing process, it can take weeks for local artisans to finish a single piece of silk.</p>"+
            "<p>You can watch the entire process of silk production in places like Artisans Angkor’s Silk Farm outside Siem Reap "+
                "or at the historic silk center of Koh Dach outside Phnom Peng. Here are some types of silk products that you can choose to purchase:</p>"+
            "<ul><li><strong>Silk scarves and clothing </strong>such as blouses, dresses, and shirts are made in vibrant colors with intricate designs.</li>"+
                "<li><strong>Silk textiles </strong>for home décor items like wall hangings and pillow covers can add a splash of color to any home.</li>"+
                "<li><strong>Vintage silks </strong>that have been well-preserved are valued for their authenticity and rarity, but new silks from local artisans are often made with the same traditional techniques.</li></ul>"+
            "<p>Traditional silk scarves can be found for as low as 5 USD. Larger silk shawls or higher quality scarves can cost between 50-100 USD.</p>"
  mproductImg1.src="../assets/gallery/products/700-peinture-a-la-main.jpg";
  mproductTitle1.textContent="Handmade Paintings";
  hProductLink1.href="./local_artisan_detail.html?product=handmade-paintings";
  hProductLink1.title = "Handmade paintings";
}
else if(product=="krama"){
  productTitle.textContent="Krama";
  productPrice.textContent="1 - 2 USD";
  productImg.src="../assets/gallery/products/krama.jpg";
  productImg.alt="Krama";
  productInfo.innerHTML="<p>Krama scarves are a traditional accessory that is ubiquitous in Cambodian daily life. The scarves are made with traditional patterns in a wide range of colors. Most common are checkered designs in the national colors of blue, white, or red.</p>"+
            "<p>Popular not just for their appearance, Krama scarves are also highly versatile. They are worn as headscarves, neck scarves, and sometimes used as belts. People wear them for clothing, sun protection, and an expression of personal identity.</p>"+
            "<p>Krama are something you can buy to use during your Cambodia trip while outdoors exploring cultural sites and then take home as a reminder of your experiences there. It can be found everywhere in Cambodia, with the cheapest starting from 1-2 USD.</p>";
  mproductImg2.src="../assets/gallery/products/700-peinture-a-la-main.jpg";
  mproductTitle2.textContent="Homdmade Paintings";
  hProductLink2.href="./local_artisan_detail.html?product=handmade-paintings";
  hProductLink2.title = "Handmade paintings";
}else if(product=="sculpture-reproductions"){
  productTitle.textContent="Sculpture Reproductions"
  productPrice.textContent="50 - 200 USD"
  productImg.src="../assets/gallery/products/angkor-wat-sculpture-reproductions.jpg"
  productImg.alt="Sculpture Reproductions"
  productInfo.innerHTML="<p>After seeing Angkor Wat and bas-reliefs carved into ancient temples in Cambodia, you’ll know the impressive skills of local sculptors. Sculpture and carving have a long history in Cambodia. Today there are many skilled artisans making sculpture reproductions in a wide range of sizes.</p>"+
            "<p>Stone sculptures made with the same locally mined stone used to build ancient temples are not only beautifully decorative pieces for any home but, as souvenirs, also represent a tangible connection to Cambodia’s rich, ancient history.</p>"+
            "<p>The sculptures feature subjects such as Buddha figures and heads, Aspara Ladies, animals, and mythical creatures like the Garuda and Naha. They can be found made out of bronze, wood, and stone. The prices can be found in the 50-200 USD range.</p>";
  mproductImg3.src="../assets/gallery/products/700-peinture-a-la-main.jpg";
  mproductTitle3.textContent="Handmade Paintings";
  hProductLink3.href="./local_artisan_detail.html?product=handmade-paintings";
  hProductLink3.title = "Handmade paintings";
}else if(product=="silverware-silver-jewelry"){
  productTitle.textContent="Silverware & Silver jewelry";
  productPrice.textContent ="up to 100 USD";
  productImg.src="../assets/gallery/products/Silverware-&-Silver-Jewelry-in-Cambodia.jpg";
  productImg.alt="Silverware and Silver jewlry";
  productInfo.innerHTML="<p>Khmer silversmithing dates back to as early as the 11th century. Originally produced for the royal palace and upper-class families, it has developed into a larger industry with many silver shops located in Phnom Penh and Siem Reap. The exquisite designs are a beautiful expression of craftsmanship and a great way to add some flair to an outfit for anyone with the budget for jewelry.</p>"+
            "<p>Handcrafted silver plates, jewelry, trinkets, and ornate boxes are widely available, often with semi-precious stones worked into the design. The intricate pieces are usually made with an alloy containing 70-80% silver, and prices are based on weight and artistry.</p>"+
            "<p>Delicate silver pendants can start around 10 USD, larger and more elaborate necklaces or bracelets with inset semi-precious stones can cost up to 100 USD or more.</p>";
}else if(product=="handmade-paintings"){
  productTitle.textContent = "Handmade Paintings";
  productPrice.textContent = "10 - 150 USD";
  productImg.src="../assets/gallery/products/700-peinture-a-la-main.jpg";
  productImg.alt="Handmade Painting";
  productInfo.innerHTML = "<p>Beautiful handmade paintings featuring unique scenes of local landscapes are a great souvenir for remembering the sights of Cambodia.</p>"+
            "<p>In local Cambodian markets, paintings of Angkor Wat are commonly available, often done in oil paint or watercolors. High-quality original paintings can be found in local galleries.</p>"+
            "<p>Traditional style paintings often show scenes of rural daily life. Artists express the deep spirituality of the country with depictions of Buddha or scenes from Reamker, an epic poem and the national epic of Cambodia.</p>"+
            "<p>In places like the Old Market in Siem Reap or Central Market in Phnom Penh, you can buy original paintings from local artists for 10-150 USD.</p>";
}else{
  productTitle.textContent = "Bamboo Products";
  productPrice.textContent = "2 - 10 USD";
  productImg.src="../assets/gallery/products/cambodia-bamboo-products.jpg";
  productImg.alt="Cambodia bamboo products";
  productInfo.innerHTML = "<p>Bamboo is abundant in Cambodia. The fast-growing plant makes for a sustainable and durable material that can be used for a wide range of creations.</p>"+
            "<p>Handcrafted bamboo products are still favored by many Cambodian people for everything from chopsticks to sofas. Small bamboo items like keychains or chopsticks can cost as little as 2-3 USD. Here are some types of the Bamboo Products:</p>"+
            "<ul><li><strong>Bamboo kitchen and homeware </strong>are common in many households and prized for aesthetics and practicality. Decorative bowls and lampshades are great items to add flair of nature to your home.</li>"+
            "<li><strong>Utensils </strong>such as spoons, forks, and chopsticks, and kitchenware like cutting boards and steamers are functional and made to show off the natural grain in the bamboo. Great reminders of the natural beauty of Cambodia.</li>"+
            "<li><strong>Bamboo keychains or coasters </strong>engraved with local motifs make for small, attractive souvenirs to take back home. Larger items like bamboo lanterns, baskets, or even flutes are a more impressive display of local craftsmanship while still being light enough not to put you over your baggage limit.</li></ul>"
}
}

//////////////////////////////////////////////////////////////////

////////////////////////Temple Detail/////////////////////////////
let temple = params.get("temple");
if(params.has("temple")){
  let templeTitle = document.getElementById("templeTitle");
let openHour = document.getElementById("openHour");
let templeInfo = document.getElementById("templeInfo");
let templeImg1 = document.getElementById("templeImg1");
let templeImg2 = document.getElementById("templeImg2");
let templeImg3 = document.getElementById("templeImg3");
let templeTitle1 = document.getElementById("templeTitle1");
let templeTitle2 = document.getElementById("templeTitle2");
let templeTitle3 = document.getElementById("templeTitle3");
let templeInfo1 = document.getElementById("templeInfo1");
let templeInfo2 = document.getElementById("templeInfo2");
let templeInfo3 = document.getElementById("templeInfo3");
let templeLink1 = document.getElementById("templeLink1");
let templeLink2 = document.getElementById("templeLink2");
let templeLink3 = document.getElementById("templeLink3");
if(temple == "angkor-wat"){
  templeImg2.src = "../assets/gallery/preah-khan/40101905404_3399bc473e_b.jpg";
  templeImg2.alt = "Preah khan temple";
  templeTitle2.textContent = "Preak Khan Temple";
  templeInfo2.textContent = "Preah Khan is a temple at Angkor, Cambodia, built in the 12th "+
              "century for King Jayavarman VII to honor his father. It is located "+
              "northeast of Angkor Thom and just west of the Jayatataka baray, "+
              "with which it was associated.";
  templeLink2.href="./temple_details.html?temple=preah-khan-temple";
  templeLink2.title="Preah khan temple";
}
else if(temple == "bayon-temple"){
  openHour.innerHTML = "<p>Open: 07:30</p><p>Close: 17:30</p>";
  templeTitle.textContent = "Bayon Temple";
  templeInfo.innerHTML= "<div class='temple'><div class='temple-info'><p><strong>The Bayon</strong> is a well-known and richly decorated Khmer temple at Angkor in Cambodia. Built in the "+
              "late 12th or early 13th century as the official state temple of the Mahayana Buddhist King Jayavarman VII (ព្រះបាទជ័យវរ្ម័នទី ៧), the Bayon stands at the centre of Jayavarman's capital, Angkor Thom (អង្គរធំ). "+
              "Following Jayavarman's death, it was modified and augmented by later Hindu and The ravada Buddhist kings in accordance with their own religious preferences.</p>"+
              "<p>The Bayon's most distinctive feature is the multitude of serene and smiling stone faces on the many towers which jut out from the upper terrace and cluster around its central peak. The temple is known also for "+
              "two impressive sets of bas-reliefs, which present an unusual combination of mythological, historical, and mundane scenes.The current main conservatory body, the Japanese Government Team for the Safeguarding of "+
              "Angkor (the JSA) has described the temple as 'the most striking expression of the baroque style' of Khmer architecture, as contrasted with the classical style of Angkor Wat (ប្រាសាទអង្គរវត្ត).</p>"+
              "</div><div class='temple-image'><img src='../assets/gallery/bayon/shutterstock_552875650.jpg' alt='Bayon temple' /></div></div>"
  templeImg3.src = "../assets/gallery/preah-khan/40101905404_3399bc473e_b.jpg";
  templeImg3.alt = "Preah khan temple";
  templeTitle3.textContent = "Preak Khan Temple";
  templeInfo3.textContent = "Preah Khan is a temple at Angkor, Cambodia, built in the 12th "+
              "century for King Jayavarman VII to honor his father. It is located "+
              "northeast of Angkor Thom and just west of the Jayatataka baray, "+
              "with which it was associated.";
  templeLink3.href="./temple_details.html?temple=preah-khan-temple";
  templeLink3.title="Preah khan temple";
}
else if(temple == "bakheng-temple"){
  openHour.innerHTML = "<p>Open: 17:00</p><p>Close: 19:00</p>";
  templeTitle.textContent = "Bakheng Temple";
  templeInfo.innerHTML = " <div class='temple'><div class='temple-info'><p>"+
              "<strong>Phnom Bakheng</strong> (Khmer: ប្រាសាទភ្នំបាខែង) at Angkor, Cambodia, is a Hindu and Buddhist temple in the form of "+
              "a temple mountain. Dedicated to Shiva, it was built at the end of the 9th century, during the reign of King Yasovarman "+
              "(889-910). Located atop a hill, it is nowadays a popular tourist spot for sunset views of the much bigger temple "+
              "Angkor Wat, which lies amid the jungle about 1.5 km to the south ea﻿st. Constructed more than two centuries before "+
              "Angkor Wat, Phnom Bakheng was in its day the principal temple of the Angkor region, historians believe. "+
              "It was the architectural centerpiece of a new capital, Yasodharapura, that Yasovarman built when he moved the court from "+
              "the capital Hariharalaya in the Roluos area located to the southeast. An inscription dated 1052 AD and found at the "+
              "Sdok Kak Thom temple in present-day Thailand states in Sanskrit: 'When Sri Yasovardhana became king under the name of "+
              "Yasovarman, the able Vamasiva continued as his guru. By the king's order, he set up a linga on Sri Yasodharagiri, "+
              "a mountain equal in beauty to the king of mountains.' Scholars believe that this passage refers to the "+
              "consecration of the Phnom Bakheng temple approximately a century and a half earlier.</p>"+
              "<p>Phnom Bakheng is one of 3 hilltop temples in the Angkor region that are attributed to Yasovarman's reign. "+
              "The other two are Phnom Krom to the south near the Tonle Sap lake, and Phnom Bok, northeast of the East Baray reservoir.</p>"+
          "</div><div class='temple-image'><img src='../assets/gallery/bakheng/shutterstock_1079325335.jpg' alt='Bakheng temple'/></div></div>"
  templeImg1.src = "../assets/gallery/preah-khan/40101905404_3399bc473e_b.jpg";
  templeImg1.alt = "Preah khan temple";
  templeTitle1.textContent = "Preak Khan Temple";
  templeInfo1.textContent = "Preah Khan is a temple at Angkor, Cambodia, built in the 12th "+
                      "century for King Jayavarman VII to honor his father. It is located "+
                      "northeast of Angkor Thom and just west of the Jayatataka baray, "+
                      "with which it was associated.";
  templeLink1.href="./temple_details.html?temple=preah-khan-temple";
  templeLink1.title="Preah khan temple";
}else if(temple=="baphoun-temple"){
  openHour.innerHTML = "<p>Open: 07:30</p><p>Close: 17:30</p>";
  templeTitle.textContent = "Baphoun Temple";
  templeInfo.innerHTML = "<div class='temple'><div class='temple-info'><p>"+
              "<strong>The Baphuon</strong> is a temple at Angkor, Cambodia. It is located in Angkor Thom, northwest of the Bayon. "+
              "Built in the mid-11th century, it is a three-tiered temple mountain built as the state temple of Udayadityavarman "+
              "II dedicated to the Hindu God Shiva. It is the archetype of the Baphuon style. The temple adjoins the southern "+
              "enclosure of the royal palace and measures 120metres east-west by 100 metres north-south at its base and stands "+
              "34 metres tall without its tower, which would have made it roughly 50 metres tall. Its appearance apparently impressed "+
              "Emperor Chengzong of Yuan China's late 13thcentury envoy Chou Ta-Kuan during his visit from 1296 to 1297, "+
              "who said it was 'the Tower of Bronze...a truly astonishing spectacle, with more than ten chambers at its base.' "+
              "In the late 15th century, the Baphuon was converted to a Buddhist temple. A 9 metres tall by 70 metres long "+
              "statue of a reclining Buddha was built on the west side's second level, which probably required the demolition of "+
              "the 8 metres tower above, thus explaining its current absence.</p>"+
            "<p>The temple was built on land filled with sand, and due to its immense size of the site was unstable "+
                "throughout its history. Large portions had probably already collapsed by the time the Buddha was added. "+
                "Pen and watercolor reconstruction of what the temple may have looked in the 11th century by Lucien Fournereau in 1889. "+
                "The unfinished reclining Buddha on the west side of the temple. By the 20th century, much of the temple "+
                "had largely collapsed, and restoration efforts have since proven problematic: a first effort begun in 1960 was "+
                "interrupted by the coming to power of the Khmer Rouge, and records of the positions of the stones were lost. "+
                "A second attempt started in 1995 by a team of French-ledarcheologists as of 2005 was still ongoing, restricting "+
                "visitor access. As of November 2010, partial visitor access was once again allowed, though not to the central structure. "+
                "In April 2011, after 51 years, the archaeologists finished the restoration of the temple. King Norodom Sihamoni of "+
                "Cambodia and Prime Minister Francois Fillon of France were among those who first toured the renovated temple during the "+
                "inauguration ceremony on July 3, 2011.</p></div>"+
          "<div class='temple-image'><img src='../assets/gallery/baphoun/shutterstock_1130901029.jpg' alt='Baphuon temple'/></div></div>";
}
else if(temple=="banteay-srei-temple"){
  openHour.innerHTML = "<p>Open: 07:30</p><p>Close: 17:30</p>";
  templeTitle.textContent = "Banteay Srei Temple";
  templeInfo.innerHTML = "<div class='temple'><div class='temple-info'><p>"+
              "<strong>Banteay Srei</strong> or <strong>Banteay Srey</strong> (Khmer: ប្រាសាទបន្ទាយស្រី) is a 10th-century Cambodian temple "+
              "dedicated to the Hindu god Shiva. Located in the area of Angkor, it lies near the hill of Phnom Dei, 25 km (16 mi) "+
              "north-east of the main group of temples that once belonged to the medieval capitals of Yasodharapura and Angkor Thom. "+
              "Banteay Srei is built largely of red sandstone,a medium that lends itself to the elaborate decorative wall carvings which "+
              "are still observable today. The buildings themselves are miniature in scale,unusually so when measured by the standards "+
              "of Angkorian construction. The sefactors have made the temple extremely popular with tourists, and have led to its being "+
              "widely praised as a 'precious gem', or the 'jewel of Khmer art.'</p>"+
              "<p>Consecrated on 22 April 967 A.D., BantãySrĕi was the only major temple at Angkor not built by a monarch; "+
              "its construction is credited to the courtiers named Vishnukumara and Yajnavaraha: 367 / Yajñavarāha "+
              "(modern Khmer: យជ្ញវរាហៈ), who served as a counsellor to king Rajendravarman II (modern Khmer: ព្រះបាទរាជេន្រ្ទវរ្ម័ន). "+
              "The foundational stela says that Yajnavaraha, grandson of king Harsavarman I, 117 was a scholar and philanthropist "+
              "who helped those who suffered from illness, injustice, or poverty. His pupil was the future king Jayavarman V "+
              "(r. 968- ca. 1001). Originally, the temple was surrounded by a town called Īśvarapura.</p>"+
              "<p>Yajñavarāha's temple was primarily dedicated to the Hindu god Śiva. Originally, it carried the name "+
              "Tribhuvanamaheśvara—great lord of the threefold world—in reference to the Shaivite linga that served as its central "+
              "religious image. However, the temple buildings appear to be divided along the central east–west axis between those "+
              "buildings located south of the axis, which are devoted to Śiva, and those north of the axis, which are devoted to Viṣṇu.</p></div>"+
              "<div class='temple-image'><img src='../assets/gallery/banteay-srei-temple/banteay_srei_1.jpg' alt='Banteay srei temple'/></div></div>";
}else if(temple == "preah-khan-temple"){
  openHour.innerHTML = "<p>Open: 07:30</p><p>Close: 17:30</p>";
  templeTitle.textContent = "Preah Khan Temple";
  templeInfo.innerHTML = "<div class='temple'><div class='temple-info'><p>"+
              "<strong>Preah Khan</strong> (Khmer: ប្រាសាទព្រះខ័ន; 'RoyalSword') is a temple at Angkor, Cambodia, "+
              "built in the 12th century for King Jayavarman VII to honor his father. It is located northeast of Angkor Thomand "+
              "just west of the Jayatataka baray, with which it was associated. It was the centre of a substantial organization, "+
              "with almost 100,000 officials and servants. The temple is flat in design, with a basic plan of successive "+
              "rectangulargalleries around a Buddhist sanctuary complicated by Hindu satellite temples and numerous later additions. "+
              "Like the nearby Ta Prohm, Preah Khan has been left largely unrestored, with numerous trees and other vegetation growing "+
              "among the ruins. Preah Khan was built on the site of Jayavarman VII's victory over the invading Chams in 1191. "+
              "Unusually the modern name, meaning 'holy sword', is derived from the meaning of the original—Nagara Jayasri "+
              "(holy city of victory). The site may previously have been occupied by the royal palaces of Yasovarman II and Tribhuvanadityavarman.</p>"+
              "<p>The temple's foundation stela has provided considerable information about the history and administration of the site: "+
              "the main image, of the bodhisattva Avalokiteśvarain the form of the king's father, was dedicated in 1191 "+
              "(the king's mother had earlier been commemorated in the same way at Ta Prohm). 430 other deities also had "+
              "shrines on the site, each of which received an allotment of food, clothing,perfume and even mosquito nets; "+
              "the temple's wealth included gold, silver,gems, 112,300 pearls and a cow with gilded horns. The institution "+
              "combined the roles of city, temple and Buddhist university: there were 97,840 attendants and servants, including "+
              "1000 dancers and 1000 teachers.</p></div>"+
              "<div class='temple-image'><img src='../assets/gallery/preah-khan/40101905404_3399bc473e_b.jpg' alt='Preah khan temple'/></div></div>";
}
}

//////////////////////////////////////////////////////////////////

const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const heroEl = document.querySelector(".hero-section");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  heroEl.classList.toggle("nav-open");
});
