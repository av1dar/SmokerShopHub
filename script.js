// --- БАЗА ТОВАРІВ ---
const products = [
    // POD-СИСТЕМИ
    { id: 1, name: "Vaporesso XROS 3", price: 1150, cat: "pod", image: "img/VaporessoXROS3.png", desc: "Топова под-система з регулюванням затяжки." },
    { id: 2, name: "Elf Bar 5000", price: 350, cat: "pod", image: "img/ElfBar5000.png", desc: "Популярна одноразка." },
    { id: 3, name: "Voopoo V.Thru Pro", price: 950, cat: "pod", image: "img/VoopooV.png", desc: "Потужна система з екраном." },
    { id: 4, name: "Vaporesso Xros 4 mini", price: 799, cat: "pod", image: "img/VAPORESSOXROS4Mini.png", desc: "Компактна под-система з чіткою затяжкою." },
    { id: 5, name: "Vaporesso Xros 5", price: 1170, cat: "pod", image: "img/VaporessoXROS5PodKit.png", desc: "Нове покоління XROS з покращеною автономністю." },
    { id: 6, name: "Vaporesso Xros 5mini", price: 900, cat: "pod", image: "img/VAPORESSOXROS5Mini.png", desc: "Міні-версія XROS 5, зручна для кишені." },

    // РІДИНИ
    { id: 8, name: "Chaser Lux 30ml", price: 350, cat: "liquid", image: "img/ChaserLux30ml.png", desc: "Смак: Кавун-Лимон. Міцність: 50мг." },
    { id: 9, name: "Alchemist Frappuccino", price: 380, cat: "liquid", image: "img/AlchemistFrappuccino.png", desc: "Смак: Кавовий десерт." },
    { id: 10, name: "3Ger Mint", price: 320, cat: "liquid", image: "img/3GerMint.png", desc: "Освіжаюча м'ята." },
    { id: 11, name: "Phantom 30ml", price: 350, cat: "liquid", image: "img/Phantom30ml.png", desc: "Насичений фруктовий смак, 30мл." },
    { id: 12, name: "Punch 15ML", price: 210, cat: "liquid", image: "img/Punch15ML.png", desc: "Яскравий ягідний мікс, 15мл." },
    { id: 13, name: "HQD 10ML 50MG", price: 160, cat: "liquid", image: "img/HQD10ML50MG.png", desc: "Сольова рідина, міцність 50мг, 10мл." },

    // ОДНОРАЗКИ
    { id: 14, name: "Elf Bar 5000", price: 550, cat: "disposable", image: "img/ElfBar5000.png", desc: "5000 тяг, перезаряджається." },
    { id: 15, name: "Lost Mary 4000", price: 480, cat: "disposable", image: "img/LostMary4000.png", desc: "Смак: Кола." },

    // КОМПЛЕКТУЮЧІ
    { id: 16, name: "Картридж XROS 0.6", price: 130, cat: "parts", image: "img/cartridgexros06.png", desc: "Оригінальний картридж 0.6 Ом." },
    { id: 17, name: "Відкривачка для рідин", price: 200, cat: "parts", image: "img/ВідкривачкаДляРідин.png", desc: "Зручний інструмент для відкривання флаконів." },

    // ==========================================================================
    // ПОВНИЙ АСОРТИМЕНТ ЗІ СКЛАДУ (імпортовано з інвентарної таблиці, лише товари
    // "в наявності"). Ціни розраховані як РРЦ / кількість = ціна за одиницю.
    // Товари без реального фото використовують плейсхолдер з назвою серії —
    // заміни на реальні фото, коли будуть.
    // ==========================================================================
    { id: 100, name: 'Elf bar EP 8000 — Blackberry cherry lemon', price: 500, cat: 'disposable', image: 'img/ElfBar5000.png', desc: 'Серія: Elf bar EP 8000. В наявності: 2 шт.' },
    { id: 101, name: 'Elf bar EP 8000 — Blue razz ice', price: 500, cat: 'disposable', image: 'img/ElfBar5000.png', desc: 'Серія: Elf bar EP 8000. В наявності: 2 шт.' },
    { id: 102, name: 'Elf bar EP 8000 — Blue sour raspberry', price: 500, cat: 'disposable', image: 'img/ElfBar5000.png', desc: 'Серія: Elf bar EP 8000. В наявності: 2 шт.' },
    { id: 103, name: 'Elf bar EP 8000 — Cherry peach colada', price: 500, cat: 'disposable', image: 'img/ElfBar5000.png', desc: 'Серія: Elf bar EP 8000. В наявності: 2 шт.' },
    { id: 104, name: 'Elf bar EP 8000 — Lemon lime', price: 500, cat: 'disposable', image: 'img/ElfBar5000.png', desc: 'Серія: Elf bar EP 8000. В наявності: 2 шт.' },
    { id: 105, name: 'Elf bar EP 8000 — Lychee lime', price: 500, cat: 'disposable', image: 'img/ElfBar5000.png', desc: 'Серія: Elf bar EP 8000. В наявності: 2 шт.' },
    { id: 106, name: 'Lost mary 5000 — Імбірний табак', price: 400, cat: 'disposable', image: 'img/LostMary4000.png', desc: 'Серія: Lost mary 5000. В наявності: 2 шт.' },
    { id: 107, name: 'Lost mary 5000 — Секретний смак (pure)', price: 400, cat: 'disposable', image: 'img/LostMary4000.png', desc: 'Серія: Lost mary 5000. В наявності: 1 шт.' },
    { id: 108, name: 'Elf bar BC10000 — Americano ice', price: 670, cat: 'disposable', image: 'img/ElfBar5000.png', desc: 'Серія: Elf bar BC10000. В наявності: 1 шт.' },
    { id: 109, name: 'Elf bar BC10000 — Blue razz ice', price: 750, cat: 'disposable', image: 'img/ElfBar5000.png', desc: 'Серія: Elf bar BC10000. В наявності: 2 шт.' },
    { id: 110, name: 'Elf bar BC10000 — Strawberry watermelon bubblegum', price: 750, cat: 'disposable', image: 'img/ElfBar5000.png', desc: 'Серія: Elf bar BC10000. В наявності: 4 шт.' },
    { id: 111, name: 'Elf bar BC10000 — Raspberry watermelon lemon', price: 750, cat: 'disposable', image: 'img/ElfBar5000.png', desc: 'Серія: Elf bar BC10000. В наявності: 4 шт.' },
    { id: 112, name: 'Elf bar BC10000 — Watermelon cherry', price: 750, cat: 'disposable', image: 'img/ElfBar5000.png', desc: 'Серія: Elf bar BC10000. В наявності: 2 шт.' },
    { id: 113, name: 'Elf bar BC10000 — Apple pear', price: 750, cat: 'disposable', image: 'img/ElfBar5000.png', desc: 'Серія: Elf bar BC10000. В наявності: 2 шт.' },
    { id: 114, name: 'Elf bar BC10000 — Cherry loca', price: 750, cat: 'disposable', image: 'img/ElfBar5000.png', desc: 'Серія: Elf bar BC10000. В наявності: 2 шт.' },
    { id: 115, name: 'Elf bar BC10000 — Green plum sour lime', price: 750, cat: 'disposable', image: 'img/ElfBar5000.png', desc: 'Серія: Elf bar BC10000. В наявності: 2 шт.' },
    { id: 116, name: 'Elf bar BC10000 — Sour watermelon candy', price: 750, cat: 'disposable', image: 'img/ElfBar5000.png', desc: 'Серія: Elf bar BC10000. В наявності: 2 шт.' },
    { id: 117, name: 'Elf bar RC10000 — Blueberry watermelon', price: 650, cat: 'disposable', image: 'img/ElfBar5000.png', desc: 'Серія: Elf bar RC10000. В наявності: 1 шт.' },
    { id: 118, name: 'Elf bar RC10000 — Orange mango guava', price: 650, cat: 'disposable', image: 'img/ElfBar5000.png', desc: 'Серія: Elf bar RC10000. В наявності: 1 шт.' },
    { id: 119, name: 'Elf bar RC10000 — Ruby raspberry', price: 650, cat: 'disposable', image: 'img/ElfBar5000.png', desc: 'Серія: Elf bar RC10000. В наявності: 1 шт.' },
    { id: 120, name: 'Alchemist 30ml 50mg — Vero Tobacco', price: 350, cat: 'liquid', image: 'img/AlchemistFrappuccino.png', desc: 'Серія: Alchemist 30ml 50mg. В наявності: 1 шт.' },
    { id: 121, name: 'Alchemist 30ml 50mg — Frappuccino', price: 350, cat: 'liquid', image: 'img/AlchemistFrappuccino.png', desc: 'Серія: Alchemist 30ml 50mg. В наявності: 4 шт.' },
    { id: 122, name: 'Chaser Mix Ultra 30ml 65mg — Полуниця Банан', price: 330, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Mix%20Ultra%2030m', desc: 'Серія: Chaser Mix Ultra 30ml 65mg. В наявності: 6 шт.' },
    { id: 123, name: 'Chaser Mix Ultra 30ml 65mg — Полуниця Виноград', price: 330, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Mix%20Ultra%2030m', desc: 'Серія: Chaser Mix Ultra 30ml 65mg. В наявності: 5 шт.' },
    { id: 124, name: 'Chaser Black 30ml 65mg — BLACKCURANT PEACH APPLE', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Black%2030ml%2065', desc: 'Серія: Chaser Black 30ml 65mg. В наявності: 7 шт.' },
    { id: 125, name: 'Chaser Black 30ml 65mg — Blueberry lemonade', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Black%2030ml%2065', desc: 'Серія: Chaser Black 30ml 65mg. В наявності: 7 шт.' },
    { id: 126, name: 'Chaser Black 30ml 65mg — ENERGY GRAPE', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Black%2030ml%2065', desc: 'Серія: Chaser Black 30ml 65mg. В наявності: 7 шт.' },
    { id: 127, name: 'Chaser Black 30ml 65mg — ENERGY RASPBERRY', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Black%2030ml%2065', desc: 'Серія: Chaser Black 30ml 65mg. В наявності: 6 шт.' },
    { id: 128, name: 'Chaser Black 30ml 65mg — FLIRT', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Black%2030ml%2065', desc: 'Серія: Chaser Black 30ml 65mg. В наявності: 7 шт.' },
    { id: 129, name: 'Chaser Black 30ml 65mg — STRAWBERRY BLUEBERRY', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Black%2030ml%2065', desc: 'Серія: Chaser Black 30ml 65mg. В наявності: 8 шт.' },
    { id: 130, name: 'Chaser Black 30ml 65mg — TRIPLE SOUR APPLE', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Black%2030ml%2065', desc: 'Серія: Chaser Black 30ml 65mg. В наявності: 7 шт.' },
    { id: 131, name: 'Chaser Black 30ml 65mg — WATERMELON LEMON', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Black%2030ml%2065', desc: 'Серія: Chaser Black 30ml 65mg. В наявності: 7 шт.' },
    { id: 132, name: 'Chaser Black 30ml 65mg — LEMON MINT', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Black%2030ml%2065', desc: 'Серія: Chaser Black 30ml 65mg. В наявності: 5 шт.' },
    { id: 133, name: 'Chaser Black 30ml 65mg — FOREST MIX', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Black%2030ml%2065', desc: 'Серія: Chaser Black 30ml 65mg. В наявності: 6 шт.' },
    { id: 134, name: 'Chaser Black 30ml 65mg — KIWI WILD STRAWBERRY', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Black%2030ml%2065', desc: 'Серія: Chaser Black 30ml 65mg. В наявності: 8 шт.' },
    { id: 135, name: 'Chaser Black 30ml 65mg — Apple Cactus Lime', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Black%2030ml%2065', desc: 'Серія: Chaser Black 30ml 65mg. В наявності: 8 шт.' },
    { id: 136, name: 'Chaser For Pods 30ml 65mg — Абрикос', price: 330, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20For%20Pods%2030ml', desc: 'Серія: Chaser For Pods 30ml 65mg. В наявності: 2 шт.' },
    { id: 137, name: 'Chaser For Pods 30ml 65mg — Блакитна малина', price: 330, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20For%20Pods%2030ml', desc: 'Серія: Chaser For Pods 30ml 65mg. В наявності: 1 шт.' },
    { id: 138, name: 'Chaser For Pods 30ml 65mg — Вишня', price: 330, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20For%20Pods%2030ml', desc: 'Серія: Chaser For Pods 30ml 65mg. В наявності: 2 шт.' },
    { id: 139, name: 'Chaser For Pods 30ml 65mg — Диня', price: 330, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20For%20Pods%2030ml', desc: 'Серія: Chaser For Pods 30ml 65mg. В наявності: 4 шт.' },
    { id: 140, name: 'Chaser For Pods 30ml 65mg — Кавун', price: 330, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20For%20Pods%2030ml', desc: 'Серія: Chaser For Pods 30ml 65mg. В наявності: 5 шт.' },
    { id: 141, name: 'Chaser For Pods 30ml 65mg — Ківі', price: 330, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20For%20Pods%2030ml', desc: 'Серія: Chaser For Pods 30ml 65mg. В наявності: 4 шт.' },
    { id: 142, name: 'Chaser For Pods 30ml 65mg — Вишня ментол', price: 330, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20For%20Pods%2030ml', desc: 'Серія: Chaser For Pods 30ml 65mg. В наявності: 2 шт.' },
    { id: 143, name: 'Chaser For Pods 30ml 65mg — Черешня', price: 330, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20For%20Pods%2030ml', desc: 'Серія: Chaser For Pods 30ml 65mg. В наявності: 6 шт.' },
    { id: 144, name: 'Chaser For Pods 30ml 65mg — Ягоди', price: 330, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20For%20Pods%2030ml', desc: 'Серія: Chaser For Pods 30ml 65mg. В наявності: 2 шт.' },
    { id: 145, name: 'Chaser 10ml 50mg — Виноград', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%2010ml%2050mg', desc: 'Серія: Chaser 10ml 50mg. В наявності: 3 шт.' },
    { id: 146, name: 'Chaser 10ml 50mg — Персик', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%2010ml%2050mg', desc: 'Серія: Chaser 10ml 50mg. В наявності: 3 шт.' },
    { id: 147, name: 'Chaser 10ml 50mg — Чорниця Ментол', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%2010ml%2050mg', desc: 'Серія: Chaser 10ml 50mg. В наявності: 4 шт.' },
    { id: 148, name: 'Chaser 10ml 50mg — Мята', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%2010ml%2050mg', desc: 'Серія: Chaser 10ml 50mg. В наявності: 15 шт.' },
    { id: 149, name: 'Chaser 10ml 50mg — Смородина ментол', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%2010ml%2050mg', desc: 'Серія: Chaser 10ml 50mg. В наявності: 4 шт.' },
    { id: 150, name: 'Chaser 10ml 50mg — Вишня ментол', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%2010ml%2050mg', desc: 'Серія: Chaser 10ml 50mg. В наявності: 4 шт.' },
    { id: 151, name: 'Chaser 10ml 50mg — Блакитна Малина', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%2010ml%2050mg', desc: 'Серія: Chaser 10ml 50mg. В наявності: 4 шт.' },
    { id: 152, name: 'Chaser 10ml 50mg — Абрикос', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%2010ml%2050mg', desc: 'Серія: Chaser 10ml 50mg. В наявності: 4 шт.' },
    { id: 153, name: 'Vape Shot 15 ml — Frozen Berries', price: 170, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vape%20Shot%2015%20ml', desc: 'Серія: Vape Shot 15 ml. В наявності: 2 шт.' },
    { id: 154, name: 'Vape Shot 15 ml — CURRANT MINT', price: 170, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vape%20Shot%2015%20ml', desc: 'Серія: Vape Shot 15 ml. В наявності: 4 шт.' },
    { id: 155, name: 'Vape Shot 15 ml — APPLE', price: 170, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vape%20Shot%2015%20ml', desc: 'Серія: Vape Shot 15 ml. В наявності: 2 шт.' },
    { id: 156, name: 'Vape Shot 15 ml — BUBBLE GUM', price: 170, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vape%20Shot%2015%20ml', desc: 'Серія: Vape Shot 15 ml. В наявності: 2 шт.' },
    { id: 157, name: 'Vape Shot 15 ml — CHERRY LEMON', price: 170, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vape%20Shot%2015%20ml', desc: 'Серія: Vape Shot 15 ml. В наявності: 2 шт.' },
    { id: 158, name: 'Vape Shot 15 ml — Almond Latte', price: 170, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vape%20Shot%2015%20ml', desc: 'Серія: Vape Shot 15 ml. В наявності: 2 шт.' },
    { id: 159, name: 'Vape Shot 15 ml — PASSION FRUIT MINT', price: 170, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vape%20Shot%2015%20ml', desc: 'Серія: Vape Shot 15 ml. В наявності: 2 шт.' },
    { id: 160, name: 'Vape Shot 15 ml — TROPIC', price: 170, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vape%20Shot%2015%20ml', desc: 'Серія: Vape Shot 15 ml. В наявності: 2 шт.' },
    { id: 161, name: 'Vape Shot 15 ml — Berries', price: 170, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vape%20Shot%2015%20ml', desc: 'Серія: Vape Shot 15 ml. В наявності: 2 шт.' },
    { id: 162, name: 'Vape Shot 15 ml — Orange', price: 170, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vape%20Shot%2015%20ml', desc: 'Серія: Vape Shot 15 ml. В наявності: 2 шт.' },
    { id: 163, name: 'LiquidLab Flip 30ml 50mg — Apple', price: 250, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Flip%2030ml%20', desc: 'Серія: LiquidLab Flip 30ml 50mg. В наявності: 4 шт.' },
    { id: 164, name: 'LiquidLab Flip 30ml 50mg — Cold Lemon', price: 250, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Flip%2030ml%20', desc: 'Серія: LiquidLab Flip 30ml 50mg. В наявності: 3 шт.' },
    { id: 165, name: 'LiquidLab Flip 30ml 50mg — Cold Kiwi', price: 250, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Flip%2030ml%20', desc: 'Серія: LiquidLab Flip 30ml 50mg. В наявності: 4 шт.' },
    { id: 166, name: 'LiquidLab Flip 30ml 50mg — Double Mint', price: 250, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Flip%2030ml%20', desc: 'Серія: LiquidLab Flip 30ml 50mg. В наявності: 1 шт.' },
    { id: 167, name: 'LiquidLab Flip 30ml 50mg — Grapefruit', price: 250, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Flip%2030ml%20', desc: 'Серія: LiquidLab Flip 30ml 50mg. В наявності: 3 шт.' },
    { id: 168, name: 'LiquidLab Flip 30ml 50mg — Mint', price: 250, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Flip%2030ml%20', desc: 'Серія: LiquidLab Flip 30ml 50mg. В наявності: 3 шт.' },
    { id: 169, name: 'LiquidLab Flip 30ml 50mg — Red Grape', price: 250, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Flip%2030ml%20', desc: 'Серія: LiquidLab Flip 30ml 50mg. В наявності: 3 шт.' },
    { id: 170, name: 'LiquidLab Wick&Wire 30ml 50mg — Arctic Black V2', price: 280, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Wick%26Wire%20', desc: 'Серія: LiquidLab Wick&Wire 30ml 50mg. В наявності: 2 шт.' },
    { id: 171, name: 'LiquidLab Wick&Wire 30ml 50mg — Forbidden Fruit V2', price: 280, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Wick%26Wire%20', desc: 'Серія: LiquidLab Wick&Wire 30ml 50mg. В наявності: 2 шт.' },
    { id: 172, name: 'LiquidLab Wick&Wire 30ml 50mg — Jungle Bird V2', price: 280, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Wick%26Wire%20', desc: 'Серія: LiquidLab Wick&Wire 30ml 50mg. В наявності: 1 шт.' },
    { id: 173, name: 'LiquidLab Wick&Wire 30ml 50mg — Ruby Dreams V2', price: 280, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Wick%26Wire%20', desc: 'Серія: LiquidLab Wick&Wire 30ml 50mg. В наявності: 2 шт.' },
    { id: 174, name: 'LiquidLab Lucky 30ml 50mg — Apple', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 175, name: 'LiquidLab Lucky 30ml 50mg — Blueberry', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 176, name: 'LiquidLab Lucky 30ml 50mg — Grape', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 3 шт.' },
    { id: 177, name: 'LiquidLab Lucky 30ml 50mg — Lavender Lemonade', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 2 шт.' },
    { id: 178, name: 'LiquidLab Lucky 30ml 50mg — Pink Lemonade', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 179, name: 'LiquidLab Lucky 30ml 50mg — Mojito', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 180, name: 'LiquidLab Lucky 30ml 50mg — Spearmint', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 8 шт.' },
    { id: 181, name: 'LiquidLab Lucky 30ml 50mg — Wild Berries', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 182, name: 'LiquidLab Lucky 30ml 50mg — Berry Lemonade', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 183, name: 'LiquidLab Lucky 30ml 50mg — Cherry Lemonade', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 184, name: 'LiquidLab Lucky 30ml 50mg — Cola Lemonade', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 185, name: 'LiquidLab Lucky 30ml 50mg — Passion Fruit Melon Mango.', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 186, name: 'LiquidLab Lucky 30ml 50mg — Lemon Lime Lemonade', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 187, name: 'LiquidLab Lucky 30ml 50mg — Sour Pineapple Menthol.', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 9 шт.' },
    { id: 188, name: 'LiquidLab Lucky 30ml 50mg — Juice Peach', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 189, name: 'LiquidLab Lucky 30ml 50mg — Pear', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 190, name: 'LiquidLab Lucky 30ml 50mg — Rose', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 191, name: 'LiquidLab Lucky 30ml 50mg — Blueberry Lemonade', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 192, name: 'LiquidLab Lucky 30ml 50mg — Cactus Guava Kiwi', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 193, name: 'LiquidLab Lucky 30ml 50mg — Gold Kiwi Strawberry', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 194, name: 'LiquidLab Lucky 30ml 50mg — Coconut Melon', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 195, name: 'LiquidLab Lucky 30ml 50mg — Blue Razz', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 196, name: 'LiquidLab Lucky 30ml 50mg — Banana', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 3 шт.' },
    { id: 197, name: 'LiquidLab Lucky 30ml 50mg — Mango Passion Fruit Lemonade.', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 198, name: 'LiquidLab Lucky 30ml 50mg — Green Tea', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 4 шт.' },
    { id: 199, name: 'LiquidLab Lucky 30ml 50mg — Strawberry', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 3 шт.' },
    { id: 200, name: 'LiquidLab Lucky 30ml 50mg — Grapefruit', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Lucky%2030ml', desc: 'Серія: LiquidLab Lucky 30ml 50mg. В наявності: 9 шт.' },
    { id: 201, name: 'Phantom 30ml — Fruit Fusion', price: 300, cat: 'liquid', image: 'img/Phantom30ml.png', desc: 'Серія: Phantom 30ml. В наявності: 2 шт.' },
    { id: 202, name: 'Phantom 30ml — Pomegranate', price: 300, cat: 'liquid', image: 'img/Phantom30ml.png', desc: 'Серія: Phantom 30ml. В наявності: 2 шт.' },
    { id: 203, name: 'Phantom 30ml — Apple pear', price: 300, cat: 'liquid', image: 'img/Phantom30ml.png', desc: 'Серія: Phantom 30ml. В наявності: 1 шт.' },
    { id: 204, name: 'Phantom 30ml — Berry needles', price: 300, cat: 'liquid', image: 'img/Phantom30ml.png', desc: 'Серія: Phantom 30ml. В наявності: 1 шт.' },
    { id: 205, name: 'Phantom 30ml — Lemon Peach', price: 300, cat: 'liquid', image: 'img/Phantom30ml.png', desc: 'Серія: Phantom 30ml. В наявності: 8 шт.' },
    { id: 206, name: 'Phantom 30ml — Raspberry', price: 300, cat: 'liquid', image: 'img/Phantom30ml.png', desc: 'Серія: Phantom 30ml. В наявності: 2 шт.' },
    { id: 207, name: 'Phantom 30ml — Cherry cola', price: 300, cat: 'liquid', image: 'img/Phantom30ml.png', desc: 'Серія: Phantom 30ml. В наявності: 3 шт.' },
    { id: 208, name: 'Phantom 30ml — Cherry berry', price: 300, cat: 'liquid', image: 'img/Phantom30ml.png', desc: 'Серія: Phantom 30ml. В наявності: 4 шт.' },
    { id: 209, name: 'Phantom 30ml — Raspberry peach', price: 300, cat: 'liquid', image: 'img/Phantom30ml.png', desc: 'Серія: Phantom 30ml. В наявності: 3 шт.' },
    { id: 210, name: 'Phantom 30ml — Kiwi passion fruit guava', price: 300, cat: 'liquid', image: 'img/Phantom30ml.png', desc: 'Серія: Phantom 30ml. В наявності: 1 шт.' },
    { id: 211, name: 'MoodDuck 10ml 50mg — Sour Apple Ice', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2010ml%2050mg', desc: 'Серія: MoodDuck 10ml 50mg. В наявності: 3 шт.' },
    { id: 212, name: 'MoodDuck 10ml 50mg — Blueberry Menthol', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2010ml%2050mg', desc: 'Серія: MoodDuck 10ml 50mg. В наявності: 4 шт.' },
    { id: 213, name: 'MoodDuck 10ml 50mg — Cherry Cola', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2010ml%2050mg', desc: 'Серія: MoodDuck 10ml 50mg. В наявності: 4 шт.' },
    { id: 214, name: 'MoodDuck 10ml 50mg — Cherry Menthol', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2010ml%2050mg', desc: 'Серія: MoodDuck 10ml 50mg. В наявності: 4 шт.' },
    { id: 215, name: 'MoodDuck 10ml 50mg — Chill Peach', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2010ml%2050mg', desc: 'Серія: MoodDuck 10ml 50mg. В наявності: 4 шт.' },
    { id: 216, name: 'MoodDuck 10ml 50mg — Citrus Paradise', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2010ml%2050mg', desc: 'Серія: MoodDuck 10ml 50mg. В наявності: 4 шт.' },
    { id: 217, name: 'MoodDuck 10ml 50mg — Cool Mint', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2010ml%2050mg', desc: 'Серія: MoodDuck 10ml 50mg. В наявності: 19 шт.' },
    { id: 218, name: 'MoodDuck 10ml 50mg — Forest Berries', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2010ml%2050mg', desc: 'Серія: MoodDuck 10ml 50mg. В наявності: 4 шт.' },
    { id: 219, name: 'MoodDuck 10ml 50mg — Granato Rosso', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2010ml%2050mg', desc: 'Серія: MoodDuck 10ml 50mg. В наявності: 4 шт.' },
    { id: 220, name: 'MoodDuck 10ml 50mg — Dragonfruit Ice', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2010ml%2050mg', desc: 'Серія: MoodDuck 10ml 50mg. В наявності: 4 шт.' },
    { id: 221, name: 'MoodDuck 10ml 50mg — Watermelon Ice', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2010ml%2050mg', desc: 'Серія: MoodDuck 10ml 50mg. В наявності: 4 шт.' },
    { id: 222, name: 'MoodDuck 10ml 50mg — Bilberry ice', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2010ml%2050mg', desc: 'Серія: MoodDuck 10ml 50mg. В наявності: 4 шт.' },
    { id: 223, name: 'MoodDuck 10ml 50mg — Curant Menthol', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2010ml%2050mg', desc: 'Серія: MoodDuck 10ml 50mg. В наявності: 4 шт.' },
    { id: 224, name: 'MoodDuck 10ml 50mg — Lemon Mint', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2010ml%2050mg', desc: 'Серія: MoodDuck 10ml 50mg. В наявності: 4 шт.' },
    { id: 225, name: 'MoodDuck 10ml 50mg — Orbit Splash', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2010ml%2050mg', desc: 'Серія: MoodDuck 10ml 50mg. В наявності: 19 шт.' },
    { id: 226, name: 'MoodDuck 10ml 50mg — Pineapple Frost', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2010ml%2050mg', desc: 'Серія: MoodDuck 10ml 50mg. В наявності: 4 шт.' },
    { id: 227, name: 'MoodDuck 10ml 50mg — Raspberry Lemonade', price: 150, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2010ml%2050mg', desc: 'Серія: MoodDuck 10ml 50mg. В наявності: 4 шт.' },
    { id: 228, name: 'MoodDuck 30ml 50mg — Apple Mint', price: 340, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2030ml%2050mg', desc: 'Серія: MoodDuck 30ml 50mg. В наявності: 5 шт.' },
    { id: 229, name: 'MoodDuck 30ml 50mg — Bilberry Ice', price: 340, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2030ml%2050mg', desc: 'Серія: MoodDuck 30ml 50mg. В наявності: 3 шт.' },
    { id: 230, name: 'MoodDuck 30ml 50mg — Currant Menthol', price: 340, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2030ml%2050mg', desc: 'Серія: MoodDuck 30ml 50mg. В наявності: 3 шт.' },
    { id: 231, name: 'MoodDuck 30ml 50mg — Cherry Cola', price: 340, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2030ml%2050mg', desc: 'Серія: MoodDuck 30ml 50mg. В наявності: 2 шт.' },
    { id: 232, name: 'MoodDuck 30ml 50mg — Cherry Menthol', price: 340, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2030ml%2050mg', desc: 'Серія: MoodDuck 30ml 50mg. В наявності: 2 шт.' },
    { id: 233, name: 'MoodDuck 30ml 50mg — Chill Peach', price: 340, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2030ml%2050mg', desc: 'Серія: MoodDuck 30ml 50mg. В наявності: 3 шт.' },
    { id: 234, name: 'MoodDuck 30ml 50mg — Forest Berries', price: 340, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2030ml%2050mg', desc: 'Серія: MoodDuck 30ml 50mg. В наявності: 3 шт.' },
    { id: 235, name: 'MoodDuck 30ml 50mg — Cool Mint', price: 340, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2030ml%2050mg', desc: 'Серія: MoodDuck 30ml 50mg. В наявності: 1 шт.' },
    { id: 236, name: 'MoodDuck 30ml 50mg — Watermelon Ice', price: 340, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2030ml%2050mg', desc: 'Серія: MoodDuck 30ml 50mg. В наявності: 3 шт.' },
    { id: 237, name: 'MoodDuck 30ml 50mg — Grape Mint', price: 340, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2030ml%2050mg', desc: 'Серія: MoodDuck 30ml 50mg. В наявності: 2 шт.' },
    { id: 238, name: 'MoodDuck 30ml 50mg — Lemon Mint', price: 340, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2030ml%2050mg', desc: 'Серія: MoodDuck 30ml 50mg. В наявності: 3 шт.' },
    { id: 239, name: 'MoodDuck 30ml 50mg — Pineapple Frost', price: 340, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2030ml%2050mg', desc: 'Серія: MoodDuck 30ml 50mg. В наявності: 2 шт.' },
    { id: 240, name: 'MoodDuck 30ml 50mg — Raspberry Lemonade', price: 340, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2030ml%2050mg', desc: 'Серія: MoodDuck 30ml 50mg. В наявності: 3 шт.' },
    { id: 241, name: 'MoodDuck 30ml 50mg — Strawberry RedBull', price: 340, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2030ml%2050mg', desc: 'Серія: MoodDuck 30ml 50mg. В наявності: 4 шт.' },
    { id: 242, name: 'Elfliq 30ML — BLACKBERRY LEMON', price: 400, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Elfliq%2030ML', desc: 'Серія: Elfliq 30ML. В наявності: 1 шт.' },
    { id: 243, name: 'Elfliq 30ML — GRAPE', price: 400, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Elfliq%2030ML', desc: 'Серія: Elfliq 30ML. В наявності: 1 шт.' },
    { id: 244, name: 'Elfliq 30ML — PINK GRAPEFRUIT', price: 400, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Elfliq%2030ML', desc: 'Серія: Elfliq 30ML. В наявності: 1 шт.' },
    { id: 245, name: 'Elfliq 30ML — Grape Apple', price: 400, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Elfliq%2030ML', desc: 'Серія: Elfliq 30ML. В наявності: 1 шт.' },
    { id: 246, name: 'Cuba ніндзя 150mg — Blue Ice', price: 300, cat: 'disposable', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Cuba%20%D0%BD%D1%96%D0%BD%D0%B4%D0%B7%D1%8F%20150mg', desc: 'Серія: Cuba ніндзя 150mg. В наявності: 1 шт.' },
    { id: 247, name: 'Cuba 16mg — double fresh', price: 280, cat: 'disposable', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Cuba%2016mg', desc: 'Серія: Cuba 16mg. В наявності: 4 шт.' },
    { id: 248, name: 'Cuba ніндзя 150mg — Just Berries', price: 300, cat: 'disposable', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Cuba%20%D0%BD%D1%96%D0%BD%D0%B4%D0%B7%D1%8F%20150mg', desc: 'Серія: Cuba ніндзя 150mg. В наявності: 4 шт.' },
    { id: 249, name: 'Cuba 16mg — blueberry', price: 280, cat: 'disposable', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Cuba%2016mg', desc: 'Серія: Cuba 16mg. В наявності: 4 шт.' },
    { id: 250, name: 'Cuba 16mg — cherry', price: 280, cat: 'disposable', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Cuba%2016mg', desc: 'Серія: Cuba 16mg. В наявності: 3 шт.' },
    { id: 251, name: 'Cuba 16mg — watermelon', price: 280, cat: 'disposable', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Cuba%2016mg', desc: 'Серія: Cuba 16mg. В наявності: 4 шт.' },
    { id: 252, name: 'Cuba ніндзя 150mg — Grape', price: 300, cat: 'disposable', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Cuba%20%D0%BD%D1%96%D0%BD%D0%B4%D0%B7%D1%8F%20150mg', desc: 'Серія: Cuba ніндзя 150mg. В наявності: 2 шт.' },
    { id: 253, name: 'Cuba ніндзя 150mg — coconut', price: 300, cat: 'disposable', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Cuba%20%D0%BD%D1%96%D0%BD%D0%B4%D0%B7%D1%8F%20150mg', desc: 'Серія: Cuba ніндзя 150mg. В наявності: 2 шт.' },
    { id: 254, name: 'Cuba 43mg — Forest berries', price: 280, cat: 'disposable', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Cuba%2043mg', desc: 'Серія: Cuba 43mg. В наявності: 4 шт.' },
    { id: 255, name: 'Cuba 43mg — Double fresh mint', price: 280, cat: 'disposable', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Cuba%2043mg', desc: 'Серія: Cuba 43mg. В наявності: 4 шт.' },
    { id: 256, name: 'Cuba 43mg — coca', price: 280, cat: 'disposable', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Cuba%2043mg', desc: 'Серія: Cuba 43mg. В наявності: 5 шт.' },
    { id: 257, name: 'Cuba 43mg — ice spearmint', price: 280, cat: 'disposable', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Cuba%2043mg', desc: 'Серія: Cuba 43mg. В наявності: 2 шт.' },
    { id: 258, name: 'Cuba 43mg — Cherry Pomegranate Pineapple', price: 750, cat: 'disposable', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Cuba%2043mg', desc: 'Серія: Cuba 43mg. В наявності: 1 шт.' },
    { id: 259, name: 'Cuba 43mg — Granny Cherry', price: 750, cat: 'disposable', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Cuba%2043mg', desc: 'Серія: Cuba 43mg. В наявності: 1 шт.' },
    { id: 260, name: 'Cuba 43mg — Pomegranate Burst', price: 750, cat: 'disposable', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Cuba%2043mg', desc: 'Серія: Cuba 43mg. В наявності: 1 шт.' },
    { id: 261, name: 'Vaporesso xros 3 mini Aqua green', price: 660, cat: 'pod', image: 'img/VaporessoXROS3.png', desc: 'Модель: Vaporesso xros 3 mini. В наявності: 4 шт.' },
    { id: 262, name: 'Vaporesso xros 3 mini Navy blue', price: 660, cat: 'pod', image: 'img/VaporessoXROS3.png', desc: 'Модель: Vaporesso xros 3 mini. В наявності: 3 шт.' },
    { id: 263, name: 'Vaporesso xros 3 mini Rose pink', price: 660, cat: 'pod', image: 'img/VaporessoXROS3.png', desc: 'Модель: Vaporesso xros 3 mini. В наявності: 1 шт.' },
    { id: 264, name: 'Vaporesso xros 3 mini Lemon yellow', price: 660, cat: 'pod', image: 'img/VaporessoXROS3.png', desc: 'Модель: Vaporesso xros 3 mini. В наявності: 1 шт.' },
    { id: 265, name: 'Vaporesso xros 3 mini Sky blue', price: 660, cat: 'pod', image: 'img/VaporessoXROS3.png', desc: 'Модель: Vaporesso xros 3 mini. В наявності: 4 шт.' },
    { id: 266, name: 'Vaporesso xros 3 mini Space grey', price: 660, cat: 'pod', image: 'img/VaporessoXROS3.png', desc: 'Модель: Vaporesso xros 3 mini. В наявності: 3 шт.' },
    { id: 267, name: 'Vaporesso xros 3 mini Black', price: 660, cat: 'pod', image: 'img/VaporessoXROS3.png', desc: 'Модель: Vaporesso xros 3 mini. В наявності: 5 шт.' },
    { id: 268, name: 'Vaporesso xros 3 mini Liliac purple', price: 660, cat: 'pod', image: 'img/VaporessoXROS3.png', desc: 'Модель: Vaporesso xros 3 mini. В наявності: 3 шт.' },
    { id: 269, name: 'Vaporesso xros 3 mini Icy silver', price: 660, cat: 'pod', image: 'img/VaporessoXROS3.png', desc: 'Модель: Vaporesso xros 3 mini. В наявності: 3 шт.' },
    { id: 270, name: 'Black', price: 800, cat: 'pod', image: 'img/VAPORESSOXROS4Mini.png', desc: 'Модель: Vaporesso xros 4 mini. В наявності: 3 шт.' },
    { id: 271, name: 'Ice blue', price: 800, cat: 'pod', image: 'img/VAPORESSOXROS4Mini.png', desc: 'Модель: Vaporesso xros 4 mini. В наявності: 3 шт.' },
    { id: 272, name: 'Ice green', price: 800, cat: 'pod', image: 'img/VAPORESSOXROS4Mini.png', desc: 'Модель: Vaporesso xros 4 mini. В наявності: 4 шт.' },
    { id: 273, name: 'Ice purple', price: 800, cat: 'pod', image: 'img/VAPORESSOXROS4Mini.png', desc: 'Модель: Vaporesso xros 4 mini. В наявності: 3 шт.' },
    { id: 274, name: 'champagne gold', price: 800, cat: 'pod', image: 'img/VAPORESSOXROS4Mini.png', desc: 'Модель: Vaporesso xros 4 mini. В наявності: 2 шт.' },
    { id: 275, name: 'Camo red', price: 800, cat: 'pod', image: 'img/VAPORESSOXROS4Mini.png', desc: 'Модель: Vaporesso xros 4 mini. В наявності: 1 шт.' },
    { id: 276, name: 'Camo yellow', price: 800, cat: 'pod', image: 'img/VAPORESSOXROS4Mini.png', desc: 'Модель: Vaporesso xros 4 mini. В наявності: 2 шт.' },
    { id: 277, name: 'Black', price: 900, cat: 'pod', image: 'img/VAPORESSOXROS5Mini.png', desc: 'Модель: Vaporesso xros 5 mini. В наявності: 2 шт.' },
    { id: 278, name: 'Flowing Blue', price: 900, cat: 'pod', image: 'img/VAPORESSOXROS5Mini.png', desc: 'Модель: Vaporesso xros 5 mini. В наявності: 2 шт.' },
    { id: 279, name: 'Flowing Green', price: 900, cat: 'pod', image: 'img/VAPORESSOXROS5Mini.png', desc: 'Модель: Vaporesso xros 5 mini. В наявності: 2 шт.' },
    { id: 280, name: 'Purple', price: 900, cat: 'pod', image: 'img/VAPORESSOXROS5Mini.png', desc: 'Модель: Vaporesso xros 5 mini. В наявності: 2 шт.' },
    { id: 281, name: 'Rose Red', price: 900, cat: 'pod', image: 'img/VAPORESSOXROS5Mini.png', desc: 'Модель: Vaporesso xros 5 mini. В наявності: 3 шт.' },
    { id: 282, name: 'Cool Black', price: 900, cat: 'pod', image: 'img/VAPORESSOXROS5Mini.png', desc: 'Модель: Vaporesso xros 5 mini. В наявності: 1 шт.' },
    { id: 283, name: 'Mist White', price: 900, cat: 'pod', image: 'img/VAPORESSOXROS5Mini.png', desc: 'Модель: Vaporesso xros 5 mini. В наявності: 3 шт.' },
    { id: 284, name: 'Retro Pink', price: 900, cat: 'pod', image: 'img/VAPORESSOXROS5Mini.png', desc: 'Модель: Vaporesso xros 5 mini. В наявності: 3 шт.' },
    { id: 285, name: 'Retro Orang', price: 900, cat: 'pod', image: 'img/VAPORESSOXROS5Mini.png', desc: 'Модель: Vaporesso xros 5 mini. В наявності: 3 шт.' },
    { id: 286, name: 'Abyssal Blue', price: 1170, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vaporesso%20xros%206', desc: 'Модель: Vaporesso xros 6. В наявності: 1 шт.' },
    { id: 287, name: 'Cosmic Black', price: 1170, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vaporesso%20xros%206', desc: 'Модель: Vaporesso xros 6. В наявності: 2 шт.' },
    { id: 288, name: 'Dreamy Pink', price: 1170, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vaporesso%20xros%206', desc: 'Модель: Vaporesso xros 6. В наявності: 1 шт.' },
    { id: 289, name: 'Silk Brown', price: 1170, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vaporesso%20xros%206', desc: 'Модель: Vaporesso xros 6. В наявності: 1 шт.' },
    { id: 290, name: 'Silk Gray', price: 1170, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vaporesso%20xros%206', desc: 'Модель: Vaporesso xros 6. В наявності: 1 шт.' },
    { id: 291, name: 'Silk Green', price: 1170, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vaporesso%20xros%206', desc: 'Модель: Vaporesso xros 6. В наявності: 1 шт.' },
    { id: 292, name: 'Slate Black', price: 1170, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vaporesso%20xros%206', desc: 'Модель: Vaporesso xros 6. В наявності: 1 шт.' },
    { id: 293, name: 'Voopoo vmate', price: 120, cat: 'pod', image: 'img/VaporessoXROS5PodKit.png', desc: 'Модель: Vaporesso xros 5 nano. В наявності: 12 шт.' },
    { id: 294, name: 'Voopoo vinci q', price: 120, cat: 'pod', image: 'img/VaporessoXROS5PodKit.png', desc: 'Модель: Vaporesso xros 5 nano. В наявності: 3 шт.' },
    { id: 295, name: 'Voopoo Argus 0.7Om', price: 130, cat: 'pod', image: 'img/VaporessoXROS5PodKit.png', desc: 'Модель: Vaporesso xros 5 nano. В наявності: 2 шт.' },
    { id: 296, name: 'OXVA NeXLIM Cartridge 2ml 0.8om', price: 130, cat: 'pod', image: 'img/VaporessoXROS5PodKit.png', desc: 'Модель: Vaporesso xros 5 nano. В наявності: 2 шт.' },
    { id: 297, name: 'Oxva 0.6', price: 100, cat: 'pod', image: 'img/VaporessoXROS5PodKit.png', desc: 'Модель: Vaporesso xros 5 nano. В наявності: 37 шт.' },
    { id: 298, name: 'Vaporesso xros 0.6Om', price: 140, cat: 'pod', image: 'img/VaporessoXROS5PodKit.png', desc: 'Модель: Vaporesso xros 5 nano. В наявності: 13 шт.' },
    { id: 299, name: 'Vaporesso xros 0.8Om', price: 140, cat: 'pod', image: 'img/VaporessoXROS5PodKit.png', desc: 'Модель: Vaporesso xros 5 nano. В наявності: 2 шт.' },
    { id: 300, name: '3мл 0.6', price: 140, cat: 'pod', image: 'img/VaporessoXROS3.png', desc: 'Модель: Vaporesso xros 5 nano. В наявності: 26 шт.' },
    { id: 301, name: '3 мл 0.8', price: 140, cat: 'pod', image: 'img/VaporessoXROS3.png', desc: 'Модель: Vaporesso xros 5 nano. В наявності: 27 шт.' },
    { id: 302, name: 'Vaporesso хros 1.0 / 1.2', price: 140, cat: 'pod', image: 'img/VaporessoXROS5PodKit.png', desc: 'Модель: Vaporesso xros 5 nano. В наявності: 7 шт.' },
    { id: 303, name: 'Smok novo 2', price: 120, cat: 'pod', image: 'img/VaporessoXROS5PodKit.png', desc: 'Модель: Vaporesso xros 5 nano. В наявності: 9 шт.' },
    { id: 304, name: 'Otobar X 15ml — Cactus', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Otobar%20X%2015ml', desc: 'Серія: Otobar X 15ml. В наявності: 1 шт.' },
    { id: 305, name: 'Otobar X 30ml — Cherry Juice', price: 320, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Otobar%20X%2030ml', desc: 'Серія: Otobar X 30ml. В наявності: 1 шт.' },
    { id: 306, name: 'Otobar X 30ml — Blueberry Menthol', price: 320, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Otobar%20X%2030ml', desc: 'Серія: Otobar X 30ml. В наявності: 1 шт.' },
    { id: 307, name: 'InBottle 30ml — Cactus', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=InBottle%2030ml', desc: 'Серія: InBottle 30ml. В наявності: 1 шт.' },
    { id: 308, name: 'Space grey', price: 900, cat: 'pod', image: 'img/VAPORESSOXROS4Mini.png', desc: 'Модель: Vaporesso xros 4 mini. В наявності: 1 шт.' },
    { id: 309, name: 'Octobar Classic 30ml — Raspberry Frost', price: 340, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20Classic%2030ml', desc: 'Серія: Octobar Classic 30ml. В наявності: 1 шт.' },
    { id: 310, name: 'Moonlit Pink', price: 1350, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vaporesso%20xros%20pro%202', desc: 'Модель: Vaporesso xros pro 2. В наявності: 1 шт.' },
    { id: 311, name: 'Carbon Black', price: 950, cat: 'pod', image: 'img/VAPORESSOXROS5Mini.png', desc: 'Модель: Vaporesso xros 5 mini. В наявності: 1 шт.' },
    { id: 312, name: 'Flowing Pink', price: 950, cat: 'pod', image: 'img/VAPORESSOXROS5Mini.png', desc: 'Модель: Vaporesso xros 5 mini. В наявності: 1 шт.' },
    { id: 313, name: 'Octobar Fresh Sour 30 ml — Pineapple', price: 320, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20Fresh%20Sour%203', desc: 'Серія: Octobar Fresh Sour 30 ml. В наявності: 1 шт.' },
    { id: 314, name: 'Octobar Fresh Sour 30 ml — Cranberry Cherry Soda', price: 320, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20Fresh%20Sour%203', desc: 'Серія: Octobar Fresh Sour 30 ml. В наявності: 1 шт.' },
    { id: 315, name: 'Sky Blue', price: 950, cat: 'pod', image: 'img/VAPORESSOXROS5Mini.png', desc: 'Модель: Vaporesso xros 5 mini. В наявності: 1 шт.' },
    { id: 316, name: 'Octobar Fresh Sour 30 ml — Lime', price: 320, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20Fresh%20Sour%203', desc: 'Серія: Octobar Fresh Sour 30 ml. В наявності: 1 шт.' },
    { id: 317, name: 'Titanium Silver', price: 950, cat: 'pod', image: 'img/VAPORESSOXROS5Mini.png', desc: 'Модель: Vaporesso xros 5 mini. В наявності: 1 шт.' },
    { id: 318, name: 'Octobar Fresh Sour 30 ml — Black Currant', price: 320, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20Fresh%20Sour%203', desc: 'Серія: Octobar Fresh Sour 30 ml. В наявності: 1 шт.' },
    { id: 319, name: 'Cool Pink', price: 950, cat: 'pod', image: 'img/VAPORESSOXROS5Mini.png', desc: 'Модель: Vaporesso xros 5 mini. В наявності: 1 шт.' },
    { id: 320, name: 'Octobar Black Limit 30 ml — Cola Citrus', price: 270, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20Black%20Limit%20', desc: 'Серія: Octobar Black Limit 30 ml. В наявності: 1 шт.' },
    { id: 321, name: 'Octobar Black Limit 30 ml — Raspberry Lemon Ice', price: 270, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20Black%20Limit%20', desc: 'Серія: Octobar Black Limit 30 ml. В наявності: 1 шт.' },
    { id: 322, name: 'Octobar Black Limit 30 ml — Spearmint', price: 270, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20Black%20Limit%20', desc: 'Серія: Octobar Black Limit 30 ml. В наявності: 1 шт.' },
    { id: 323, name: 'Octobar Black Limit 30 ml — Melon Coconut', price: 270, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20Black%20Limit%20', desc: 'Серія: Octobar Black Limit 30 ml. В наявності: 1 шт.' },
    { id: 324, name: 'Jade Green', price: 1250, cat: 'pod', image: 'img/VaporessoXROS5PodKit.png', desc: 'Модель: Vaporesso xros 5. В наявності: 1 шт.' },
    { id: 325, name: 'Aurora Blue', price: 600, cat: 'pod', image: 'img/VoopooV.png', desc: 'Модель: Voopoo Argus G2 mini. В наявності: 1 шт.' },
    { id: 326, name: 'Black', price: 500, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=OXVA%20XLIM%20GO%20Lite', desc: 'Модель: OXVA XLIM GO Lite. В наявності: 1 шт.' },
    { id: 327, name: 'Light Blue', price: 500, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=OXVA%20XLIM%20GO%20Lite', desc: 'Модель: OXVA XLIM GO Lite. В наявності: 1 шт.' },
    { id: 328, name: 'Black Carbon', price: 500, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=OXVA%20XLIM%20GO%20Lite', desc: 'Модель: OXVA XLIM GO Lite. В наявності: 1 шт.' },
    { id: 329, name: 'Light Purple', price: 500, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=OXVA%20XLIM%20GO%20Lite', desc: 'Модель: OXVA XLIM GO Lite. В наявності: 1 шт.' },
    { id: 330, name: 'Mist Blue', price: 500, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=OXVA%20XLIM%20GO%20Lite', desc: 'Модель: OXVA XLIM GO Lite. В наявності: 1 шт.' },
    { id: 331, name: 'Mist White', price: 500, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=OXVA%20XLIM%20GO%20Lite', desc: 'Модель: OXVA XLIM GO Lite. В наявності: 1 шт.' },
    { id: 332, name: 'Amber Orange', price: 1170, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=OXVA%20XLIM%20PRO%202', desc: 'Модель: OXVA XLIM PRO 2. В наявності: 1 шт.' },
    { id: 333, name: 'Octobar NFT 30 ml — Polar Mint Ice', price: 300, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20NFT%2030%20ml', desc: 'Серія: Octobar NFT 30 ml. В наявності: 2 шт.' },
    { id: 334, name: 'Red', price: 760, cat: 'pod', image: 'img/VoopooV.png', desc: 'Модель: VOOPOO V-mate I3. В наявності: 1 шт.' },
    { id: 335, name: 'Purple', price: 1320, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=OXVA%20XLIM%20PRO%203', desc: 'Модель: OXVA XLIM PRO 3. В наявності: 1 шт.' },
    { id: 336, name: 'Race Red/ black carbon', price: 1320, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=OXVA%20XLIM%20PRO%203', desc: 'Модель: OXVA XLIM PRO 3. В наявності: 2 шт.' },
    { id: 337, name: 'Octobar NFT 30 ml — Strawberry Ice', price: 300, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20NFT%2030%20ml', desc: 'Серія: Octobar NFT 30 ml. В наявності: 1 шт.' },
    { id: 338, name: 'Octobar NFT 30 ml — Lush Ice', price: 300, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20NFT%2030%20ml', desc: 'Серія: Octobar NFT 30 ml. В наявності: 1 шт.' },
    { id: 339, name: 'Yellow Satin', price: 1380, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Xros%205%20NANO', desc: 'Модель: Xros 5 NANO. В наявності: 1 шт.' },
    { id: 340, name: 'Octobar NFT 30 ml — Banana Aloe', price: 300, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20NFT%2030%20ml', desc: 'Серія: Octobar NFT 30 ml. В наявності: 1 шт.' },
    { id: 341, name: 'Blue/Orange Leatherette', price: 1380, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Xros%205%20NANO', desc: 'Модель: Xros 5 NANO. В наявності: 2 шт.' },
    { id: 342, name: 'Octobar NFT 30 ml — Coffee Cookies', price: 300, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20NFT%2030%20ml', desc: 'Серія: Octobar NFT 30 ml. В наявності: 1 шт.' },
    { id: 343, name: 'Blue Shadow', price: 1250, cat: 'pod', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=OXVA%20XLIM%20SQ%20PRO%202', desc: 'Модель: OXVA XLIM SQ PRO 2. В наявності: 1 шт.' },
    { id: 344, name: 'Octobar NFT 30 ml — Tropic Q', price: 300, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20NFT%2030%20ml', desc: 'Серія: Octobar NFT 30 ml. В наявності: 1 шт.' },
    { id: 345, name: 'Octobar NFT 30 ml — Pear Apple', price: 300, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20NFT%2030%20ml', desc: 'Серія: Octobar NFT 30 ml. В наявності: 1 шт.' },
    { id: 346, name: 'Octobar NFT 30 ml — Mood Berries', price: 300, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20NFT%2030%20ml', desc: 'Серія: Octobar NFT 30 ml. В наявності: 1 шт.' },
    { id: 347, name: 'Moss Green', price: 1150, cat: 'pod', image: 'img/VoopooV.png', desc: 'Модель: VOOPOO Argus G3. В наявності: 1 шт.' },
    { id: 348, name: 'Armor green', price: 950, cat: 'pod', image: 'img/VoopooV.png', desc: 'Модель: VOOPOO VMATE PRO Power 30W. В наявності: 1 шт.' },
    { id: 349, name: 'Octobar NFT 30 ml — Blue Razz Ice', price: 300, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20NFT%2030%20ml', desc: 'Серія: Octobar NFT 30 ml. В наявності: 1 шт.' },
    { id: 350, name: 'урса 0.8', price: 150, cat: 'pod', image: 'img/VoopooV.png', desc: 'Модель: VOOPOO VINCI SE 2. В наявності: 3 шт.' },
    { id: 351, name: 'Octobar NFT 30 ml — Citrus Combo', price: 300, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20NFT%2030%20ml', desc: 'Серія: Octobar NFT 30 ml. В наявності: 1 шт.' },
    { id: 352, name: 'Octobar NFT 30 ml — Cherry Fanta', price: 300, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20NFT%2030%20ml', desc: 'Серія: Octobar NFT 30 ml. В наявності: 1 шт.' },
    { id: 353, name: 'Octobar Prime 30 ml — Blueberry Soda', price: 400, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20Prime%2030%20ml', desc: 'Серія: Octobar Prime 30 ml. В наявності: 1 шт.' },
    { id: 354, name: 'Voopoo vmate', price: 140, cat: 'pod', image: 'img/VoopooV.png', desc: 'Модель: VOOPOO VINCI SE 2. В наявності: 10 шт.' },
    { id: 355, name: 'Octobar Prime 30 ml — Pineapple Mojito', price: 400, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20Prime%2030%20ml', desc: 'Серія: Octobar Prime 30 ml. В наявності: 1 шт.' },
    { id: 356, name: 'Voopoo vinci q', price: 140, cat: 'pod', image: 'img/VoopooV.png', desc: 'Модель: VOOPOO VINCI SE 2. В наявності: 1 шт.' },
    { id: 357, name: 'Octobar Prime 30 ml — Citrus Candy', price: 400, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20Prime%2030%20ml', desc: 'Серія: Octobar Prime 30 ml. В наявності: 1 шт.' },
    { id: 358, name: 'Voopoo Argus 3ml 1.0', price: 150, cat: 'pod', image: 'img/VoopooV.png', desc: 'Модель: VOOPOO VINCI SE 2. В наявності: 7 шт.' },
    { id: 359, name: 'OXVA NeXLIM Cartridge 2ml 0.8om', price: 150, cat: 'pod', image: 'img/VoopooV.png', desc: 'Модель: VOOPOO VINCI SE 2. В наявності: 2 шт.' },
    { id: 360, name: 'Oxva 0.6', price: 140, cat: 'pod', image: 'img/VoopooV.png', desc: 'Модель: VOOPOO VINCI SE 2. В наявності: 7 шт.' },
    { id: 361, name: 'Vaporesso xros 0.6Om', price: 140, cat: 'pod', image: 'img/VoopooV.png', desc: 'Модель: VOOPOO VINCI SE 2. В наявності: 12 шт.' },
    { id: 362, name: 'Vaporesso xros 0.8Om', price: 140, cat: 'pod', image: 'img/VoopooV.png', desc: 'Модель: VOOPOO VINCI SE 2. В наявності: 12 шт.' },
    { id: 363, name: 'Vaporesso xros 0.7om', price: 140, cat: 'pod', image: 'img/VoopooV.png', desc: 'Модель: VOOPOO VINCI SE 2. В наявності: 12 шт.' },
    { id: 364, name: 'Vaporesso 3мл 0.4', price: 140, cat: 'pod', image: 'img/VoopooV.png', desc: 'Модель: VOOPOO VINCI SE 2. В наявності: 12 шт.' },
    { id: 365, name: '3мл 0.6', price: 140, cat: 'pod', image: 'img/VoopooV.png', desc: 'Модель: VOOPOO VINCI SE 2. В наявності: 12 шт.' },
    { id: 366, name: '3 мл 0.8', price: 140, cat: 'pod', image: 'img/VoopooV.png', desc: 'Модель: VOOPOO VINCI SE 2. В наявності: 12 шт.' },
    { id: 367, name: 'Vaporesso хros 1.0 / 1.2', price: 140, cat: 'pod', image: 'img/VoopooV.png', desc: 'Модель: VOOPOO VINCI SE 2. В наявності: 24 шт.' },
    { id: 368, name: 'Vaporesso zero cartridge', price: 150, cat: 'pod', image: 'img/VoopooV.png', desc: 'Модель: VOOPOO VINCI SE 2. В наявності: 2 шт.' },
    { id: 369, name: 'Alchemist 30 ml — Frappuccino', price: 350, cat: 'liquid', image: 'img/AlchemistFrappuccino.png', desc: 'Серія: Alchemist 30 ml. В наявності: 1 шт.' },
    { id: 370, name: 'Alchemist 30 ml — Vero Tobacco', price: 350, cat: 'liquid', image: 'img/AlchemistFrappuccino.png', desc: 'Серія: Alchemist 30 ml. В наявності: 1 шт.' },
    { id: 371, name: 'Alchemist 30 ml — Cubanana', price: 350, cat: 'liquid', image: 'img/AlchemistFrappuccino.png', desc: 'Серія: Alchemist 30 ml. В наявності: 1 шт.' },
    { id: 372, name: 'Alchemist 30 ml — Pitaya Peach', price: 350, cat: 'liquid', image: 'img/AlchemistFrappuccino.png', desc: 'Серія: Alchemist 30 ml. В наявності: 1 шт.' },
    { id: 373, name: 'Alchemist 30 ml — Grapefruit', price: 350, cat: 'liquid', image: 'img/AlchemistFrappuccino.png', desc: 'Серія: Alchemist 30 ml. В наявності: 1 шт.' },
    { id: 374, name: 'Alchemist 30 ml — Daiquiri', price: 350, cat: 'liquid', image: 'img/AlchemistFrappuccino.png', desc: 'Серія: Alchemist 30 ml. В наявності: 1 шт.' },
    { id: 375, name: 'Alchemist 30 ml — Iceberg Mango', price: 350, cat: 'liquid', image: 'img/AlchemistFrappuccino.png', desc: 'Серія: Alchemist 30 ml. В наявності: 1 шт.' },
    { id: 376, name: 'Alchemist 30 ml — Easy Peasy', price: 350, cat: 'liquid', image: 'img/AlchemistFrappuccino.png', desc: 'Серія: Alchemist 30 ml. В наявності: 1 шт.' },
    { id: 377, name: 'Alchemist 30 ml — Mojo', price: 350, cat: 'liquid', image: 'img/AlchemistFrappuccino.png', desc: 'Серія: Alchemist 30 ml. В наявності: 1 шт.' },
    { id: 378, name: 'Octobar Twins 30ml — Cola Dew', price: 270, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20Twins%2030ml', desc: 'Серія: Octobar Twins 30ml. В наявності: 1 шт.' },
    { id: 379, name: 'Octobar Twins 30ml — Melon Cherry', price: 270, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20Twins%2030ml', desc: 'Серія: Octobar Twins 30ml. В наявності: 1 шт.' },
    { id: 380, name: 'MoodDuck 30ml — Cherry Cola', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=MoodDuck%2030ml', desc: 'Серія: MoodDuck 30ml. В наявності: 1 шт.' },
    { id: 381, name: 'Chaser Lux 30ml 65mg — ENERGETIK', price: 150, cat: 'liquid', image: 'img/ChaserLux30ml.png', desc: 'Серія: Chaser Lux 30ml 65mg. В наявності: 1 шт.' },
    { id: 382, name: 'Chaser Lux 30ml 65mg — SANGRIA', price: 150, cat: 'liquid', image: 'img/ChaserLux30ml.png', desc: 'Серія: Chaser Lux 30ml 65mg. В наявності: 1 шт.' },
    { id: 383, name: 'Chaser Lux 30ml 65mg — Coconut Melon', price: 150, cat: 'liquid', image: 'img/ChaserLux30ml.png', desc: 'Серія: Chaser Lux 30ml 65mg. В наявності: 1 шт.' },
    { id: 384, name: 'Chaser Lux 30ml 65mg — Cherry Lemon', price: 150, cat: 'liquid', image: 'img/ChaserLux30ml.png', desc: 'Серія: Chaser Lux 30ml 65mg. В наявності: 2 шт.' },
    { id: 385, name: 'LiquidLab Flip 30ml 50mg — Cotton Candy', price: 250, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Flip%2030ml%20', desc: 'Серія: LiquidLab Flip 30ml 50mg. В наявності: 1 шт.' },
    { id: 386, name: 'LiquidLab Flip 30ml 50mg — Cereals', price: 250, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Flip%2030ml%20', desc: 'Серія: LiquidLab Flip 30ml 50mg. В наявності: 1 шт.' },
    { id: 387, name: 'LiquidLab Flip 30ml 50mg — Tobacco', price: 250, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Flip%2030ml%20', desc: 'Серія: LiquidLab Flip 30ml 50mg. В наявності: 1 шт.' },
    { id: 388, name: 'LiquidLab Flip 30ml 50mg — Peach', price: 250, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Flip%2030ml%20', desc: 'Серія: LiquidLab Flip 30ml 50mg. В наявності: 1 шт.' },
    { id: 389, name: 'LiquidLab Flip 30ml 50mg — Strawberry Mango', price: 250, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=LiquidLab%20Flip%2030ml%20', desc: 'Серія: LiquidLab Flip 30ml 50mg. В наявності: 1 шт.' },
    { id: 390, name: '3GER 30ml 50mg — Peach bescuit', price: 300, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=3GER%2030ml%2050mg', desc: 'Серія: 3GER 30ml 50mg. В наявності: 1 шт.' },
    { id: 391, name: 'Chaser For Pods 30ml 65mg — Обліпиха', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20For%20Pods%2030ml', desc: 'Серія: Chaser For Pods 30ml 65mg. В наявності: 1 шт.' },
    { id: 392, name: 'Chaser Mix Ultra 30ml 65mg — Гуава Персик.', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Mix%20Ultra%2030m', desc: 'Серія: Chaser Mix Ultra 30ml 65mg. В наявності: 1 шт.' },
    { id: 393, name: 'Chaser Mix Ultra 30ml 65mg — Груша Жасмін', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Mix%20Ultra%2030m', desc: 'Серія: Chaser Mix Ultra 30ml 65mg. В наявності: 1 шт.' },
    { id: 394, name: 'Chaser Mix Ultra 30ml 65mg — Малина Ревінь', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Mix%20Ultra%2030m', desc: 'Серія: Chaser Mix Ultra 30ml 65mg. В наявності: 1 шт.' },
    { id: 395, name: 'Chaser Black 30ml 65mg — Lemon Basil', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Black%2030ml%2065', desc: 'Серія: Chaser Black 30ml 65mg. В наявності: 1 шт.' },
    { id: 396, name: 'Chaser Black 30ml 65mg — Sherbet', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Black%2030ml%2065', desc: 'Серія: Chaser Black 30ml 65mg. В наявності: 1 шт.' },
    { id: 397, name: 'Lucky 30ml — Ароматизатор Lucky Watermelon Lemonade 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 398, name: 'Lucky 30ml — Ароматизатор Lucky Rose Lemonade 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 399, name: 'Lucky 30ml — Ароматизатор Lucky Pineapple Menthol 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 400, name: 'Lucky 30ml — Ароматизатор Lucky Orange Lemonade 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 401, name: 'Lucky 30ml — Ароматизатор Lucky Passion Fruit Melon Mango 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 402, name: 'Lucky 30ml — Ароматизатор Lucky Mango Passion Fruit Lemonade 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 2 шт.' },
    { id: 403, name: 'Lucky 30ml — Ароматизатор Lucky Cola Lemonade 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 404, name: 'Lucky 30ml — Ароматизатор Lucky Grape 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 405, name: 'Lucky 30ml — Ароматизатор Lucky Wild Berries 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 406, name: 'Lucky 30ml — Ароматизатор Lucky Mojito Aloe Cucumber Lemonade 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 407, name: 'Lucky 30ml — Ароматизатор Lucky Mokko 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 408, name: 'Lucky 30ml — Ароматизатор Lucky Cold Mango 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 409, name: 'Lucky 30ml — Ароматизатор Lucky Banana 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 410, name: 'Lucky 30ml — Ароматизатор Lucky Green Tea Lemonade 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 411, name: 'Lucky 30ml — Ароматизатор Lucky Berry Lemonade 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 412, name: 'Lucky 30ml — Ароматизатор Lucky Strawberry 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 413, name: 'Lucky 30ml — Ароматизатор Lucky Cream Soda Lemonade 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 414, name: 'Lucky 30ml — Ароматизатор Lucky Elderflowers Lemonade 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 415, name: 'Lucky 30ml — Ароматизатор Lucky Blueberry Lemonade 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 416, name: 'Lucky 30ml — Ароматизатор Lucky Lavender Lemonade 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 417, name: 'Lucky 30ml — Ароматизатор Lucky Apple 11,25мл', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%2030ml', desc: 'Серія: Lucky 30ml. В наявності: 1 шт.' },
    { id: 418, name: 'Lucky Chrome 30ml — Ароматизатор Lucky Chrome - Peach Gooseberry 11,25мл', price: 380, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%20Chrome%2030ml', desc: 'Серія: Lucky Chrome 30ml. В наявності: 1 шт.' },
    { id: 419, name: 'Lucky Chrome 30ml — Ароматизатор Lucky Chrome - Summer Tea 11,25мл', price: 380, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%20Chrome%2030ml', desc: 'Серія: Lucky Chrome 30ml. В наявності: 1 шт.' },
    { id: 420, name: 'Lucky Chrome 30ml — Ароматизатор Lucky Chrome - Tropical 11,25мл', price: 380, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%20Chrome%2030ml', desc: 'Серія: Lucky Chrome 30ml. В наявності: 1 шт.' },
    { id: 421, name: 'Lucky Chrome 30ml — Ароматизатор Lucky Chrome - Gummy Bears 11,25мл', price: 380, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Lucky%20Chrome%2030ml', desc: 'Серія: Lucky Chrome 30ml. В наявності: 1 шт.' },
    { id: 422, name: 'Chaser Beat 30ML — Виноградний Енергетик', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Beat%2030ML', desc: 'Серія: Chaser Beat 30ML. В наявності: 1 шт.' },
    { id: 423, name: 'Chaser Beat 30ML — Вишнева Кола', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Beat%2030ML', desc: 'Серія: Chaser Beat 30ML. В наявності: 1 шт.' },
    { id: 424, name: 'Chaser Beat 30ML — Ананас', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Chaser%20Beat%2030ML', desc: 'Серія: Chaser Beat 30ML. В наявності: 1 шт.' },
    { id: 425, name: 'Octobar Go 30ML — Лимон', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20Go%2030ML', desc: 'Серія: Octobar Go 30ML. В наявності: 1 шт.' },
    { id: 426, name: 'Octobar Go 30ML — Лохина', price: 350, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Octobar%20Go%2030ML', desc: 'Серія: Octobar Go 30ML. В наявності: 1 шт.' },
    { id: 427, name: 'Platinum 30ML 50MG — Watermelon Lemon', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Platinum%2030ML%2050MG', desc: 'Серія: Platinum 30ML 50MG. В наявності: 5 шт.' },
    { id: 428, name: 'Platinum 30ML 50MG — Guava Lychee', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Platinum%2030ML%2050MG', desc: 'Серія: Platinum 30ML 50MG. В наявності: 5 шт.' },
    { id: 429, name: 'Platinum 30ML 50MG — Apple Peach', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Platinum%2030ML%2050MG', desc: 'Серія: Platinum 30ML 50MG. В наявності: 4 шт.' },
    { id: 430, name: 'Platinum 30ML 50MG — Raspberry Banana Lemon', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Platinum%2030ML%2050MG', desc: 'Серія: Platinum 30ML 50MG. В наявності: 4 шт.' },
    { id: 431, name: 'Platinum 30ML 50MG — Melon Strawberry Banana', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Platinum%2030ML%2050MG', desc: 'Серія: Platinum 30ML 50MG. В наявності: 3 шт.' },
    { id: 432, name: 'Platinum 30ML 50MG — Sour Berries', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Platinum%2030ML%2050MG', desc: 'Серія: Platinum 30ML 50MG. В наявності: 3 шт.' },
    { id: 433, name: 'Platinum 30ML 50MG — Pineapple Coconut', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Platinum%2030ML%2050MG', desc: 'Серія: Platinum 30ML 50MG. В наявності: 3 шт.' },
    { id: 434, name: 'Punch X 30ML 50MG — Space Flavour', price: 210, cat: 'liquid', image: 'img/Punch15ML.png', desc: 'Серія: Punch X 30ML 50MG. В наявності: 4 шт.' },
    { id: 435, name: 'Punch X 30ML 50MG — Capri Son', price: 210, cat: 'liquid', image: 'img/Punch15ML.png', desc: 'Серія: Punch X 30ML 50MG. В наявності: 4 шт.' },
    { id: 436, name: 'Punch X 30ML 50MG — Cosmopolitan', price: 210, cat: 'liquid', image: 'img/Punch15ML.png', desc: 'Серія: Punch X 30ML 50MG. В наявності: 3 шт.' },
    { id: 437, name: 'Punch X 30ML 50MG — Cactus Margarita', price: 210, cat: 'liquid', image: 'img/Punch15ML.png', desc: 'Серія: Punch X 30ML 50MG. В наявності: 3 шт.' },
    { id: 438, name: 'Punch X 30ML 50MG — Bellini', price: 210, cat: 'liquid', image: 'img/Punch15ML.png', desc: 'Серія: Punch X 30ML 50MG. В наявності: 1 шт.' },
    { id: 439, name: 'Elfliq 30ML 50MG — Grape', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Elfliq%2030ML%2050MG', desc: 'Серія: Elfliq 30ML 50MG. В наявності: 1 шт.' },
    { id: 440, name: 'Elfliq 30ML 50MG — Grape Apple', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Elfliq%2030ML%2050MG', desc: 'Серія: Elfliq 30ML 50MG. В наявності: 1 шт.' },
    { id: 441, name: 'Elfliq 30ML 50MG — Pink Grapefruit', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Elfliq%2030ML%2050MG', desc: 'Серія: Elfliq 30ML 50MG. В наявності: 1 шт.' },
    { id: 442, name: 'Elfliq 30ML 50MG — Pear Cranberry Lemon', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Elfliq%2030ML%2050MG', desc: 'Серія: Elfliq 30ML 50MG. В наявності: 1 шт.' },
    { id: 443, name: 'Elfliq 30ML 50MG — Blackberry Lemon', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Elfliq%2030ML%2050MG', desc: 'Серія: Elfliq 30ML 50MG. В наявності: 1 шт.' },
    { id: 444, name: 'Elfliq 30ML 50MG — Cherry Cola', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Elfliq%2030ML%2050MG', desc: 'Серія: Elfliq 30ML 50MG. В наявності: 1 шт.' },
    { id: 445, name: 'Punch 30ML 50MG — Pink Juice', price: 210, cat: 'liquid', image: 'img/Punch15ML.png', desc: 'Серія: Punch 30ML 50MG. В наявності: 1 шт.' },
    { id: 446, name: 'Punch 30ML 50MG — Mint Lemonade', price: 210, cat: 'liquid', image: 'img/Punch15ML.png', desc: 'Серія: Punch 30ML 50MG. В наявності: 1 шт.' },
    { id: 447, name: 'Punch 30ML 50MG — Dark Merry', price: 210, cat: 'liquid', image: 'img/Punch15ML.png', desc: 'Серія: Punch 30ML 50MG. В наявності: 1 шт.' },
    { id: 448, name: 'Flip 30ML 50MG — Cereal', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Flip%2030ML%2050MG', desc: 'Серія: Flip 30ML 50MG. В наявності: 1 шт.' },
    { id: 449, name: 'Flamingo 30ML 50MG — Pomegranate Strawberry', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Flamingo%2030ML%2050MG', desc: 'Серія: Flamingo 30ML 50MG. В наявності: 1 шт.' },
    { id: 450, name: 'Wick Wire 30ML 50MG — Tibetan Dragon', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Wick%20Wire%2030ML%2050MG', desc: 'Серія: Wick Wire 30ML 50MG. В наявності: 3 шт.' },
    { id: 451, name: 'Wick Wire 30ML 50MG — Forbidden Fruit', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Wick%20Wire%2030ML%2050MG', desc: 'Серія: Wick Wire 30ML 50MG. В наявності: 4 шт.' },
    { id: 452, name: 'Wick Wire 30ML 50MG — Ruby Dreams', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Wick%20Wire%2030ML%2050MG', desc: 'Серія: Wick Wire 30ML 50MG. В наявності: 5 шт.' },
    { id: 453, name: 'Wick Wire 30ML 50MG — Jungle Bird', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Wick%20Wire%2030ML%2050MG', desc: 'Серія: Wick Wire 30ML 50MG. В наявності: 4 шт.' },
    { id: 454, name: 'Wick Wire 30ML 50MG — Natural Explode', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Wick%20Wire%2030ML%2050MG', desc: 'Серія: Wick Wire 30ML 50MG. В наявності: 3 шт.' },
    { id: 455, name: 'Wick Wire 30ML 50MG — Bugaboo', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Wick%20Wire%2030ML%2050MG', desc: 'Серія: Wick Wire 30ML 50MG. В наявності: 3 шт.' },
    { id: 456, name: 'Wick Wire 30ML 50MG — Arctic Black', price: 210, cat: 'liquid', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Wick%20Wire%2030ML%2050MG', desc: 'Серія: Wick Wire 30ML 50MG. В наявності: 1 шт.' },
    { id: 457, name: 'Картридж Cartrige Aspire minican', price: 210, cat: 'parts', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Cartrige%20Aspire%20mini', desc: 'Змінний картридж. В наявності: 8 шт.' },
    { id: 458, name: 'Картридж Voopoo Vinci', price: 210, cat: 'parts', image: 'img/VoopooV.png', desc: 'Змінний картридж. В наявності: 6 шт.' },
    { id: 459, name: 'Картридж Zero', price: 210, cat: 'parts', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Zero', desc: 'Змінний картридж. В наявності: 4 шт.' },
    { id: 460, name: 'Картридж Argus', price: 210, cat: 'parts', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Argus', desc: 'Змінний картридж. В наявності: 1 шт.' },
    { id: 461, name: 'Картридж Argus 3ml', price: 210, cat: 'parts', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Argus%203ml', desc: 'Змінний картридж. В наявності: 1 шт.' },
    { id: 462, name: 'Картридж Vmate', price: 210, cat: 'parts', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Vmate', desc: 'Змінний картридж. В наявності: 1 шт.' },
    { id: 463, name: 'Картридж Nexlim 0.6', price: 210, cat: 'parts', image: 'https://placehold.co/300x300/1E1E1E/ff00bb?text=Nexlim%200.6', desc: 'Змінний картридж. В наявності: 3 шт.' },
];

// --- АВТОМАТИЧНА ВІДПРАВКА В TELEGRAM-ГРУПУ ---
// Група приватна (посилання виду t.me/+XXXX), тому просто вписати юзернейм
// не вийде — Telegram Bot API вимагає числовий chat_id. Ось як його отримати:
//
// 1. Створи бота через @BotFather -> /newbot -> скопіюй токен у TELEGRAM_BOT_TOKEN нижче.
// 2. Додай цього бота УЧАСНИКОМ у групу https://t.me/+XlM7Nj8wJv1kNWVi
//    (Учасники групи -> Додати -> знайти бота за юзернеймом, який дав BotFather).
// 3. Напиши будь-яке повідомлення в групі (наприклад "привіт").
// 4. Відкрий у браузері: https://api.telegram.org/bot<ТВІЙ_ТОКЕН>/getUpdates
//    Знайди там "chat":{"id": -100XXXXXXXXXX, ...} — це і є потрібний chat_id
//    (для груп він від'ємний, часто починається з -100).
// 5. Встав це число (з мінусом) у TELEGRAM_CHAT_ID нижче.
//
// ⚠️ Токен буде видно у вихідному коді сайту (це статичний сайт без бекенду).
//    Для приватного використання це нормально.
const TELEGRAM_BOT_TOKEN = "ВАШ_ТОКЕН_ТУТ";       // напр. "123456789:AAHdq..."
const TELEGRAM_CHAT_ID = "ВАШ_CHAT_ID_ТУТ";        // напр. "-1001234567890"
const TELEGRAM_GROUP_LINK = "https://t.me/+XlM7Nj8wJv1kNWVi"; // запасний варіант, якщо бот не налаштований

async function sendToTelegramChannel(text) {
    if (!TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN === "ВАШ_ТОКЕН_ТУТ" ||
        !TELEGRAM_CHAT_ID || TELEGRAM_CHAT_ID === "ВАШ_CHAT_ID_ТУТ") {
        showToast('Бот не налаштований (вкажіть токен і chat_id у script.js)');
        return false;
    }
    try {
        const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text })
        });
        const data = await res.json();
        if (!data.ok) {
            console.error('Telegram API error:', data);
            showToast('Помилка відправки в Telegram');
            return false;
        }
        return true;
    } catch (e) {
        console.error('Telegram fetch error:', e);
        showToast('Не вдалось з’єднатись з Telegram');
        return false;
    }
}

// --- СТАН ---
// cart: масив { id, qty }
let cart = loadCart();
let currentProduct = null;
let currentCategory = null;
let currentBrand = null; // фільтр за брендом (тільки для категорії "рідини")

// --- ЗБЕРЕЖЕННЯ КОШИКА ---
function loadCart() {
    try {
        const saved = localStorage.getItem('smokershop_cart');
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        return [];
    }
}

function saveCart() {
    try {
        localStorage.setItem('smokershop_cart', JSON.stringify(cart));
    } catch (e) { /* сховище недоступне — ігноруємо */ }
}

// --- ДОПОМІЖНІ ---
function findProduct(id) {
    return products.find(p => p.id === id);
}

function formatPrice(n) {
    return n.toLocaleString('uk-UA');
}

// Перше слово назви товару — бренд/фірма (напр. "Chaser Black 30ml — Смак" -> "Chaser")
function getBrand(name) {
    return name.split(' ')[0];
}

function showToast(text) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.innerText = text;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 2000);
}

// --- НАВІГАЦІЯ ---

function hideAllViews() {
    document.querySelectorAll('.view').forEach(el => {
        el.classList.remove('active');
        el.classList.add('hidden');
    });
    window.scrollTo(0, 0);
}

function setActiveNav(name) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.nav === name);
    });
}

function goHome() {
    hideAllViews();
    document.getElementById('view-home').classList.remove('hidden');
    document.getElementById('view-home').classList.add('active');
    setActiveNav('home');
    renderFeatured();
}

function openCategory(category) {
    currentCategory = category;
    currentBrand = null;
    hideAllViews();
    const catalogView = document.getElementById('view-catalog');
    catalogView.classList.remove('hidden');
    catalogView.classList.add('active');
    setActiveNav('catalog');

    const titles = { pod: 'POD-системи', liquid: 'Рідини', disposable: 'Одноразки', parts: 'Комплектуючі' };
    document.getElementById('catalog-title').innerText = titles[category] || 'Каталог';

    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.cat === category);
    });

    const searchInput = document.getElementById('catalog-search');
    if (searchInput) searchInput.value = '';

    renderBrandTabs(category);
    renderCatalog(category, '');
}

function renderBrandTabs(category) {
    const wrap = document.getElementById('brand-tabs');
    if (!wrap) return;

    if (category !== 'liquid') {
        wrap.classList.add('hidden');
        wrap.innerHTML = '';
        return;
    }

    const brands = [...new Set(products.filter(p => p.cat === 'liquid').map(p => getBrand(p.name)))]
        .sort((a, b) => a.localeCompare(b, 'uk'));

    wrap.classList.remove('hidden');
    wrap.innerHTML = `<button class="cat-tab brand-tab active" data-brand="" onclick="selectBrand('')">Усі фірми</button>` +
        brands.map(b => `<button class="cat-tab brand-tab" data-brand="${b}" onclick="selectBrand('${b.replace(/'/g, "\\'")}')">${b}</button>`).join('');
}

function selectBrand(brand) {
    currentBrand = brand || null;
    document.querySelectorAll('.brand-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.brand === (brand || ''));
    });
    const searchInput = document.getElementById('catalog-search');
    renderCatalog(currentCategory, searchInput ? searchInput.value : '');
}

function renderCatalog(category, query) {
    const grid = document.getElementById('catalog-grid');
    grid.innerHTML = '';

    const q = (query || '').trim().toLowerCase();
    const items = products.filter(p => {
        if (p.cat !== category) return false;
        if (category === 'liquid' && currentBrand && getBrand(p.name) !== currentBrand) return false;
        if (q && !p.name.toLowerCase().includes(q)) return false;
        return true;
    });

    if (items.length === 0) {
        grid.innerHTML = '<p class="empty-state">Нічого не знайдено 🙁</p>';
        return;
    }

    if (category === 'liquid') {
        renderLiquidGroups(grid, items);
    } else {
        grid.classList.remove('grouped');
        items.forEach(p => {
            grid.innerHTML += `
                <div class="product-card" onclick="openProduct(${p.id})">
                    <div class="p-title">${p.name}</div>
                    <div class="p-price">${formatPrice(p.price)} грн</div>
                </div>
            `;
        });
    }
}

// Рідини групуємо по серії (все до " — "), а смаки показуємо як окремі кнопки-чипи,
// щоб кожен смак можна було чітко обрати одним тапом.
function renderLiquidGroups(grid, items) {
    grid.classList.add('grouped');

    const groups = new Map();
    items.forEach(p => {
        const idx = p.name.indexOf(' — ');
        const series = idx === -1 ? p.name : p.name.substring(0, idx);
        const flavor = idx === -1 ? null : p.name.substring(idx + 3);
        if (!groups.has(series)) groups.set(series, []);
        groups.get(series).push({ product: p, flavor });
    });

    let html = '';
    [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0], 'uk')).forEach(([series, entries]) => {
        html += `<div class="liquid-series">`;
        html += `<div class="series-title">${series}</div>`;

        if (entries.length === 1 && entries[0].flavor === null) {
            // товар без смакового варіанту — звичайна картка
            const p = entries[0].product;
            html += `
                <div class="product-card" onclick="openProduct(${p.id})">
                    <div class="p-title">${p.name}</div>
                    <div class="p-price">${formatPrice(p.price)} грн</div>
                </div>
            `;
        } else {
            html += `<div class="flavor-chips">`;
            entries.forEach(({ product, flavor }) => {
                html += `<button class="flavor-chip" onclick="openProduct(${product.id})">
                    ${flavor || product.name} <span class="flavor-chip-price">${formatPrice(product.price)}₴</span>
                </button>`;
            });
            html += `</div>`;
        }
        html += `</div>`;
    });

    grid.innerHTML = html;
}

function onCatalogSearch(value) {
    if (currentCategory) renderCatalog(currentCategory, value);
}

function openProduct(id) {
    currentProduct = findProduct(id);
    if (!currentProduct) return;

    hideAllViews();
    document.getElementById('view-product').classList.remove('hidden');
    document.getElementById('view-product').classList.add('active');

    document.getElementById('detail-title').innerText = currentProduct.name;
    document.getElementById('detail-price').innerText = formatPrice(currentProduct.price);
    document.getElementById('detail-desc').innerText = currentProduct.desc || 'Опис зʼявиться найближчим часом.';
}

function goBack() {
    if (currentProduct) {
        openCategory(currentProduct.cat);
    } else {
        goHome();
    }
}

function openCart() {
    hideAllViews();
    document.getElementById('view-cart').classList.remove('hidden');
    document.getElementById('view-cart').classList.add('active');
    setActiveNav('cart');
    renderCart();
}

// --- ГОЛОВНА / ХІТИ ---

function renderFeatured() {
    const container = document.getElementById('featured-products');
    container.innerHTML = '';

    products.slice(0, 4).forEach(p => {
        container.innerHTML += `
            <div class="product-card" onclick="openProduct(${p.id})">
                <div class="p-title">${p.name}</div>
                <div class="p-price">${formatPrice(p.price)} грн</div>
            </div>
        `;
    });
}

// --- КОШИК ---

function addToCartFromDetail() {
    if (!currentProduct) return;
    const existing = cart.find(c => c.id === currentProduct.id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: currentProduct.id, qty: 1 });
    }
    saveCart();
    updateCartCount();
    showToast(`${currentProduct.name} додано в кошик`);
}

function cartTotalCount() {
    return cart.reduce((sum, c) => sum + c.qty, 0);
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cartTotalCount();
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(c => c.id !== id);
    }
    saveCart();
    renderCart();
    updateCartCount();
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    saveCart();
    renderCart();
    updateCartCount();
}

function renderCart() {
    const list = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    list.innerHTML = '';

    let total = 0;

    if (cart.length === 0) {
        list.innerHTML = '<p class="empty-state">Кошик порожній</p>';
        totalEl.innerText = '0';
        return;
    }

    cart.forEach(item => {
        const product = findProduct(item.id);
        if (!product) return;
        const lineTotal = product.price * item.qty;
        total += lineTotal;

        list.innerHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div>
                        <b>${product.name}</b><br>
                        <small>${formatPrice(product.price)} грн</small>
                    </div>
                </div>
                <div class="cart-item-controls">
                    <div class="qty-control">
                        <button onclick="changeQty(${item.id}, -1)" aria-label="Зменшити">−</button>
                        <span>${item.qty}</span>
                        <button onclick="changeQty(${item.id}, 1)" aria-label="Збільшити">+</button>
                    </div>
                    <button class="btn-remove" onclick="removeFromCart(${item.id})" aria-label="Видалити">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });

    totalEl.innerText = formatPrice(total);
}

async function checkout() {
    if (cart.length === 0) {
        showToast('Кошик порожній');
        return;
    }

    let msg = "🛒 Нове замовлення з сайту SmokerShop:\n\n";
    let total = 0;
    cart.forEach(item => {
        const product = findProduct(item.id);
        if (!product) return;
        const lineTotal = product.price * item.qty;
        total += lineTotal;
        msg += `- ${product.name} x${item.qty} = ${lineTotal} грн\n`;
    });
    msg += `\nРазом: ${total} грн`;

    const sent = await sendToTelegramChannel(msg);
    if (sent) {
        showToast('Замовлення надіслано в Telegram ✅');
        cart = [];
        saveCart();
        renderCart();
        updateCartCount();
    } else {
        // Бот не налаштований або сталась помилка — відкриваємо групу напряму
        window.open(TELEGRAM_GROUP_LINK, '_blank');
    }
}

// --- ГЕНЕРАЦІЯ ЧЕКУ (карта / готівка) ---

function buildCheckLines() {
    const lines = [];
    let total = 0;
    cart.forEach(item => {
        const product = findProduct(item.id);
        if (!product) return;
        const lineTotal = product.price * item.qty;
        total += lineTotal;
        for (let i = 0; i < item.qty; i++) {
            lines.push(`${product.name} - ${formatPrice(product.price)} грн`);
        }
    });
    return { lines, total };
}

function generateCheck(type) {
    if (cart.length === 0) {
        showToast('Кошик порожній');
        return;
    }

    const { lines, total } = buildCheckLines();
    const header = type === 'card' ? 'карта:' : 'готівка:';
    const text = `${header}\n${lines.join('\n')}\n\nгрн: сума товарів (${formatPrice(total)})`;

    const box = document.getElementById('check-output');
    const textarea = document.getElementById('check-text');
    textarea.value = text;
    box.classList.remove('hidden');
    textarea.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function copyCheck() {
    const textarea = document.getElementById('check-text');
    textarea.select();
    textarea.setSelectionRange(0, 999999);
    try {
        navigator.clipboard.writeText(textarea.value);
        showToast('Чек скопійовано');
    } catch (e) {
        document.execCommand('copy');
        showToast('Чек скопійовано');
    }
}

function closeCheck() {
    document.getElementById('check-output').classList.add('hidden');
}

async function sendCheckToChannel() {
    const textarea = document.getElementById('check-text');
    const sent = await sendToTelegramChannel(textarea.value);
    if (sent) showToast('Чек надіслано в канал ✅');
}

// --- СТАРТ ---
renderFeatured();
updateCartCount();
