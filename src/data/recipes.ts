import type { Recipe } from '../types';

export const recipes: Recipe[] = [
    {
        id: '1',
        title: 'Klasik Menemen',
        description: 'Türk kahvaltılarının vazgeçilmezi, domates ve biberin yumurta ile muhteşem uyumu. Sıcak servis edilir.',
        image: '/images/menemen.png',
        prepTime: 10,
        cookTime: 20,
        servings: 2,
        cuisine: 'Türk',
        category: 'Kahvaltı',
        rating: 0,
        ratingCount: 0,
        ingredients: [
            { name: 'Yumurta', amount: 3, unit: 'adet', weight: '150g' },
            { name: 'Domates', amount: 3, unit: 'adet', weight: '400g' },
            { name: 'Yeşil Biber', amount: 4, unit: 'adet', weight: '100g' },
            { name: 'Sıvı Yağ', amount: 3, unit: 'yemek kaşığı', weight: '30ml' },
            { name: 'Tuz', amount: 1, unit: 'çay kaşığı', weight: '5g' },
            { name: 'Karabiber', amount: 0.5, unit: 'çay kaşığı', weight: '2g' }
        ],
        steps: [
            { order: 1, instruction: 'Biberleri ince ince doğrayın ve tavada yağ ile kavurun.' },
            { order: 2, instruction: 'Kabukları soyulmuş ve küp doğranmış domatesleri ekleyin.' },
            { order: 3, instruction: 'Domatesler suyunu çekene kadar pişirin.' },
            { order: 4, instruction: 'Yumurtaları kırın ve istediğiniz kıvama gelene kadar karıştırın.' },
            { order: 5, instruction: 'Baharatları ekleyip sıcak servis yapın.' }
        ],
        storage: {
            roomTemp: 'Maksimum 1 saat',
            fridge: 'Hava geçirmez kapta 1-2 gün (yeniden ısıtılarak tüketilmeli)',
            freezer: 'Dondurulması önerilmez',
            tips: 'En lezzetlisi taze yapıldığında. Buzdolabında saklarken üzerine streç film örtün.'
        },
        cookingMethods: [
            {
                name: 'Tavada (Klasik)',
                description: 'En yaygın ve lezzetli yöntem.',
                time: '20 dk',
                steps: [
                    { order: 1, instruction: 'Geniş bir tavaya yağı alın ve ısıtın.' },
                    { order: 2, instruction: 'İnce doğranmış biberleri ekleyip renkleri dönene kadar orta ateşte kavurun.' },
                    { order: 3, instruction: 'Kabukları soyulmuş ve küp doğranmış domatesleri ekleyin. Tavanın kapağını kapatıp domatesler yumuşayana kadar pişirin.' },
                    { order: 4, instruction: 'Domatesler suyunu çekince yumurtaları kırın. İsteğe göre karıştırın veya bütün bırakın.' },
                    { order: 5, instruction: 'Tuz ve baharatları ekleyip yumurtalar istediğiniz kıvama gelene kadar pişirin.' }
                ]
            },
            {
                name: 'Sahan Seti (Bakır)',
                description: 'Isıyı eşit dağıtan bakır sahanda geleneksel pişirme.',
                time: '15 dk',
                steps: [
                    { order: 1, instruction: 'Bakır sahanı kısık ateşte ısıtın ve tereyağını eritin.' },
                    { order: 2, instruction: 'Biberleri ekleyip hafifçe öldürün.' },
                    { order: 3, instruction: 'Domat esleri ekleyip iyice suyunu salana kadar pişirin.' },
                    { order: 4, instruction: 'Yumurtaları ekleyip hafif ateşte yavaş yavaş pişirin.' }
                ]
            },
            {
                name: 'Mikrodalga (Hızlı)',
                description: 'Pratik alternatif, ancak lezzet klasik kadar yoğun olmaz.',
                time: '5 dk',
                steps: [
                    { order: 1, instruction: 'Mikrodalgaya uygun kapta tüm malzemeleri karıştırın.' },
                    { order: 2, instruction: 'Yüksek güçte 2 dakika pişirin.' },
                    { order: 3, instruction: 'Karıştırıp 1-2 dakika daha pişirin.' }
                ]
            }
        ]
    },
    {
        id: '2',
        title: 'Mercimek Çorbası',
        description: 'Geleneksel Türk çorbası. Kırmızı mercimek, sebze ve baharatlarla hazırlanan sıcacık, doyurucu bir çorba.',
        image: '/images/mercimek.png',
        prepTime: 10,
        cookTime: 30,
        servings: 4,
        cuisine: 'Türk',
        category: 'Çorba',
        rating: 0,
        ratingCount: 0,
        ingredients: [
            { name: 'Kırmızı Mercimek', amount: 1, unit: 'su bardağı', weight: '200g' },
            { name: 'Soğan', amount: 1, unit: 'adet', weight: '150g' },
            { name: 'Havuç', amount: 1, unit: 'adet', weight: '100g' },
            { name: 'Domates Salçası', amount: 1, unit: 'yemek kaşığı', weight: '20g' },
            { name: 'Tereyağı', amount: 2, unit: 'yemek kaşığı', weight: '30g' },
            { name: 'Su', amount: 6, unit: 'su bardağı', weight: '1200ml' },
            { name: 'Tuz', amount: 1, unit: 'çay kaşığı', weight: '5g' },
            { name: 'Karabiber', amount: 0.5, unit: 'çay kaşığı', weight: '2g' },
            { name: 'Nane (kuru)', amount: 1, unit: 'çay kaşığı', weight: '2g' }
        ],
        steps: [
            { order: 1, instruction: 'Mercimekleri yıkayıp süzün.' },
            { order: 2, instruction: 'Soğan ve havucu küp doğrayın.' },
            { order: 3, instruction: 'Tencerede tereyağını eritip soğanları kavurun.' },
            { order: 4, instruction: 'Salçayı ekleyip kokusu çıkana kadar kavurun.' },
            { order: 5, instruction: 'Mercimek, havuç ve suyu ekleyip kaynatın.' },
            { order: 6, instruction: 'Malzemeler yumuşayana kadar (yaklaşık 25 dk) pişirin.' },
            { order: 7, instruction: 'Blenderdan geçirip pürüzsüz hale getirin.' },
            { order: 8, instruction: 'Tuz ve baharatları ekleyip 5 dakika daha kaynatın. Nane ve limon ile servis yapın.' }
        ],
        storage: {
            roomTemp: 'Maksimum 2 saat',
            fridge: 'Hava geçirmez kapta 3-4 gün',
            freezer: 'Porsiyonlara bölüp dondurun, 3 ay saklanabilir',
            tips: 'Dondurup çözdükten sonra kıvamı düşükse biraz su ekleyin. Limon ve naneyi servis sırasında ekleyin.'
        },
        cookingMethods: []
    },
    {
        id: '3',
        title: 'Karnıyarık',
        description: 'Patlıcanın kıyma ile buluştuğu enfes Türk yemeği. Fırında veya ocakta pişirilebilir.',
        image: '/images/karniyarik.png',
        prepTime: 20,
        cookTime: 45,
        servings: 4,
        cuisine: 'Türk',
        category: 'Ana Yemek',
        rating: 0,
        ratingCount: 0,
        ingredients: [
            { name: 'Patlıcan (orta boy)', amount: 4, unit: 'adet', weight: '800g' },
            { name: 'Kıyma', amount: 300, unit: 'gram', weight: '300g' },
            { name: 'Soğan', amount: 2, unit: 'adet', weight: '300g' },
            { name: 'Domates', amount: 3, unit: 'adet', weight: '400g' },
            { name: 'Yeşil Biber', amount: 2, unit: 'adet', weight: '100g' },
            { name: 'Sarımsak', amount: 3, unit: 'diş', weight: '10g' },
            { name: 'Sıvı Yağ (kızartma için)', amount: 200, unit: 'ml', weight: '200ml' },
            { name: 'Domates Salçası', amount: 2, unit: 'yemek kaşığı', weight: '40g' },
            { name: 'Tuz', amount: 1, unit: 'çay kaşığı', weight: '5g' },
            { name: 'Karabiber', amount: 1, unit: 'çay kaşığı', weight: '3g' }
        ],
        steps: [
            { order: 1, instruction: 'Patlıcanları boydan soyun (şeritler halinde) ve tuzlu suda bekletin.' },
            { order: 2, instruction: 'Kıymayı soğan, biber ve baharatlarla kavurun.' },
            { order: 3, instruction: 'Patlıcanları kurulayıp kızgın yağda kızartın.' },
            { order: 4, instruction: 'Patlıcanların ortasını hafifçe açıp iç harcı doldurun.' },
            { order: 5, instruction: 'Üzerine domates dilimleri yerleştirin.' },
            { order: 6, instruction: 'Biraz su ekleyip kapağını kapatarak pişirin (30-40 dk).' },
            { order: 7, instruction: 'Pilav ve cacık ile servis yapın.' }
        ],
        storage: {
            roomTemp: 'Maksimum 2 saat',
            fridge: 'Hava geçirmez kapta 2-3 gün',
            freezer: 'Pişmeden önce doldurulabilir ve dondurulabilir (3 ay)',
            tips: 'Yeniden ısıtırken üzerine biraz su serpip fırında ısıtın. Dondurulmuş karnıyarık doğrudan fırında pişirilebilir.'
        },
        cookingMethods: [
            {
                name: 'Tencerede (Klasik)',
                description: 'Geleneksel pişirme yöntemi, en lezzetli sonuç.',
                time: '45 dk',
                steps: [
                    { order: 1, instruction: 'Kızarmış patlıcanları geniş tencereye dizin.' },
                    { order: 2, instruction: 'Aralarına harcı doldurun.' },
                    { order: 3, instruction: 'Üzerine domates dilimler ve sıcak su ekleyin.' },
                    { order: 4, instruction: 'Kapağını kapatıp kısık ateşte 40 dakika pişirin.' }
                ]
            },
            {
                name: 'Fırında (Hafif)',
                description: 'Daha az yağlı ve sağlıklı alternatif.',
                time: '50 dk',
                steps: [
                    { order: 1, instruction: 'Patlıcanları soyup yağlayın ve fırın tepsisine dizin.' },
                    { order: 2, instruction: '200 derece fırında yumuşayana kadar (yaklaşık 30 dk) közleyin.' },
                    { order: 3, instruction: 'İç harcı doldurup sosunu ekleyin.' },
                    { order: 4, instruction: 'Tekrar fırına verip 20 dakika daha pişirin.' }
                ]
            }
        ]
    },
    {
        id: '4',
        title: 'Künefe',
        description: 'Tel kadayıfın peynir ile buluştuğu eşsiz Türk tatlısı. Sıcak şerbetle tatlandırılır, fıstık ile servis edilir.',
        image: '/images/kunefe.jpg',
        prepTime: 20,
        cookTime: 15,
        servings: 4,
        cuisine: 'Türk',
        category: 'Tatlı',
        rating: 0,
        ratingCount: 0,
        ingredients: [
            { name: 'Tel Kadayıf', amount: 500, unit: 'gram', weight: '500g' },
            { name: 'Tereyağı (eritilmiş)', amount: 200, unit: 'gram', weight: '200ml' },
            { name: 'Tuzsuz Peynir (tel peynir, dil peynir)', amount: 300, unit: 'gram', weight: '300g' },
            { name: 'Antep Fıstığı (kıyılmış)', amount: 50, unit: 'gram', weight: '50g' },
            { name: 'Şerbet için Şeker', amount: 2, unit: 'su bardağı', weight: '300g' },
            { name: 'Su', amount: 2, unit: 'su bardağı', weight: '400ml' },
            { name: 'Limon Suyu', amount: 1, unit: 'çay kaşığı', weight: '5ml' }
        ],
        steps: [
            { order: 1, instruction: 'Şerbeti hazırlayın: Şeker ve suyu kaynatıp limon suyu ekleyin, soğutun.' },
            { order: 2, instruction: 'Tel kadayıfı ufak ufak parçalayın ve eritilmiş tereyağı ile yoğurun.' },
            { order: 3, instruction: 'Yağlanan tepsinin yarısına kadayıfı yayın.' },
            { order: 4, instruction: 'Üzerine ince dilimlenmiş veya ufaltılmış peyniri döşeyip kalan kadayıfı örtün.' },
            { order: 5, instruction: 'Orta ateşte her iki tarafı altın sarısı kızarana kadar pişirin (10-15 dk).' },
            { order: 6, instruction: 'Sıcak sıcak porsiyonlayıp soğuk şerbet dökün.' },
            { order: 7, instruction: 'Üzerine kıyılmış fıstık serpin ve hemen servis yapın.' }
        ],
        storage: {
            roomTemp: 'En fazla 3-4 saat (şerbetsiz sakla)',
            fridge: 'Şerbetsiz 1 gün (yeniden ısıtıp şerbet ekleyin)',
            freezer: 'Dondurulması önerilmez',
            tips: 'Künefe en lezzetlisiyle sıcak tüketilir. Şerbeti servis sırasında dökün. Soğuyunca sertleşir.'
        },
        cookingMethods: []
    },
    {
        id: '5',
        title: 'Sütlaç',
        description: 'Geleneksel Türk sütlü tatlısı. Fırınlanmış sütlaç, üzeri karamelize altın sarısı renkle servis edilir.',
        image: '/images/sutlac.jpg',
        prepTime: 10,
        cookTime: 40,
        servings: 6,
        cuisine: 'Türk',
        category: 'Tatlı',
        rating: 0,
        ratingCount: 0,
        ingredients: [
            { name: 'Süt', amount: 1, unit: 'litre', weight: '1000ml' },
            { name: 'Pirinç', amount: 100, unit: 'gram', weight: '100g' },
            { name: 'Şeker', amount: 150, unit: 'gram', weight: '150g' },
            { name: 'Pirinç Unu', amount: 2, unit: 'yemek kaşığı', weight: '20g' },
            { name: 'Vanilya', amount: 1, unit: 'paket', weight: '5g' },
            { name: 'Tarçın', amount: 1, unit: 'çay kaşığı', weight: '3g' }
        ],
        steps: [
            { order: 1, instruction: 'Pirinci yıkayıp tencereye alın, üzerine su ekleyip kaynamaya bırakın.' },
            { order: 2, instruction: 'Pirinç yumuşayana kadar (15-20 dk) haşlayın.' },
            { order: 3, instruction: 'Sütü ekleyip karıştırarak kaynatın.' },
            { order: 4, instruction: 'Şeker ve pirinç ununu ekleyip sürekli karıştırarak koyulaşana kadar pişirin.' },
            { order: 5, instruction: 'Vanilya ekleyip karıştırın.' },
            { order: 6, instruction: 'Toprak veya cam kâselere paylaştırın.' },
            { order: 7, instruction: 'Fırını 200 dereceye ısıtıp sütlaçları üzeri kızarana kadar (10-15 dk) pişirin.' },
            { order: 8, instruction: 'Soğuduktan sonra tarçın serpin ve buzdolabında dinlendirip servis yapın.' }
        ],
        storage: {
            roomTemp: 'Maksimum 1 saat',
            fridge: 'Hava geçirmez kapta veya streç film ile kapatılmış halde 3-4 gün',
            freezer: 'Dondurulması önerilmez',
            tips: 'Buzdolabından çıkarınca 10 dakika bekleyip ılıkken servis edin. Üzerine tarçın ekini tam servis öncesi yapın.'
        },
        cookingMethods: []
    },
    {
        id: '6',
        title: 'Revani',
        description: 'İrmikli, şerbetli geleneksel Türk tatlısı. Üzeri Antep fıstığı veya hindistan cevizi ile süslenir.',
        image: '/images/revani.jpg',
        prepTime: 15,
        cookTime: 35,
        servings: 12,
        cuisine: 'Türk',
        category: 'Tatlı',
        rating: 0,
        ratingCount: 0,
        ingredients: [
            { name: 'İrmik', amount: 2, unit: 'su bardağı', weight: '300g' },
            { name: 'Yumurta', amount: 4, unit: 'adet', weight: '200g' },
            { name: 'Şeker', amount: 1, unit: 'su bardağı', weight: '150g' },
            { name: 'Yoğurt', amount: 1, unit: 'su bardağı', weight: '200g' },
            { name: 'Sıvı Yağ', amount: 0.75, unit: 'su bardağı', weight: '150ml' },
            { name: 'Kabartma Tozu', amount: 1, unit: 'paket', weight: '10g' },
            { name: 'Vanilya', amount: 1, unit: 'paket', weight: '5g' },
            { name: 'Antep Fıstığı (süs için)', amount: 50, unit: 'gram', weight: '50g' },
            { name: 'Şerbet için Şeker', amount: 3, unit: 'su bardağı', weight: '450g' },
            { name: 'Su', amount: 3, unit: 'su bardağı', weight: '600ml' }
        ],
        steps: [
            { order: 1, instruction: 'Önce şerbeti hazırlayın: Şeker ve suyu kaynatıp soğutun.' },
            { order: 2, instruction: 'Yumurta ve şekeri mikserle çırpın.' },
            { order: 3, instruction: 'Yoğurt, sıvı yağ ve irmiği ekleyip karıştırın.' },
            { order: 4, instruction: 'Kabartma tozu ve vanilyayı ekleyin.' },
            { order: 5, instruction: 'Yağlanmış tepsiye dökün, üzerini düzeltin.' },
            { order: 6, instruction: '180 derece fırında 35-40 dakika pişirin (kürdan testi yapın).' },
            { order: 7, instruction: 'Fırından çıkar çıkmaz soğuk şerbeti dökün.' },
            { order: 8, instruction: 'Şerbeti çekince dilimleyip Antep fıstığı serpin.' }
        ],
        storage: {
            roomTemp: 'Hava geçirmez kapta 2-3 gün',
            fridge: 'Streç film ile kapalı halde 5-7 gün',
            freezer: 'Porsiyonlara bölüp dondurulabilir (3 ay)',
            tips: 'Oda sıcaklığında saklamak lezzet ini korur. Dondurup çözünce biraz yumuşar ama tadı bozulmaz.'
        },
        cookingMethods: []
    },
    {
        id: '7',
        title: 'Spaghetti Carbonara',
        description: 'Roma\'nın ünlü makarna tarifi. Yumurta, peynir ve pancetta ile kremasız klasik lezzet.',
        image: '/images/carbonara.jpg',
        prepTime: 5,
        cookTime: 15,
        servings: 2,
        cuisine: 'İtalyan',
        category: 'Ana Yemek',
        rating: 0,
        ratingCount: 0,
        ingredients: [
            { name: 'Spaghetti', amount: 200, unit: 'gram', weight: '200g' },
            { name: 'Pancetta veya Guanciale', amount: 100, unit: 'gram', weight: '100g' },
            { name: 'Yumurta Sarısı', amount: 3, unit: 'adet', weight: '60g' },
            { name: 'Pecorino Romano Peyniri (rendelenmiş)', amount: 50, unit: 'gram', weight: '50g' },
            { name: 'Taze Öğütülmüş Karabiber', amount: 1, unit: 'çay kaşığı', weight: '3g' },
            { name: 'Tuz (makarna suyu için)', amount: 1, unit: 'çay kaşığı', weight: '5g' }
        ],
        steps: [
            { order: 1, instruction: 'Büyük bir tencerede bol tuzlu su kaynatın.' },
            { order: 2, instruction: 'Spaghetti\'yi al dente (dişe hafif dirençli) pişirin (8-10 dk).' },
            { order: 3, instruction: 'Pancetta\'yı küçük küpler halinde doğrayıp tavada kendi yağında kızartın.' },
            { order: 4, instruction: 'Yumurta sarıları ve rendelenmiş peyniri bir kasede çırpın. Bol karabiber ekleyin.' },
            { order: 5, instruction: 'Süzülen makarnayı (1 bardak makarna suyunu saklayın) pancetta\'nın olduğu tavaya ekleyin.' },
            { order: 6, instruction: 'Tavayı ateşten alın ve yumurta karışımını hızlıca ekleyip karıştırın.' },
            { order: 7, instruction: 'Gerekirse makarna suyu ile kıvamını ayarlayın. Ekstra karabiber ve peynir ile servis yapın.' }
        ],
        storage: {
            roomTemp: 'Maksimum 1 saat',
            fridge: 'Hava geçirmez kapta 1 gün (kalite düşer)',
            freezer: 'Dondurulması önerilmez (yumurta ve peynir sosu bozulur)',
            tips: 'Carbonara en lezzetlisi taze yapıldığında. Yeniden ısıtırsanız kısık ateşte veya benmari usulü ısıtın.'
        },
        cookingMethods: []
    },
    {
        id: '8',
        title: 'Pizza Margherita',
        description: 'Napoli\'nin klasik pizzası. San Marzano domates sosu, taze mozzarella ve fesleğen ile basit ama enfes.',
        image: '/images/pizza.jpg',
        prepTime: 90,
        cookTime: 12,
        servings: 2,
        cuisine: 'İtalyan',
        category: 'Ana Yemek',
        rating: 0,
        ratingCount: 0,
        ingredients: [
            { name: 'Pizza Hamuru (00 unu ile)', amount: 400, unit: 'gram', weight: '400g' },
            { name: 'San Marzano Domates Sosu', amount: 150, unit: 'gram', weight: '150ml' },
            { name: 'Taze Mozzarella', amount: 200, unit: 'gram', weight: '200g' },
            { name: 'Taze Fesleğen Yaprakları', amount: 10, unit: 'yaprak', weight: '5g' },
            { name: 'Sızma Zeytinyağı', amount: 2, unit: 'yemek kaşığı', weight: '20ml' },
            { name: 'Tuz', amount: 1, unit: 'çay kaşığı', weight: '5g' },
            { name: 'Parmesan (isteğe bağlı)', amount: 20, unit: 'gram', weight: '20g' }
        ],
        steps: [
            { order: 1, instruction: 'Pizza hamurunu oda sıcaklığında 30 dakika dinlendirin.' },
            { order: 2, instruction: 'Fırınınızı maksimum sıcaklığa (ideal 250-280 derece) ısıtın. Pizza taşı varsa fırında ısıtın.' },
            { order: 3, instruction: 'Hamuru yuvarlak açın (25-30 cm çap). Kalınlığı kenarlar hariç ince olmalı.' },
            { order: 4, instruction: 'Domates sosunu ince bir tabaka halindesürün (kenarlara 2 cm bırakın).' },
            { order: 5, instruction: 'Mozzarella\'yı dilimleyip veya ufaltıp eşit dağıtın.' },
            { order: 6, instruction: 'Hafif zeytinyağı gezdirin, tuz serpin.' },
            { order: 7, instruction: 'Fırının en sıcak yerinde 10-12 dakika pişirin (kenarlar altın sarısı olmalı).' },
            { order: 8, instruction: 'Fırından çıkar çıkmaz taze fesleğen yapraklarını yerleştirin. Sıcak servis yapın.' }
        ],
        storage: {
            roomTemp: 'Maksimum 2 saat',
            fridge: 'Hava geçirmez kap veya folyo ile kapatılmış halde 2-3 gün',
            freezer: 'Pişmiş pizza dilimleri 2 ay saklanabilir',
            tips: 'Yeniden ısıtırken fırını 200 dereceye ısıtıp 5-7 dakika pişirin. Mikrodalga yerine fırın veya tavada ısıtın.'
        },
        cookingMethods: []
    },
    {
        id: '9',
        title: 'Risotto alla Milanese',
        description: 'Milan\'ın ünlü safran aromalı kremalı pirinci. Altın sarısı rengi ve ipeksi dokusuyla klasik İtalyan tarifi.',
        image: '/images/risotto.jpg',
        prepTime: 5,
        cookTime: 25,
        servings: 4,
        cuisine: 'İtalyan',
        category: 'Ana Yemek',
        rating: 0,
        ratingCount: 0,
        ingredients: [
            { name: 'Arborio Pirinci', amount: 300, unit: 'gram', weight: '300g' },
            { name: 'Tavuk veya Sebze Suyu (sıcak)', amount: 1, unit: 'litre', weight: '1000ml' },
            { name: 'Soğan (ince kıyılmış)', amount: 1, unit: 'adet', weight: '100g' },
            { name: 'Beyaz Şarap (kuru)', amount: 100, unit: 'ml', weight: '100ml' },
            { name: 'Tereyağı', amount: 60, unit: 'gram', weight: '60g' },
            { name: 'Parmesan Peyniri (rendelenmiş)', amount: 80, unit: 'gram', weight: '80g' },
            { name: 'Safran', amount: 1, unit: 'tutam', weight: '0.2g' },
            { name: 'Zeytinyağı', amount: 2, unit: 'yemek kaşığı', weight: '20ml' },
            { name: 'Tuz ve Karabiber', amount: 1, unit: 'tutam', weight: '5g' }
        ],
        steps: [
            { order: 1, instruction: 'Safranı 2 yemek kaşığı sıcak suda bekletin.' },
            { order: 2, instruction: 'Derin bir tavada zeytinyağı ve 20g tereyağını ısıtın.' },
            { order: 3, instruction: 'İnce kıyılmış soğanı yumuşayana kadar (şeffaflaşana kadar) soteleyin.' },
            { order: 4, instruction: 'Pirinci ekleyip 2 dakika kavurun (daneler hafif şeffaflaşmalı).' },
            { order: 5, instruction: 'Beyaz şarabı ekleyip buharlaşana kadar karıştırın.' },
            { order: 6, instruction: 'Sıcak suyu bir kepçe bir kepçe ekleyin, her seferinde pirincin suyu çekmesini bekleyin.' },
            { order: 7, instruction: '18-20 dakika sürekli karıştırarak pişirin. Safran suyunu ortada ekleyin.' },
            { order: 8, instruction: 'Pirinç al dente olunca ateşten alın. Kalan tereyağı ve parmesanı ekleyip karıştırın (mantecatura).' },
            { order: 9, instruction: '2 dakika dinlendirip ekstra parmesan ile servis yapın.' }
        ],
        storage: {
            roomTemp: 'Maksimum 1 saat',
            fridge: 'Hava geçirmez kapta 2 gün',
            freezer: 'Dondurulması önerilmez (kıvam bozulur)',
            tips: 'Yeniden ısıtırken biraz s veya stok ekleyip kısık ateşte karıştırarak ısıtın. Ana öğün olarak en iyisi taze.'
        },
        cookingMethods: []
    },
    {
        id: '10',
        title: 'Tiramisu',
        description: 'İtalya\'nın en ünlü tatlısı. Espresso\'ya batırılmış kedi dili bisküvi, mascarpone kreması ve kakao tozundan oluşur.',
        image: '/images/tiramisu.jpg',
        prepTime: 30,
        cookTime: 0,
        servings: 8,
        cuisine: 'İtalyan',
        category: 'Tatlı',
        rating: 0,
        ratingCount: 0,
        ingredients: [
            { name: 'Mascarpone Peyniri', amount: 500, unit: 'gram', weight: '500g' },
            { name: 'Yumurta Sarısı', amount: 6, unit: 'adet', weight: '120g' },
            { name: 'Şeker', amount: 150, unit: 'gram', weight: '150g' },
            { name: 'Kedi Dili Bisküvi (Savoiardi)', amount: 300, unit: 'gram', weight: '300g' },
            { name: 'Espresso Kahve (soğutulmuş)', amount: 300, unit: 'ml', weight: '300ml' },
            { name: 'Kahve Likörü (isteğe bağlı)', amount: 50, unit: 'ml', weight: '50ml' },
            { name: 'Kakao Tozu (süsleme)', amount: 3, unit: 'yemek kaşığı', weight: '20g' },
            { name: 'Bitter Çikolata Rendesi (isteğe bağlı)', amount: 20, unit: 'gram', weight: '20g' }
        ],
        steps: [
            { order: 1, instruction: 'Yumurta sarıları ve şekeri mikserle beyazlaşana kadar çırpın.' },
            { order: 2, instruction: 'Mascarpone peynirini ekleyip düzgün bir kıvam alana kadar karıştırın.' },
            { order: 3, instruction: 'Espresso\'yu soğutun, isteğe göre likör ekleyin.' },
            { order: 4, instruction: 'Bisküvileri kahveye hızlıca batırıp (2 saniye) derin bir kaba dizin.' },
            { order: 5, instruction: 'Üzerine yarım mascarpone kremasını yayın.' },
            { order: 6, instruction: 'İkinci kat bisküvi dizin, kalan kremayı yayın.' },
            { order: 7, instruction: 'Üzerine streç film örün ve buzdolabında minimum 4 saat (ideal 8 saat) dinlendirin.' },
            { order: 8, instruction: 'Servis öncesi kakao tozu ve çikolata rendesi serpin.' }
        ],
        storage: {
            roomTemp: 'Saklanamaz (çiğ yumurta içerir)',
            fridge: 'Streç film ile kapalı 2-3 gün',
            freezer: 'Dondurulması önerilmez',
            tips: 'Çiğ yumurta yerine pastörize yumurta kullanabilirsiniz. Kakaoyu servis öncesi serpin, yoksa ıslanır.'
        },
        cookingMethods: []
    },
    {
        id: '11',
        title: 'Panna Cotta',
        description: 'İtalyan sütlü tatlısı. İpeksi yumuşak doku, meyveli sos veya karamel ile servis edilir.',
        image: '/images/pannacotta.jpg',
        prepTime: 15,
        cookTime: 10,
        servings: 6,
        cuisine: 'İtalyan',
        category: 'Tatlı',
        rating: 0,
        ratingCount: 0,
        ingredients: [
            { name: 'Krema (yağlı)', amount: 500, unit: 'ml', weight: '500ml' },
            { name: 'Süt', amount: 250, unit: 'ml', weight: '250ml' },
            { name: 'Şeker', amount: 100, unit: 'gram', weight: '100g' },
            { name: 'Vanilya Özütü', amount: 1, unit: 'çay kaşığı', weight: '5ml' },
            { name: 'Jelatin (toz)', amount: 10, unit: 'gram', weight: '10g' },
            { name: 'Su (jelatin için)', amount: 3, unit: 'yemek kaşığı', weight: '45ml' },
            { name: 'Kırmızı Meyve Sosu (çilek, frambuaz)', amount: 200, unit: 'gram', weight: '200g' }
        ],
        steps: [
            { order: 1, instruction: 'Jelatini soğuk suda 5 dakika şişirin.' },
            { order: 2, instruction: 'Krema, süt ve şekeri tencerede kısık ateşte kaynatın (kaynamasın, sadece ısınsın).' },
            { order: 3, instruction: 'Vanilya özünü ekleyin.' },
            { order: 4, instruction: 'Ateşten alıp şişmiş jelatini ekleyin, iyice eritin.' },
            { order: 5, instruction: 'Karışımı kâselere veya kalıplara paylaştırın.' },
            { order: 6, instruction: 'Buzdolabında minimum 4 saat (ideal gece boyu) bekletin.' },
            { order: 7, instruction: 'Servis öncesi kâsenin kenarlarını sıcak bıçakla geçirip tabağa ters çevirin.' },
            { order: 8, instruction: 'Üzerine meyve sosu veya taze meyveler ekleyin.' }
        ],
        storage: {
            roomTemp: 'Maksimum 1 saat',
            fridge: 'Streç film kapalı 3-4 gün',
            freezer: 'Dondurulması önerilmez',
            tips: 'Kalıptan çıkarmak için tabana sıcak su değdirin. Meyveli sosu servis sırasında ekleyin.'
        },
        cookingMethods: []
    },
    {
        id: '12',
        title: 'Coq au Vin',
        description: 'Fransız klasiği. Kırmızı şarapta pişirilmiş tavuk, mantar, soğan ve domuz pastırmasıyla zengin bir güveç.',
        image: '/images/coqauvin.jpg',
        prepTime: 20,
        cookTime: 90,
        servings: 4,
        cuisine: 'Fransız',
        category: 'Ana Yemek',
        rating: 0,
        ratingCount: 0,
        ingredients: [
            { name: 'Tavuk (parçalanmış, but ve göğüs)', amount: 1, unit: 'kg', weight: '1000g' },
            { name: 'Kırmızı Şarap (Burgundy tipi)', amount: 750, unit: 'ml', weight: '750ml' },
            { name: 'Domuz Pastırması (bacon/lardons)', amount: 150, unit: 'gram', weight: '150g' },
            { name: 'İnci Soğan', amount: 200, unit: 'gram', weight: '200g' },
            { name: 'Mantar (şapkalı)', amount: 250, unit: 'gram', weight: '250g' },
            { name: 'Havuç', amount: 2, unit: 'adet', weight: '200g' },
            { name: 'Sarımsak', amount: 4, unit: 'diş', weight: '15g' },
            { name: 'Domates Salçası', amount: 2, unit: 'yemek kaşığı', weight: '30g' },
            { name: 'Taze Kekik ve Defne Yaprağı', amount: 3, unit: 'dal', weight: '5g' },
            { name: 'Tereyağı', amount: 40, unit: 'gram', weight: '40g' },
            { name: 'Un', amount: 2, unit: 'yemek kaşığı', weight: '20g' },
            { name: 'Tavuk Suyu', amount: 250, unit: 'ml', weight: '250ml' },
            { name: 'Tuz ve Karabiber', amount: 1, unit: 'tutam', weight: '10g' }
        ],
        steps: [
            { order: 1, instruction: 'Tavuk parçalarını tuz ve karabiber ile baharatlayın.' },
            { order: 2, instruction: 'Derin tencerede pastırmayı kızartın, kenara alın.' },
            { order: 3, instruction: 'Aynı yağda tavukları her tarafı kızarana kadar pişirin, kenara alın.' },
            { order: 4, instruction: 'Soğan, havuç ve sarımsağı soteleyin.' },
            { order: 5, instruction: 'Un ekleyip 1 dakika karıştırın.' },
            { order: 6, instruction: 'Şarabı, tavuk suyunu, domates salçasını ekleyin. Kekik ve defne ekleyin.' },
            { order: 7, instruction: 'Tavuk ve pastırmayı geri koyun, kaynattıktan sonra kısık ateşte 1 saat pişirin.' },
            { order: 8, instruction: 'Mantarları tereyağında soteleyin, son 15 dakikada ekleyin.' },
            { order: 9, instruction: 'Sos koyulaşana kadar pişirin. Ekmek veya patates püresi ile servis yapın.' }
        ],
        storage: {
            roomTemp: 'Maksimum 2 saat',
            fridge: 'Hava geçirmez kapta 3-4 gün',
            freezer: 'Por siyonlara bölüp 3 ay saklanabilir',
            tips: 'Bir gün bekledikten sonra lezzeti daha da artar. Yeniden ısıtırken kısık ateşte yavaşça ısıtın.'
        },
        cookingMethods: []
    },
    {
        id: '13',
        title: 'Ratatouille',
        description: 'Provence\'ın meşhur sebze güveci. Patlıcan, kabak, biber ve domates uyumlu bir şekilde fırınlanır.',
        image: '/images/ratatouille.jpg',
        prepTime: 25,
        cookTime: 50,
        servings: 6,
        cuisine: 'Fransız',
        category: 'Ana Yemek',
        rating: 0,
        ratingCount: 0,
        ingredients: [
            { name: 'Patlıcan', amount: 2, unit: 'adet', weight: '400g' },
            { name: 'Kabak', amount: 2, unit: 'adet', weight: '400g' },
            { name: 'Kırmızı Biber', amount: 2, unit: 'adet', weight: '300g' },
            { name: 'Sarı Biber', amount: 1, unit: 'adet', weight: '150g' },
            { name: 'Domates', amount: 4, unit: 'adet', weight: '500g' },
            { name: 'Soğan', amount: 1, unit: 'adet', weight: '150g' },
            { name: 'Sarımsak', amount: 4, unit: 'diş', weight: '15g' },
            { name: 'Domates Sosu (konserve)', amount: 400, unit: 'gram', weight: '400ml' },
            { name: 'Zeytinyağı', amount: 4, unit: 'yemek kaşığı', weight: '60ml' },
            { name: 'Taze Kekik, Fesleğen, Biberiye', amount: 3, unit: 'dal', weight: '10g' },
            { name: 'Tuz ve Karabiber', amount: 1, unit: 'tutam', weight: '10g' }
        ],
        steps: [
            { order: 1, instruction: 'Fırını 180 dereceye ısıtın.' },
            { order: 2, instruction: 'Patlıcan ve kabakları yuvarlak dilimleyin (5mm kalınlık).' },
            { order: 3, instruction: 'Biberleri ve domatesleri aynı şekilde dilimleyin.' },
            { order: 4, instruction: 'Fırın tepsisine domates sosunu yayın, üzerine ince kıyılmış soğan ve sarımsak serpin.' },
            { order: 5, instruction: 'Sebzeleri şerit şerit (patlıcan-kabak-biber-domates sırası ile) dizin.' },
            { order: 6, instruction: 'Zeytinyağı, tuz ve baharatlarla tat verin. Taze ot yapraklarını yerleştirin.' },
            { order: 7, instruction: 'Üzerini folyo ile kapatın, fırında 40 dakika pişirin.' },
            { order: 8, instruction: 'Folyoyu açıp 10 dakika daha pişirin (üzeri hafif kızarsın).' },
            { order: 9, instruction: 'Ilık veya oda sıcaklığında, taze ekmek ile servis yapın.' }
        ],
        storage: {
            roomTemp: 'Maksimum 2 saat',
            fridge: 'Hava geçirmez kapta 4-5 gün',
            freezer: '3 ay (doku biraz yumuşar)',
            tips: 'Bir gün dinlendikten sonra lezzetleri kaynaşır. Soğuk veya ılık servis edebilirsiniz.'
        },
        cookingMethods: []
    },
    {
        id: '14',
        title: 'Boeuf Bourguignon',
        description: 'Burgundy\'nin klasik dana yahni si. Kırmızı şarap, mantar ve soğan ile uzun süre pişirilen zengin bir Fransız yemeği.',
        image: '/images/beefbourguignon.jpg',
        prepTime: 30,
        cookTime: 150,
        servings: 6,
        cuisine: 'Fransız',
        category: 'Ana Yemek',
        rating: 0,
        ratingCount: 0,
        ingredients: [
            { name: 'Dana Eti (kuşbaşı)', amount: 1, unit: 'kg', weight: '1000g' },
            { name: 'Kırmızı Şarap (Burgundy)', amount: 750, unit: 'ml', weight: '750ml' },
            { name: 'Domuz Pastırması (lardons)', amount: 200, unit: 'gram', weight: '200g' },
            { name: 'Havuç (büyük)', amount: 3, unit: 'adet', weight: '300g' },
            { name: 'Soğan', amount: 2, unit: 'adet', weight: '300g' },
            { name: 'İnci Soğan', amount: 250, unit: 'gram', weight: '250g' },
            { name: 'Mantar (şapkalı)', amount: 300, unit: 'gram', weight: '300g' },
            { name: 'Sarımsak', amount: 4, unit: 'diş', weight: '15g' },
            { name: 'Domates Salçası', amount: 2, unit: 'yemek kaşığı', weight: '30g' },
            { name: 'Sığır Suyu', amount: 500, unit: 'ml', weight: '500ml' },
            { name: 'Un', amount: 3, unit: 'yemek kaşığı', weight: '30g' },
            { name: 'Tereyağı', amount: 50, unit: 'gram', weight: '50g' },
            { name: 'Kekik, Defne, Maydanoz', amount: 1, unit: 'demet', weight: '10g' },
            { name: 'Tuz ve Karabiber', amount: 1, unit: 'tutam', weight: '10g' }
        ],
        steps: [
            { order: 1, instruction: 'Dana etlerini kağıt havlu ile kurulayıp tuz-karabiber ile baharatlayın.' },
            { order: 2, instruction: 'Derin bir tencerede veya döküm tencerede pastırmayı kızartın, yağını çıkarın.' },
            { order: 3, instruction: 'Etleri toplu halde değil, küçük gruplar halinde her tarafı kızarana kadar pişirin.' },
            { order: 4, instruction: 'Havuç, soğan ve sarımsağı ekleyip yumuşayana kadar soteleyin.' },
            { order: 5, instruction: 'Unu serpip 2 dakika kavurun.' },
            { order: 6, instruction: 'Şarap, sığır suyu, domates salçası ve otları ekleyin.' },
            { order: 7, instruction: 'Etleri ve pastırmayı geri koyun. Kaynamaya geldikten sonra kapağı kapatıp fırında 150 derecede 2.5 saat pişirin.' },
            { order: 8, instruction: 'Son 30 dakikada inci soğan ve mantarları tereyağında soteleyin, güveçe ekleyin.' },
            { order: 9, instruction: 'Patates püresi veya ekmek ile servis yapın.' }
        ],
        storage: {
            roomTemp: 'Maksimum 2 saat',
            fridge: 'Hava geçirmez kapta 3-4 gün',
            freezer: 'Porsiyonlara bölüp 3 ay',
            tips: '2. gün daha da lezzetlidir. Yavaş ısıtarak servis edin.'
        },
        cookingMethods: []
    },
    {
        id: '15',
        title: 'Crème Brûlée',
        description: 'Fransız klasiği karamelize kremalı tatlı. Kremsi vanilya muhallebisi üzeri karamelize şeker tabakası ile servis edilir.',
        image: '/images/cremebrulee.jpg',
        prepTime: 20,
        cookTime: 45,
        servings: 6,
        cuisine: 'Fransız',
        category: 'Tatlı',
        rating: 0,
        ratingCount: 0,
        ingredients: [
            { name: 'Krema (yağlı)', amount: 500, unit: 'ml', weight: '500ml' },
            { name: 'Yumurta Sarısı', amount: 6, unit: 'adet', weight: '120g' },
            { name: 'Toz Şeker', amount: 100, unit: 'gram', weight: '100g' },
            { name: 'Vanilya Çubuğu', amount: 1, unit: 'adet', weight: '5g' },
            { name: 'Karamelize için Toz Şeker', amount: 6, unit: 'yemek kaşığı', weight: '60g' }
        ],
        steps: [
            { order: 1, instruction: 'Kremayı ve vanilya çubuğunu tencerede ısıtın (kaynamasın).' },
            { order: 2, instruction: 'Yumurta sarıları ve şekeri mikserle beyazlaşana kadar çırpın.' },
            { order: 3, instruction: 'Sıcak kremayı yavaş yavaş yumurta karışımına ekleyip karıştırın.' },
            { order: 4, instruction: 'Karışımı süzün ve krema kâselerine paylaştırın.' },
            { order: 5, instruction: 'Fırın tepsisine dizin, tepsiyi yarısına kadar sıcak su doldurun (benmari).' },
            { order: 6, instruction: '160 derece fırında 40-45 dakika pişirin (ortası hafif titrek olmalı).' },
            { order: 7, instruction: 'Buzdolabında minimum 4 saat soğutun.' },
            { order: 8, instruction: 'Servis öncesi üzerine ince tabaka toz şeker serpin ve mutfak alevi ile karamelize edin.' },
            { order: 9, instruction: 'Karamel donunca (1-2 dakika) servis yapın.' }
        ],
        storage: {
            roomTemp: 'Karamelize öncesi maksimum 30 dakika',
            fridge: 'Karamelize edilmeden 3 gün',
            freezer: 'Dondurulması önerilmez',
            tips: 'Karameli servis öncesi yapın. Buzdolabında bekletilirse yumuşar.'
        },
        cookingMethods: []
    },
    {
        id: '16',
        title: 'Macarons Fransız',
        description: 'Renkli badem unlu Fransız kurabiyesi. İki ince kabuk arasında kremalı dolgu ile servis edilir.',
        image: '/images/macarons.png',
        prepTime: 60,
        cookTime: 15,
        servings: 24,
        cuisine: 'Fransız',
        category: 'Tatlı',
        rating: 0,
        ratingCount: 0,
        ingredients: [
            { name: 'Badem Unu', amount: 200, unit: 'gram', weight: '200g' },
            { name: 'Pudra Şekeri', amount: 200, unit: 'gram', weight: '200g' },
            { name: 'Yumurta Akı (oda sıcaklığında)', amount: 150, unit: 'gram', weight: '150g' },
            { name: 'Toz Şeker', amount: 50, unit: 'gram', weight: '50g' },
            { name: 'Gıda Boyası (isteğe göre)', amount: 1, unit: 'damla', weight: '0.5g' },
            { name: 'Ganache/Krem Dolgu', amount: 200, unit: 'gram', weight: '200g' }
        ],
        steps: [
            { order: 1, instruction: 'Badem unu ve pudra şekerini karıştırıp elekten geçirin (2 kez).' },
            { order: 2, instruction: 'Yumurta akını mikserle köpürtün, toz şekeri yavaş yavaş ekleyip sert köpük elde edin.' },
            { order: 3, instruction: 'Gıda boyasını ekleyin (isteğe göre).' },
            { order: 4, instruction: 'Kuru karışımı köpüğe ekleyip macaronage tekniği ile karıştırın (lav kıvamı).' },
            { order: 5, instruction: 'Pişirme kağıdına yuvarlak şekiller halinde sıkın (3-4 cm çap).' },
            { order: 6, instruction: 'Oda sıcaklığında 30-60 dakika bekletin (üzeri kuruyup mat olmalı).' },
            { order: 7, instruction: '150 derece fırında 12-15 dakika pişirin.' },
            { order: 8, instruction: 'Tamamen soğuduktan sonra krem dolguyu aralarına sıkın.' }
        ],
        storage: {
            roomTemp: 'Hava geçirmez kapta 2 gün',
            fridge: 'Hava geçirmez kapta 5 gün (lezzet daha iyi)',
            freezer: '3 ay (dolgu olmadan)',
            tips: '1 gün buzdolabında dinlendikten sonra lezzeti artar. Servis öncesi 30 dakika önce çıkarın.'
        },
        cookingMethods: []
    },
    {
        id: '17',
        title: 'Tarte Tatin',
        description: 'Ters çevrilmiş elmalı Fransız tart tatlısı. Karamelize elmalar ile tereyağlı hamur, sıcak servis edilir.',
        image: '/images/tartetatin.jpg',
        prepTime: 20,
        cookTime: 40,
        servings: 8,
        cuisine: 'Fransız',
        category: 'Tatlı',
        rating: 0,
        ratingCount: 0,
        ingredients: [
            { name: 'Elma (Golden, Granny Smith)', amount: 8, unit: 'adet', weight: '1200g' },
            { name: 'Tereyağı', amount: 100, unit: 'gram', weight: '100g' },
            { name: 'Toz Şeker', amount: 150, unit: 'gram', weight: '150g' },
            { name: 'Milföy Hamuru', amount: 1, unit: 'paket', weight: '250g' },
            { name: 'Vanilya Özütü', amount: 1, unit: 'çay kaşığı', weight: '5ml' },
            { name: 'Tarçın', amount: 0.5, unit: 'çay kaşığı', weight: '2g' }
        ],
        steps: [
            { order: 1, instruction: 'Elmaları soyup dörde bölün, çekirdeklerini çıkarın.' },
            { order: 2, instruction: 'Fırına dayanıklı tavada tereyağı ve şekeri eritin.' },
            { order: 3, instruction: 'Elmaları dik şekilde, sıkıca dizin (karamelize olup küçülecekler).' },
            { order: 4, instruction: 'Vanilya ve tarçını ekleyin.' },
            { order: 5, instruction: 'Orta-yüksek ateşte 20-25 dakika pişirin (elmalar yumuşak, karamel koyulaşsın).' },
            { order: 6, instruction: 'Milföyü elmaların üzerine örtün, kenarları içe bastırın.' },
            { order: 7, instruction: '190 derece fırında 25-30 dakika pişirin (hamur altın sarısı).' },
            { order: 8, instruction: '5 dakika dinlendirip tabağa ters çevirin.' },
            { order: 9, instruction: 'Sıcak servis yapın, isteğe göre vanilyalı dondurma ekleyin.' }
        ],
        storage: {
            roomTemp: 'Maksimum 4 saat',
            fridge: 'Hava geçirmez kapta 2 gün',
            freezer: 'Dondurul ması önerilmez (hamur yumuşar)',
            tips: 'Yeniden ısıtmak için fırında 10 dakika ısıtın. En lezzetlisi taze iken.'
        },
        cookingMethods: []
    }
];

