import type { TranslatedLessonContent } from "../../src/lib/lessons/explanation-types.ts";

// Turkish (Türkçe) — one entry per lesson, keyed by "type/level/slug". See generate-lesson-
// explanations.ts for how this is composed with every other language file and applied.
export const tr: Record<string, TranslatedLessonContent> = {
  "grammar/a1/nominativ": {
    summary: "Öznenin hali — her ismin başladığı temel biçim.",
    objectives: [
      "Bir Almanca cümlenin öznesini belirleme",
      "sein, werden ve bleiben'den sonra nominatifi kullanma",
    ],
    explanationSimple: [
      "Nominatif, cümlenin öznesini gösteren haldir — eylemi gerçekleştiren kişi ya da şey.",
      "Aynı zamanda sözlükte karşınıza çıkan biçimdir, yani öğrendiğiniz her isim nominatifte başlar.",
    ],
    explanationDetailed: [
      "Almanca, bir ismin cümledeki rolünü İngilizcede olduğu gibi kelime sırasını değiştirerek değil, tanımlığını değiştirerek belirtir. Nominatif hali özneyi gösterir: eylemi gerçekleştiren varlığı.",
      "Özneyi bulmak için kişiler için wer? (kim?), nesneler için was? (ne?) diye sorabilirsiniz — bu soruların cevabı olan her şey nominatiftedir.",
      "Nominatif ayrıca sein (olmak), werden (olmak/dönüşmek) ve bleiben (kalmak) gibi bağ fiillerinden sonra da kullanılır, çünkü bu fiillerden sonra gelen isim bir eylemi almaz, öznenin kendisini yeniden adlandırır.",
    ],
    exampleMeanings: ["Adam uyuyor.", "Kadın bugün çalışıyor.", "Çocuk yüksek sesle gülüyor.", "O benim öğretmenim."],
    exerciseTexts: [
      {
        explanation: "Kind nötr bir isimdir ve özne olduğu için nötr nominatif tanımlığı das'ı alır.",
        grammarRule: "Nötr nominatif tanımlığı: das.",
        prompt: "Cümleyi doğru nominatif tanımlıkla tamamlayın.",
      },
    ],
    quizTexts: [
      {
        explanation: "Der Mann eylemi gerçekleştiren öznedir, bu yüzden nominatifte kalır — den ya da dem değil, der.",
        grammarRule: "Her cümlenin öznesi için nominatif hali kullanın.",
        prompt: "Hangi cümlede nominatif doğru kullanılmış?",
      },
      {
        explanation:
          "Doğru — sein/werden/bleiben özneyi onu yeniden adlandıran bir isimle bağlar, bu yüzden o isim de nominatifte kalır.",
        grammarRule: "sein, werden ve bleiben'den sonra gelen yüklem ismi için nominatif kullanın.",
        prompt: "sein, werden ve bleiben fiillerinden sonra gelen yüklem ismi nominatif halde kullanılır.",
      },
      {
        explanation: "Frau dişil bir isimdir ve özne olduğu için dişil nominatif tanımlığı die'yi alır.",
        grammarRule: "Dişil nominatif tanımlığı: die.",
        prompt: "Cümleyi doğru nominatif tanımlıkla tamamlayın.",
      },
      {
        explanation:
          "Almanca ana cümleler önce özneyi (Der Junge), sonra çekimli fiili (liest) ikinci sırada, ardından cümlenin geri kalanını sıralar.",
        grammarRule: "Nominatif ögeyi bulmak için wer? ya da was? diye sorun — burada Der Junge, wer? sorusunun cevabıdır.",
        translation: "Çocuk bir kitap okuyor.",
        prompt: "Kelimeleri doğru sıraya koyun.",
      },
      {
        explanation: "Kind nötrdür ← das; Katze dişildir ← die — ikisi de nominatif öznedir.",
        grammarRule: "Her ismin cinsiyetini nominatif tanımlığıyla eşleştirin: der/die/das.",
        prompt: "Her tanımlığı doğru boşluğa sürükleyin.",
      },
      {
        explanation: "Der Lehrer eril bir isimdir, bu yüzden nominatifte er zamiriyle değiştirilir.",
        grammarRule: "Eril nominatif zamiri: er.",
        prompt: "'der Lehrer' yerine geçen nominatif şahıs zamirini yazın.",
      },
    ],
    conclusion:
      "Nominatif, cümlenin öznesini ve sein, werden, bleiben'den sonra gelen yüklem ismini belirtir. Diğer tüm hallerin türediği temel biçim olduğu için, akkusatife geçmeden önce iyice öğrenmeye değer.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Her cümlenin öznesi için nominatif hali kullanın.",
          "sein, werden ve bleiben'den sonra gelen yüklem ismi için de kullanın.",
          "Nominatif ögeyi bulmak için wer? ya da was? diye sorun.",
        ],
        notes: [
          "Nominatif 'varsayılan' biçimdir — sözlükte aradığınız ve diğer tüm hallerin kıyaslandığı biçimdir.",
          "Nominatif bir isimden önceki sıfat çekim eki, tanımlığa ve cinsiyete bağlıdır, örneğin der große Mann — ama bu ayrı bir konu.",
        ],
        mistakeNotes: [
          "sehen fiili doğrudan nesneyi nominatif değil akkusatif halde ister — bu, her öğrencinin yaptığı ilk karışıklıklardan biridir.",
          "Dişil nominatif her zaman die'dır, asla der değil — der eril isimlere özeldir.",
        ],
        exceptions: [
          "'Zayıf isimler' ya da n-isimleri olarak bilinen bir grup eril isim — der Junge, der Name, der Student, der Herr — nominatif tekil dışındaki her halde -n ya da -en eki alır.",
          "Bazı isimlerin cinsiyeti değişken ya da tartışmalıdır (örneğin der/das Joghurt), ama sözlük her zaman standart biçimi verir.",
        ],
        tips: [
          "Hangi halin gerektiğinden emin olmadığınızda, önce fiili bulun ve wer oder was tut das? diye sorun — cevap her zaman nominatiftir.",
          "Öğrendiğiniz her yeni ismi nominatif tanımlığıyla (der/die/das) birlikte öğrenin — bu tek alışkanlık, ileride yapılacak birçok cinsiyet hatasını önler.",
        ],
      },
    },
  },
  "grammar/a1/akkusativ": {
    summary: "Doğrudan nesnenin hali, ve sabit bir edat grubu.",
    objectives: [
      "Geçişli bir fiilin doğrudan nesnesini belirleme",
      "der ← den, ein ← einen değişimini doğru uygulama",
      "Sabit akkusatif edatlarını tanıma",
    ],
    explanationSimple: [
      "Akkusatif doğrudan nesneyi gösterir — fiilin eylemini doğrudan üzerinde alan kişi ya da şey.",
      "Aynı zamanda küçük ve sabit bir edat grubundan sonra, istisnasız kullanılan haldir.",
    ],
    explanationDetailed: [
      "Özneyi (nominatifi) bulduktan sonra, genellikle sıradaki soru şudur: 'özne neyi etkiliyor?' — bu, doğrudan nesnedir ve Almancada akkusatif halini alır.",
      "Kişiler için wen? (kimi?), nesneler için was? (neyi?) diye sorarak bulabilirsiniz.",
      "Akkusatifte gözle görülür şekilde değişen tek tanımlık erildir: der, den olur; ein, einen olur. Dişil, nötr ve çoğul tanımlıklar tam olarak nominatiftekiyle aynıdır — bu yüzden akkusatif, eril bir isim devreye girmedikçe genellikle 'görünmez' kalır.",
      "Sabit bir fiil grubu neredeyse her zaman akkusatif nesne alır — haben, sehen, brauchen, kaufen, essen, trinken, lieben — ve sabit bir edat grubu her zaman akkusatifi tetikler: durch, für, gegen, ohne, um.",
    ],
    exampleMeanings: ["Adamı görüyorum.", "O bir elma satın alıyor.", "Köpeğimizi seviyoruz.", "Bu hediye senin için."],
    exerciseTexts: [
      {
        explanation: "Hund eril bir isimdir, bu yüzden iyelik zamiri de akkusatifteki eril değişimi alır: unser ← unseren.",
        grammarRule: "Akkusatifte yalnızca eril tanımlık/iyelik zamiri değişir.",
        prompt: "Cümleyi doğru akkusatif tanımlıkla tamamlayın.",
      },
    ],
    quizTexts: [
      {
        explanation: "sehen fiili doğrudan nesneyi akkusatifte alır, ve eril der, den olur.",
        grammarRule: "Yalnızca eril tanımlık değişir: der ← den, ein ← einen.",
        prompt: "Hangi cümlede akkusatif doğru kullanılmış?",
      },
      {
        explanation: "Doğru — die hem nominatifte hem akkusatifte aynı kalır; yalnızca eril tanımlık değişir.",
        grammarRule: "Dişil, nötr ve çoğul tanımlıklar nominatiftekiyle aynıdır.",
        prompt: "Dişil akkusatif tanımlığı, dişil nominatif tanımlığıyla aynıdır.",
      },
      {
        explanation: "Apfel eril bir isimdir ve kaufen'den sonra doğrudan nesne olduğu için akkusatif einen'i gerektirir.",
        grammarRule: "Eril belirsiz akkusatif tanımlığı: einen.",
        prompt: "Cümleyi doğru akkusatif tanımlıkla tamamlayın.",
      },
      {
        explanation: "Önce özne (Wir), sonra fiil (lieben), ardından akkusatif nesne (unseren Hund) gelir.",
        grammarRule: "Geçişli bir fiilin doğrudan nesnesi için akkusatif kullanın.",
        translation: "Köpeğimizi seviyoruz.",
        prompt: "Kelimeleri doğru sıraya koyun.",
      },
      {
        explanation: "für her zaman akkusatifi tetikler, bu yüzden du, dich olur ve er, ihn olur.",
        grammarRule: "durch, für, gegen, ohne, um'dan sonra her zaman akkusatif kullanın.",
        prompt: "Her zamiri doğru boşluğa sürükleyin.",
      },
      {
        explanation: "Student zayıf bir isimdir (n-isim), bu yüzden hem akkusatif tanımlığı den'i hem de -en ekini alır: den Studenten.",
        grammarRule: "Zayıf isimler akkusatifte de -n/-en eki alır.",
        prompt: "'der Student' zayıf bir isim olduğu için, akkusatif biçimini tanımlığıyla birlikte yazın.",
      },
    ],
    conclusion:
      "Akkusatif doğrudan nesneyi gösterir ve durch, für, gegen, ohne, um'dan sonra kullanılır. Nominatife göre tek gözle görülür değişim eril tanımlıktır — der/ein, den/einen olur — geri kalan her şey aynı kalır.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Geçişli bir fiilin doğrudan nesnesi için akkusatif kullanın.",
          "Bulmak için kişiler için wen?, nesneler için was? diye sorun.",
          "Yalnızca eril tanımlık değişir: der ← den, ein ← einen.",
          "Dişil, nötr ve çoğul tanımlıklar nominatiftekiyle aynıdır.",
          "durch, für, gegen, ohne, um'dan sonra her zaman akkusatif kullanın.",
        ],
        notes: [
          "Yalnızca eril tanımlıklar değiştiği için, öğrenciler genellikle dişil ve nötr isimlerin cinsiyetini kontrol etmeyi bırakır — ama iyelik ve şahıs zamirleri (mein ← meinen, ihr ← ihren) aynı yalnızca-eril kalıbını izler, bu yüzden dikkatli olmakta fayda var.",
          "'Ne kadar süre?' sorusuna cevap veren ya da belirli bir noktayı ('hangi gün?') adlandıran zaman ifadeleri, genellikle edatsız akkusatif kullanır: Ich bleibe einen Monat. / Nächsten Montag reise ich ab.",
        ],
        mistakeNotes: [
          "sehen akkusatif nesne ister, bu yüzden eril tanımlık der, den'e dönüşmelidir.",
          "für her zaman akkusatifi tetikler, bu yüzden ich zamiri mich olur.",
        ],
        exceptions: [
          "der Student, der Junge ve der Name gibi zayıf isimler (n-isimleri) akkusatifte de -n alır: den Studenten, den Jungen, den Namen — yalnızca datif ve genitifte değil.",
          "Edat gerektirecek gibi görünen birkaç fiil aslında edatsız akkusatif nesne alır, örneğin Ich frage dich ('zu dir' değil).",
        ],
        tips: [
          "Dişil, nötr ve çoğul isimler nominatif ve akkusatifte aynıdır — bir cümle 'değişmemiş' görünüyorsa, kontrol etmeniz gereken eril isimdir.",
          "durch, für, gegen, ohne, um'u tek bir blok olarak ezberleyin — her zaman akkusatiftir, istisnası yoktur.",
        ],
      },
    },
  },
  "grammar/b1/dativ": {
    summary: "Dolaylı nesnenin hali — bir şeyi alan ya da ondan yararlanan kişi.",
    objectives: [
      "Bir cümlenin dolaylı nesnesini belirleme",
      "Datif tanımlık değişimini tüm cinsiyetlerde uygulama",
      "Yalnızca datif alan fiilleri ve edatları tanıma",
    ],
    explanationSimple: [
      "Datif dolaylı nesneyi gösterir — genellikle bir şeyi alan ya da ondan yararlanan kişi.",
      "wem? (kime?) sorusuna cevap verir.",
    ],
    explanationDetailed: [
      "Birçok Almanca cümlede hem doğrudan nesne (akkusatif) hem de dolaylı nesne (datif) bulunur: Ich gebe dem Mann das Buch — 'Kitabı adama veriyorum.' dem Mann alıcıdır, bu yüzden datiftedir.",
      "Sabit bir fiil grubu, akkusatif alması beklenmesine rağmen her zaman datif nesne alır — helfen, danken, gefallen, gehören, folgen, glauben ve antworten, öğrencilerin en erken karşılaştığı fiillerdir.",
      "Datif ayrıca sabit bir edat grubundan sonra kullanılır: aus, bei, mit, nach, seit, von, zu.",
      "Dokuz 'çift yönlü' edatla (in, an, auf, über, unter, vor, hinter, neben, zwischen) yer bildirmek için datif — wo? (nerede?) sorusunun cevabı — bir hedefe doğru hareket bildirmek için akkusatif — wohin? (nereye?) sorusunun cevabı — kullanılır.",
    ],
    exampleMeanings: [
      "Kitabı adama veriyorum.",
      "Kız kardeşine yardım ediyor.",
      "Otobüsle seyahat ediyoruz.",
      "Ev komşulara ait.",
    ],
    exerciseTexts: [
      {
        explanation: "Nachbarn çoğuldur, ve gehören her zaman datif alır, bu yüzden die, den olur.",
        grammarRule: "Datifte her tanımlık değişir; çoğul die, den olur.",
        prompt: "Cümleyi doğru datif tanımlıkla tamamlayın.",
      },
    ],
    quizTexts: [
      {
        explanation: "helfen her zaman datif nesne alır, ve dişil die datifte der olur.",
        grammarRule: "helfen her zaman datif alır, asla akkusatif değil.",
        prompt: "Hangi cümlede datif doğru kullanılmış?",
      },
      {
        explanation:
          "Doğru — die Kinder, den Kindern olur; yalnızca zaten -n ya da -s ile biten isimler değişmeden kalır.",
        grammarRule: "Çoğul isimler, zaten -n ya da -s ile bitmiyorsa datifte -n eki alır.",
        prompt: "Çoğul isimler datif halde genellikle -n eki alır.",
      },
      {
        explanation: "Bus erildir, ve mit her zaman datifi tetikler, bu yüzden der, dem olur.",
        grammarRule: "aus, bei, mit, nach, seit, von, zu'dan sonra her zaman datif kullanın.",
        prompt: "Cümleyi doğru datif tanımlıkla tamamlayın.",
      },
      {
        explanation: "Her iki nesne de isim olduğunda, datif (dem Mann) genellikle akkusatiften (das Buch) önce gelir.",
        grammarRule: "Cümledeki her iki nesne de isim olduğunda, datif genellikle önce gelir.",
        translation: "Kitabı adama veriyorum.",
        prompt: "Kelimeleri doğru sıraya koyun.",
      },
      {
        explanation: "gehören her zaman datif alır: sie, ihr olur ve er, ihm olur.",
        grammarRule: "Sabit bir fiil grubu her zaman datif nesne alır — gehören bunlardan biridir.",
        prompt: "Her zamiri doğru boşluğa sürükleyin.",
      },
      {
        explanation: "Çoğul die Kinder datifte den Kindern olur — tanımlık den'e döner ve isim -n eki alır.",
        grammarRule: "Datifte her tanımlık değişir; çoğul isimler -n eki alır.",
        prompt: "'die Kinder' isminin datif çoğul biçimini tanımlığıyla birlikte yazın (örneğin 'den …').",
      },
    ],
    conclusion:
      "Datif dolaylı nesneyi gösterir, aus/bei/mit/nach/seit/von/zu'dan sonra kullanılır ve her tanımlığı değiştirir — çoğul isimlere eklenen belirgin bir -n ile. helfen ve danken gibi birkaç fiil her zaman datif nesne alır.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Dolaylı nesne için — genellikle alıcı ya da yararlanan kişi — datif kullanın.",
          "Bulmak için wem? diye sorun.",
          "Her tanımlık değişir: der ← dem, die ← der, das ← dem, die (çoğul) ← den.",
          "Çoğul isimler, zaten -n ya da -s ile bitmiyorsa datifte -n eki alır: die Kinder ← den Kindern.",
          "aus, bei, mit, nach, seit, von, zu'dan sonra her zaman datif kullanın.",
          "Çift yönlü edatlarla datif wo?, akkusatif wohin? sorusuna cevap verir.",
        ],
        notes: [
          "Datif fiilleri, ilgili kişi için asla akkusatif nesne almaz — örneğin helfen her zaman 'jemandem helfen'dir, asla 'jemanden helfen' değil.",
          "Kelime sırası ipucu: cümledeki her iki nesne de isim olduğunda, datif genellikle önce gelir: Ich gebe dem Mann das Buch. İkisi de zamir olduğunda, akkusatif önce gelir: Ich gebe es ihm.",
        ],
        mistakeNotes: [
          "helfen her zaman datif alır, asla akkusatif değil — istisnası yoktur.",
          "mit her zaman datiftir, ve çoğul isim -n eki gerektirir: Kinder ← Kindern.",
        ],
        exceptions: [
          "Küçük bir fiil ve sıfat grubu, deyimsel nedenlerle datifle kullanılır — gefallen (hoşuna gitmek), schmecken (lezzetli gelmek) ve stehen (yakışmak) kişiyi datife koyar: Das Kleid steht dir gut.",
          "Çoğulda zaten -n ya da -s ile biten isimler datifte ekstra -n almaz: den Autos, den Frauen.",
        ],
        tips: [
          "Datif çoğul neredeyse her zaman -n ile biter — bir isimde bu -n'i görmek, bir cümlenin datif olduğunu ilk bakışta anlamanın en hızlı yoludur.",
          "aus, bei, mit, nach, seit, von, zu'yu bir liste olarak öğrenin — listenin kendisinin ötesinde ezberlenecek bir mantık yoktur.",
        ],
      },
    },
  },
  "grammar/a2/perfekt": {
    summary: "Almancanın günlük geçmiş zamanı — nasıl kurulur ve ne zaman kullanılır.",
    objectives: [
      "Perfekt'i haben ya da sein artı bir geçmiş zaman ortacıyla kurma",
      "haben ile sein arasında doğru seçim yapma",
      "Kurallı ve kuralsız geçmiş zaman ortaçlarını tanıma",
    ],
    explanationSimple: [
      "Perfekt, konuşma dilindeki Almancanın geçmişten bahsetme biçimidir — tek bir fiil değil, haben ya da sein artı bir geçmiş zaman ortacıdır.",
      "Kim konuşursa konuşsun aynı şekilde kurulur: yardımcı fiil ikinci konumda, ortaç ise cümlenin sonunda.",
    ],
    explanationDetailed: [
      "Çoğu fiil yardımcı fiil olarak haben kullanır. Hareket bildiren fiiller (gehen, fahren, kommen) ya da durum değişikliği bildirenler (aufwachen, werden) genellikle sein kullanır.",
      "Kurallı (zayıf) fiiller ortaçlarını ge- + kök + -t ile oluşturur: machen ← gemacht, spielen ← gespielt. Kuralsız (güçlü) fiiller genellikle kök ünlüsünü değiştirir ve -en ile biter: sprechen ← gesprochen, gehen ← gegangen.",
      "Ortaç cümlenin sonuna gittiği için, nesneler, zaman ifadeleri, olumsuzluk gibi her şey yardımcı fiil ile ortaç arasına yerleşir.",
    ],
    exampleMeanings: ["Kitabı okudum.", "Berlin'e gittik.", "Dün çalıştı.", "Erken uyandı."],
    exerciseTexts: [
      {
        explanation: "fahren bir yerden başka bir yere hareketi anlatır, bu yüzden sein alır: Wir sind gefahren.",
        grammarRule: "Hareket ya da durum değişikliği bildiren fiiller için sein kullanın.",
        prompt: "'fahren' fiili Perfekt'te hangi yardımcı fiili alır?",
      },
    ],
    quizTexts: [
      {
        explanation: "lesen fiili haben alır ve kuralsız ortacı gelesen, cümlenin sonuna yerleşir.",
        grammarRule: "Çoğu fiil için yardımcı fiil olarak haben kullanın.",
        prompt: "Hangi cümlede Perfekt doğru kurulmuş?",
      },
      {
        explanation: "Doğru — telefonieren ← telefoniert, ge- almadan.",
        grammarRule: "-ieren ile biten fiiller asla ge- almaz.",
        prompt: "telefonieren gibi fiiller Perfekt'te asla ge- öneki almaz.",
      },
      {
        explanation: "fahren hareket bildiren bir fiildir, bu yüzden sein alır: sind gefahren.",
        grammarRule: "Hareket ya da durum değişikliği bildiren fiiller için sein kullanın.",
        prompt: "Cümleyi doğru yardımcı fiille tamamlayın.",
      },
      {
        explanation: "essen kuralsızdır: gegessen, kurallı biçim geesst değil.",
        grammarRule: "Kuralsız ortaçlar genellikle kök ünlüsünü değiştirir ve -en ile biter.",
        prompt: "'essen' fiilinin geçmiş zaman ortacını yazın.",
      },
    ],
    conclusion:
      "Perfekt, haben ya da sein artı cümlenin sonuna yerleşen bir geçmiş zaman ortacından oluşur. Çoğu fiil haben alır; hareket ya da durum değişikliği bildiren fiiller sein alır. Kurallı ortaçlar -t, kuralsızlar genellikle -en ile biter.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Çoğu fiil için yardımcı fiil olarak haben kullanın.",
          "Hareket ya da durum değişikliği bildiren fiiller için sein kullanın.",
          "Kurallı ortaç: ge- + kök + -t.",
          "Kuralsız ortaçlar genellikle -en ile biter ve kök ünlüsü değişebilir.",
          "Ortaç her zaman cümlenin sonuna gider.",
        ],
        notes: [
          "Birkaç yaygın kuralsız ortacı türetmek yerine doğrudan ezberlemekte fayda var: gewesen (sein), gehabt (haben), gegessen (essen), getrunken (trinken).",
          "Ayrılabilir önekli fiiller -ge-'yi önek ile kök arasına yerleştirir: aufwachen ← aufgewacht, geaufwacht değil.",
        ],
        mistakeNotes: ["fahren hareket bildiren bir fiildir, bu yüzden haben değil sein alır."],
        exceptions: [
          "-ieren ile biten fiiller (telefonieren, studieren) asla ge- almaz: telefoniert, studiert.",
          "Ayrılamaz önekli fiiller de (be-, ver-, er-, ge-, ent-, zer-) ge-'yi atlar: besuchen ← besucht, verstehen ← verstanden.",
        ],
        tips: [
          "haben mi sein mi konusunda kararsız kaldığınızda şunu sorun: bu fiil A noktasından B noktasına bir hareketi mi, yoksa bir durum değişikliğini mi anlatıyor? Cevap evetse, neredeyse kesinlikle sein'dir.",
          "Yeni kuralsız fiilleri her üç biçimiyle birlikte öğrenin — mastar, di'li geçmiş, ortaç — tıpkı yeni bir isimle der/die/das'ı birlikte öğrendiğiniz gibi.",
        ],
      },
    },
  },
  "vocabulary/a1/familie": {
    summary: "Aile üyeleri hakkında konuşmak için temel kelime bilgisi.",
    explanationSimple: [
      "Bu ders, kendi hayatınızı anlatmaya başlar başlamaz sürekli kullanacağınız yakın aile üyeleri için Almanca kelimeleri kapsıyor.",
    ],
    explanationDetailed: [
      "Aile isimleri, zaten bildiğiniz düzenli cinsiyet kalıplarını izler: kişileri belirten isimlerin çoğu, kişinin cinsiyetine göre der ya da die'dır; das Kind (çocuk) ve das Baby (bebek) gibi birkaç sabit istisna ise çocuğun cinsiyetinden bağımsız olarak dilbilgisel açıdan nötrdür.",
      "İyelik zamirleri (mein, meine) tıpkı ein/eine gibi ismin cinsiyetine uyar — mein Vater, meine Mutter, mein Kind.",
    ],
    exampleMeanings: ["Bu benim annem.", "Kardeşim Berlin'de yaşıyor.", "İki kız kardeşim var."],
    exerciseTexts: [
      {
        explanation: "Schwester dişildir: die Schwester.",
        grammarRule: "Aile üyesi isimleri, adlandırdıkları kişinin cinsiyetini alır.",
        prompt: "'kız kardeş' kelimesinin Almancasını yazın.",
      },
    ],
    quizTexts: [
      { explanation: "der Vater 'baba' anlamına gelir.", grammarRule: "der Vater erildir.", prompt: "Hangi kelime 'baba' anlamına gelir?" },
      {
        explanation: "Doğru — das Kind her zaman nötrdür.",
        grammarRule: "das Kind ve das Baby gibi birkaç kişi ismi sabit olarak nötrdür.",
        prompt: "'das Kind' kelimesi, çocuğun cinsiyetinden bağımsız olarak dilbilgisel açıdan her zaman nötrdür.",
      },
      {
        explanation: "Schwestern, Schwester'in çoğuludur.",
        grammarRule: "Çoğu dişil isim çoğulda -n ya da -en eki alır.",
        prompt: "Cümleyi tamamlayın.",
      },
    ],
    conclusion:
      "Aile kelimeleri dilbilgisel açıdan düzenlidir — kişiler için cinsiyetli isimler, sabit nötr istisna das Kind ile birlikte — ve size iyelik zamirlerini pratik etmek için hemen bir fırsat sunar.",
    details: {
      kind: "vocabulary",
      value: { wordMeanings: ["anne", "baba", "kız kardeş", "erkek kardeş", "ebeveynler (çoğul)", "çocuk", "büyükanne", "büyükbaba"] },
    },
  },
  "reading/a1/im-cafe": {
    summary: "Kafede sipariş vermekle ilgili kısa, günlük bir metin, anlama sorularıyla birlikte.",
    explanationSimple: ["Bir kafede geçen kısa bir sahne — her kelimeyi kontrol etmeden önce genel fikri anlamak için bir kez okuyun."],
    explanationDetailed: [
      "A1 seviyesinde okuma en iyi iki aşamada işler: önce genel durumu (kim, nerede, ne oluyor) anlamak için, sonra ilk seferde fark etmediğiniz tek tek kelimelere dikkat etmek için ikinci bir okuma.",
      "Aşağıdaki anlama sorularını cevaplamak için her kelimeyi anlamanıza gerek yok — sahnenin anlamını gerçekten değiştiren şeye odaklanın.",
    ],
    exampleMeanings: [],
    exerciseTexts: [
      {
        explanation: "Anna çay değil, kahve (einen Kaffee) sipariş ediyor.",
        grammarRule: "bestellen + akkusatif nesne.",
        prompt: "Anna çay sipariş ediyor.",
      },
    ],
    quizTexts: [
      {
        explanation: "Sie setzt sich an einen Tisch am Fenster — pencere kenarındaki bir masaya oturuyor.",
        grammarRule: "sich setzen an + akkusatif.",
        prompt: "Anna nereye oturuyor?",
      },
      {
        explanation: "Doğru — Anna trinkt den Kaffee langsam und liest ein Buch.",
        grammarRule: "und ile bağlanmış iki eş değerli fiil.",
        prompt: "Anna kahvesini içerken bir kitap okuyor.",
      },
      {
        explanation: "Minuten (dakika) — Nach zehn Minuten.",
        grammarRule: "nach + datif zaman ifadesi.",
        prompt: "Tamamlayın: garson siparişi on ___ sonra getiriyor.",
      },
    ],
    conclusion:
      "Tamamen A1 seviyesi kelime bilgisi ve basit ana cümlelerden kurulu kısa bir kafe sahnesi — her tek kelimeyi merak etmeden önce genel anlam için okuma pratiği yapmak için iyi bir alıştırma.",
    details: { kind: "none" },
  },
  "listening/a1/am-bahnhof": {
    summary: "Kısa bir istasyon anonsu — peronu ve kalkış saatini dinleyin.",
    explanationSimple: ["Kısa bir istasyon anonsu — henüz bir ses dosyası bağlanmadı, bu yüzden transkripti sanki dinliyormuş gibi okuyun."],
    explanationDetailed: [
      "Almancada istasyon ve havaalanı anonsları çok öngörülebilir bir yapı izler — bu öngörülebilirlik onları başlangıç için iyi bir dinleme alıştırması yapan tam da şeydir: tren numarası, peron (Gleis) ve saat, neredeyse her zaman aynı sırayla.",
      "Bir anonstan peron numarasını ve saati güvenilir şekilde ayırt edebildiğinizde, aynı dinleme stratejisini benzer şekilde kalıplaşmış her sese (hava durumu raporları, güvenlik anonsları vb.) genelleyebilirsiniz.",
    ],
    exampleMeanings: [],
    exerciseTexts: [
      { explanation: "Gleis 7 — 7. peron.", grammarRule: "von + datif peron numarası.", prompt: "Tren hangi perondan kalkıyor?" },
    ],
    quizTexts: [
      {
        explanation: "…fährt heute von Gleis 7 — 7. peron.",
        grammarRule: "von + datif.",
        prompt: "Münih'e giden tren nereden kalkıyor?",
      },
      {
        explanation: "vierzehn Uhr dreißig, 14:30 demektir.",
        grammarRule: "Sözlü 24 saatlik zaman: [saat] Uhr [dakika].",
        prompt: "Kalkış saatini 24 saatlik rakamlarla yazın (örneğin 09:15).",
      },
    ],
    conclusion:
      "İstasyon anonsları kalıplaşmıştır — tren numarası, peron, saat — bu da dinlenecek kalıbı öğrendiğinizde onları ideal bir ilk dinleme alıştırması yapar.",
    details: { kind: "none" },
  },
  "speaking/a1/sich-vorstellen": {
    summary: "Kendinizi sesli olarak tanıtmayı pratik edin — isim, nereli olduğunuz ve birkaç ayrıntı daha.",
    explanationSimple: [
      "Kendini tanıtmak, Almanca olarak gerçekten sesli söyleyeceğiniz ilk şeylerden biridir — sürekli kullanacağınız birkaç sabit kısa cümle.",
    ],
    explanationDetailed: [
      "Buradaki konuşma pratiği en iyi sesli yapılır, sadece zihinde değil — kimse dinlemese bile, aşağıdaki her yönergeyi bir sonrakine geçmeden önce tam bir cümle olarak söyleyin.",
      "Henüz kayıt ya da konuşma puanlama özelliği yok; bunu, yönergeleri ve örnek cümleleri uyarlanabilir bir metin olarak kullanan, kendi kendine yönetilen bir konuşma alıştırması olarak düşünün.",
    ],
    exampleMeanings: ["Adım Anna.", "Almanya'danım.", "Öğrenciyim."],
    exerciseTexts: [
      {
        explanation: "Ich komme aus … nereli olduğunuzu söylemenin standart yoludur.",
        grammarRule: "kommen aus + datif ülke/şehir adı.",
        prompt: "'... 'danım/den geliyorum' ifadesinin Almancasını yazın.",
      },
    ],
    quizTexts: [
      {
        explanation: "heißen fiili, ad ile birlikte doğrudan çekimlenir: Ich heiße Anna.",
        grammarRule: "heißen + ad, ekstra bir fiile gerek yok.",
        prompt: "Hangi cümle doğru şekilde 'Adım Anna' anlamına gelir?",
      },
      {
        explanation: "heißt, heißen fiilinin du biçimidir.",
        grammarRule: "du heißt (kurallı -en fiil çekimi).",
        prompt: "Birinin adını gayriresmi olarak sormak için cümleyi tamamlayın.",
      },
    ],
    conclusion:
      "Kendini tanıtma, üç sabit cümle kalıbından oluşur — isim, köken, meslek — ve ilk günden itibaren kullanacağınız için sesli olarak bolca pratik etmeye değer.",
    details: {
      kind: "speaking",
      value: {
        promptInstructions: [
          "Adınızı söyleyin:",
          "Nereli olduğunuzu söyleyin:",
          "Ne iş yaptığınızı söyleyin:",
          "Karşınızdaki kişiye adını sorun:",
          "Kendi üç cümlenizi kısa bir tanıtımda bir araya getirin.",
        ],
      },
    },
  },
  "quiz/a1/wiederholung": {
    summary: "Halleri, günlük kelime bilgisini ve temel cümle sırasını kapsayan karma bir tekrar testi.",
    explanationSimple: [
      "Saf bir tekrar testi — yeni bir açıklama yok, sadece A1 seviyesinde şimdiye kadar işlenen her şeyi kapsayan karma bir soru seti.",
    ],
    explanationDetailed: [],
    exampleMeanings: [],
    exerciseTexts: [],
    quizTexts: [
      {
        explanation: "Cümlenin öznesi nominatif alır: Der Mann.",
        grammarRule: "Her cümlenin öznesi için nominatif hali kullanın.",
        prompt: "Hangi tanımlık doğru? '___ Mann schläft.' (özne)",
      },
      {
        explanation: "sehen fiili akkusatif nesne alır, ve eril der, den olur.",
        grammarRule: "Akkusatifte yalnızca eril tanımlık değişir.",
        prompt: "Doğru akkusatif tanımlıkla tamamlayın.",
      },
      { explanation: "die Schwester.", grammarRule: "Aile kelime bilgisi tekrarı.", prompt: "'kız kardeş' kelimesinin Almancasını yazın." },
      {
        explanation: "Önce özne, sonra çekimli fiil ikinci konumda gelir.",
        grammarRule: "Temel Almanca kelime sırası: özne, fiil, geri kalan.",
        translation: "Adım Anna.",
        prompt: "Kelimeleri doğru sıraya koyun.",
      },
    ],
    conclusion: "Haller, kelime bilgisi ve kelime sırası üzerine kısa ve karma bir tekrar — A1'i geçmeden önce iyi bir kontrol.",
    details: { kind: "none" },
  },
  "grammar/b2/genitiv": {
    summary: "İyelik hali — konuşma dilinde gitgide daha resmi bir hal alıyor, ama okuma ve yazı için hâlâ vazgeçilmez.",
    objectives: [
      "Genitiv'i iyelik hali olarak tanıma",
      "Eril ve nötr isimlere doğru isim ekini ekleme",
      "trotz, wegen, während ve statt'tan sonra Genitiv kullanma",
    ],
    explanationSimple: [
      "Genitiv iyeliği gösterir — bir şeyin kime ya da neye ait olduğunu belirtir.",
      "Ayrıca trotz, wegen, während, statt gibi küçük ve sabit bir edat grubundan sonra da kullanılır.",
    ],
    explanationDetailed: [
      "Diğer üç halin aksine, Genitiv yalnızca tanımlığı değil, ismin kendisini de değiştirir — eril ve nötr isimler -s ya da -es eki alırken, dişil ve çoğul isimler hiç değişmeden kalır.",
      "Günlük konuşma dilinde von + datif, Genitiv'in yerini sıkça alır (meines Vaters yerine von meinem Vater) — ama yazıda ve özenli konuşmada beklenen, daha resmi biçim hâlâ Genitiv'dir, ve okurken sürekli karşınıza çıkar.",
      "Genitiv'de kelime sırası, iyelik sahibini nitelediği isimden sonra yerleştirir — meines Vaters Auto değil, das Auto meines Vaters — özel isimler ise bunun istisnasıdır ve önce gelir: Annas Auto.",
    ],
    exampleMeanings: ["Babamın arabası yeni.", "Evin rengini beğeniyorum.", "Kadının adı Anna.", "Yağmura rağmen yürüyüşe çıkıyoruz."],
    exerciseTexts: [
      {
        explanation: "Frau dişil bir isimdir, bu yüzden Genitiv'de der tanımlığını alır — ismin kendisi değişmez.",
        grammarRule: "Dişil Genitiv tanımlığı: der.",
        prompt: "Cümleyi doğru Genitiv tanımlıkla tamamlayın.",
      },
    ],
    quizTexts: [
      {
        explanation: "Vaters, iyelik zamiri meines'ten sonra Genitiv -s ekini alır ve arabanın kime ait olduğunu gösterir.",
        grammarRule: "Eril Genitiv isimleri -s ya da -es eki alır.",
        prompt: "Hangi cümlede Genitiv doğru kullanılmış?",
      },
      {
        explanation: "Doğru — yalnızca eril ve nötr isimler Genitiv ismi eki alır; dişil ve çoğul isimler değişmeden kalır.",
        grammarRule: "Genitiv isim ekleri: yalnızca eril ve nötr için -s/-es.",
        prompt: "Eril ve nötr isimler Genitiv'de genellikle -s ya da -es eki alır, ama dişil isimler asla değişmez.",
      },
      {
        explanation: "Haus nötr bir isimdir, bu yüzden Genitiv'de des tanımlığını alır ve isim de -es ekini alır: Hauses.",
        grammarRule: "Nötr Genitiv tanımlığı: des, isim +(e)s.",
        prompt: "Cümleyi doğru Genitiv tanımlıkla tamamlayın.",
      },
      {
        explanation: "Trotz, her zaman Genitiv'i tetikleyen sabit edatlardan biridir.",
        grammarRule: "Genitiv edatları: während, trotz, wegen, statt.",
        prompt: "'Rağmen' anlamına gelen Genitiv edatını yazın.",
      },
    ],
    conclusion:
      "Genitiv iyeliği belirtir ve trotz, wegen, während gibi küçük bir edat grubundan sonra kullanılır. Eril ve nötr isimler -s ya da -es eki alır; dişil ve çoğul isimler değişmeden kalır. Günlük konuşmada giderek von + datif tarafından yerini alsa da, okuma ve resmi yazı için vazgeçilmezliğini korur.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "İyeliği göstermek için Genitiv kullanın — bir şeyin kime ya da neye ait olduğunu belirtmek için.",
          "Sabit edatlar trotz, wegen, während ve statt'tan sonra kullanın.",
          "Eril ve nötr isimlere -s ya da -es ekleyin; dişil ve çoğul isimler değişmez.",
        ],
        notes: [
          "Günlük konuşma dilinde von + datif genellikle Genitiv'in yerini alır (meines Vaters yerine von meinem Vater) — ama yazıda ve resmi konuşmada hâlâ Genitiv beklenir.",
          "Genitiv'de kelime sırası, iyelik sahibini nitelediği isimden sonra koyar: meines Vaters Auto değil, das Auto meines Vaters (özel isimler hariç: Annas Auto).",
        ],
        mistakeNotes: [
          "İyelik zamirinin kendisi de Genitiv eki -es'i almalı, isim de -s eki almalı — ikisi birlikte değişir.",
          "Yalnızca des tanımlığı yeterli değildir — nötr isimler Genitiv'de ayrıca -es eki de alır.",
        ],
        exceptions: [
          "Tek heceli nötr/eril isimler genellikle -es alır (des Hauses, des Mannes); daha uzun isimler ise çoğunlukla yalnızca -s alır (des Computers, des Lehrers).",
          "der Student ya da der Junge gibi zayıf (n-isim) eril isimler Genitiv'de de -s değil -en alır: des Studentens değil, des Studenten.",
        ],
        tips: [
          "Bir cümleyi 'von + datif' ile yeniden kurduğunuzda hâlâ doğal geliyorsa, orada Genitiv genellikle isteğe bağlıdır — ama yine de tanıyabilmeniz gerekir, çünkü yazıda sürekli karşınıza çıkacaktır.",
          "trotz, wegen, während ve statt'ı bir grup olarak öğrenin — en sık karşılaşacağınız dört Genitiv edatı bunlardır.",
        ],
      },
    },
  },
  "grammar/a1/praesens": {
    summary: "Almancanın şimdiki zamanı — düzenli fiil ekleri ve İngilizcedeki 'is doing' yapısını da nasıl karşıladığı.",
    objectives: [
      "Düzenli fiilleri Präsens'te çekme",
      "Präsens'i hem şimdiki zaman hem de yakın gelecek için kullanma",
      "-t ya da -d ile biten köklerde araya giren -e-'yi tanıma",
    ],
    explanationSimple: [
      "Präsens, Almancanın şimdiki zamanıdır — şu anda olup biteni, genel gerçekleri ve çoğu zaman yakın geleceği anlatmak için kullanılır.",
      "Düzenli fiiller, eylemi kimin yaptığına bağlı olarak köke öngörülebilir bir ek alır.",
    ],
    explanationDetailed: [
      "Düzenli bir fiili çekmek için mastardan -en'i çıkarıp kökü bulun, sonra özneye uygun eki ekleyin: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.",
      "Almancada ayrı bir sürerlilik (continuous) hali yoktur — ich spiele hem 'oynarım' hem de 'oynuyorum' anlamına gelebilir. Hangisinin kastedildiğini bağlam belirler.",
      "Präsens, özellikle bir zaman ifadesiyle birlikte, yakın gelecekten bahsetmek için de sıkça kullanılır: Ich fliege morgen nach Berlin (Yarın Berlin'e uçuyorum).",
    ],
    exampleMeanings: ["Futbol oynuyorum.", "Almanca öğreniyorsun.", "O bugün çalışıyor.", "Yarın Berlin'e gidiyoruz."],
    exerciseTexts: [
      {
        explanation: "du düzenli -st ekini alır: spiel + st = spielst.",
        grammarRule: "Präsens du eki: -st.",
        prompt: "'spielen' fiilinin 'du' için doğru Präsens biçimini yazın.",
      },
    ],
    quizTexts: [
      {
        explanation: "arbeiten'in kökü -t ile bittiği için er biçimi araya bir ünlü ister: arbeit değil, arbeitet.",
        grammarRule: "Kök -t ya da -d ile bittiğinde ekten önce bir -e- ekleyin.",
        prompt: "Hangi cümlede Präsens doğru kullanılmış?",
      },
      {
        explanation:
          "Doğru — bağlam ya da bir zaman ifadesi geleceği zaten açıkça belirttiğinde, Almanca genellikle ayrı bir gelecek zaman yerine Präsens kullanır.",
        grammarRule: "Bir zaman ifadesiyle birlikte yakın gelecekteki eylemler için Präsens kullanın.",
        prompt: "Präsens, özellikle morgen gibi bir zaman ifadesiyle, yakın gelecekten bahsetmek için de kullanılabilir.",
      },
      {
        explanation: "wir eki -en'dir, ve düzenli bir fiilde bu ek mastarla aynıdır: wohnen.",
        grammarRule: "Präsens wir eki: -en (mastarla aynı).",
        prompt: "'wohnen' fiilinin 'wir' için doğru Präsens biçimini yazın.",
      },
      {
        explanation: "ich eki -e'dir: kauf + e = kaufe.",
        grammarRule: "Präsens ich eki: -e.",
        prompt: "Cümleyi 'kaufen' fiilinin doğru Präsens biçimiyle tamamlayın.",
      },
    ],
    conclusion:
      "Präsens, fiil köküne eklenen altı öngörülebilir ekten oluşur — -e, -st, -t, -en, -t, -en — ve kök -t ya da -d ile bittiğinde araya bir -e- girer. Hem şimdiki zamanı hem de yakın geleceği kapsadığı için, geçmiş zamanlara geçmeden önce bu ekleri iyice öğrenmek büyük fark yaratır.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Kökü bulmak için mastardan -en'i çıkarın.",
          "Özneye uyan eki ekleyin: -e, -st, -t, -en, -t, -en.",
          "Kök -t ya da -d ile bitiyorsa ekten önce bir -e- ekleyin (arbeiten → du arbeitest).",
        ],
        notes: [
          "-e- eklemesine en çok du ve er/sie/es ekleri ihtiyaç duyar, çünkü -st ve -t, -t/-d ile biten bir kökten hemen sonra telaffuz edilmesi zor eklerdir.",
          "Çok yaygın birkaç fiil yalnızca du/er biçimlerinde kuralsızdır (fahren → du fährst, er fährt) — bunlar burada işlenen düzenli kalıbın parçası değildir.",
        ],
        mistakeNotes: [
          "-t ile biten kökler -st ekinden önce bir -e- ister, aksi halde kelime telaffuz edilemez hale gelir.",
          "Her özne kendi eşleşen ekini gerektirir — ich her zaman -e alır, asla er biçimindeki -t'yi almaz.",
        ],
        exceptions: [
          "fahren, sehen ve sprechen gibi kök değiştiren (güçlü) fiiller yalnızca du ve er/sie/es biçimlerinde ünlülerini değiştirir (du fährst, er fährt) — bu, burada işlenen düzenli eklerden ayrı bir kalıptır.",
          "sein ve haben tamamen kuralsızdır ve kendi biçimleriyle ezberlenmelidir: ich bin, du bist, er ist…",
        ],
        tips: [
          "Altı eki tek bir sabit set olarak öğrenin — otomatikleştiklerinde, her düzenli fiil aynı şekilde çekilir.",
          "Yeni bir fiilin kökü -t, -d ya da öffnen'deki gibi bir ünsüz kümesiyle (-ffn) bittiğinde, -st ve -t'den önce -e- eklemesini bekleyin.",
        ],
      },
    },
  },
  "grammar/a2/praeteritum": {
    summary: "Yazıda ve sein, haben gibi yaygın fiillerde kullanılan basit geçmiş zaman — Perfekt'ten nasıl ayrıldığı.",
    objectives: [
      "Düzenli (zayıf) fiilleri Präteritum'da çekme",
      "Präteritum'un Perfekt yerine ne zaman tercih edildiğini tanıma",
      "sein ve haben'in yaygın Präteritum biçimlerini doğru kullanma",
    ],
    explanationSimple: [
      "Präteritum, Almancanın diğer geçmiş zamanıdır — çoğunlukla yazıda, konuşmada ise sein, haben ve kip fiilleri için kullanılır.",
      "Düzenli fiiller köke -te ve ardından bir kişi eki ekler.",
    ],
    explanationDetailed: [
      "Perfekt, çoğu fiil için konuşma dilinde ağır bassa da, Präteritum yazılı Almancada olağan geçmiş zamandır — hikâyeler, haber metinleri ve resmi yazılar neredeyse her zaman onu kullanır.",
      "Düzenli (zayıf) fiiller Präteritum'u köke -te ekleyip ardından bir kişi eki ekleyerek oluşturur: ich -te, du -test, er -te, wir -ten, ihr -tet, sie -ten.",
      "Konuşmada bile, çok yaygın birkaç fiil neredeyse her zaman Perfekt yerine Präteritum'da kullanılır: war (idi), hatte (sahipti) ve konnte (yapabilirdi) ya da wollte (istiyordu) gibi kip fiilleri.",
    ],
    exampleMeanings: ["Ödevimi yaptım.", "Dün piyano çaldı.", "Yorgundu.", "Vaktimiz yoktu."],
    exerciseTexts: [
      {
        explanation: "sie (onlar) wir ile aynı eki, -ten'i alır: spiel + ten = spielten.",
        grammarRule: "Präteritum sie (çoğul) eki: -ten.",
        prompt: "'spielen' fiilinin 'sie' (onlar) için doğru Präteritum biçimini yazın.",
      },
    ],
    quizTexts: [
      {
        explanation: "arbeiten'in kökü -t ile bittiği için -te'den önce araya bir ünlü girer: arbeitete.",
        grammarRule: "Kök -t ya da -d ile bittiğinde -te'den önce bir -e- ekleyin.",
        prompt: "Hangi cümlede Präteritum doğru kullanılmış?",
      },
      {
        explanation: "Doğru — ich ve er/sie/es ikisi de yalnızca -te ekini alır; oysa Präsens'te bu iki ek farklıdır (-e ve -t).",
        grammarRule: "Präteritum ich ve er ekleri aynıdır: -te.",
        prompt: "Präteritum'da ich biçimi ile er/sie/es biçimi tam olarak aynı eki kullanır.",
      },
      {
        explanation: "haben, Präteritum'da kuralsızdır — wir biçimi düzenli bir habten değil, hatten'dir.",
        grammarRule: "haben'in Präteritum kökü kuralsızdır: hatt-.",
        prompt: "'haben' fiilinin 'wir' için Präteritum biçimini yazın.",
      },
      {
        explanation: "ich -te ekini alır: mach + te = machte.",
        grammarRule: "Präteritum ich eki: -te.",
        prompt: "Cümleyi 'machen' fiilinin doğru Präteritum biçimiyle tamamlayın.",
      },
    ],
    conclusion:
      "Präteritum, düzenli bir fiilin köküne -te ve bir kişi eki ekler; ich ile er/sie/es aynı biçimi paylaşır. Yazıda varsayılan geçmiş zamandır, ve sein, haben ile kip fiilleri için — Perfekt günlük konuşmaya genel olarak hâkim olsa da — konuşmada da doğal tercihtir.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Düzenli bir fiilin köküne -te'yi, ardından kişi ekini ekleyin: -te, -test, -te, -ten, -tet, -ten.",
          "Kök -t ya da -d ile bitiyorsa -te'den önce bir -e- ekleyin (arbeiten → er arbeitete).",
          "sein, haben ve kip fiilleri için konuşmada bile Präteritum'u tercih edin.",
        ],
        notes: [
          "Präsens'in aksine, Präteritum'da ich ve er/sie/es biçimleri aynıdır — ikisi de yalnızca -te alır.",
          "sein'in (war) ve haben'in (hatte) Präteritum biçimleri, sürekli kullanıldıkları için çoğu öğrencinin ezberlediği ilk kuralsız geçmiş biçimler arasındadır.",
        ],
        mistakeNotes: [
          "-t ile biten kökler -te'den önce -e- eklemesi ister, tıpkı Präsens'teki kural gibi.",
          "haben, Präteritum'da kuralsızdır — düzenli habte değil, hatte.",
        ],
        exceptions: [
          "Güçlü (kuralsız) fiiller -te eklemek yerine kök ünlülerini tamamen değiştirir: gehen → ging, sehen → sah — bu, burada işlenen düzenli eklerden farklı bir kalıptır.",
          "sein'in Präteritum biçimi (war) ve haben'inki (hatte) düzenli -te kalıbını hiç izlemez ve doğrudan ezberlenir.",
        ],
        tips: [
          "Bir hikâye anlatıyor ya da resmi bir şey yazıyorsanız, varsayılan olarak Präteritum'a yönelin — Almancanın doğal anlatı geçmiş zamanı budur.",
          "Günlük konuşmada çoğu fiil için genellikle Perfekt yeterlidir — war, hatte ve kip fiilleri hariç, bunlar konuşmada bile neredeyse her zaman Präteritum'da daha doğal durur.",
        ],
      },
    },
  },
  "grammar/b1/futur-i": {
    summary: "werden + mastar kullanarak gelecekten bahsetmek — ve Almanların bunun yerine ne zaman şimdiki zamanı tercih ettiği.",
    objectives: [
      "Futur I'i werden + mastarla kurma",
      "Almanların gelecek anlamı için ne zaman Futur I, ne zaman Präsens kullandığını tanıma",
      "werden'i tüm şahıslarda doğru çekme",
    ],
    explanationSimple: [
      "Futur I, werden'in çekimli bir biçimiyle ana fiilin mastarını birleştirerek gelecekten bahseder.",
      "Günlük Almancada gelecek için aslında Präsens daha sık kullanılır — Futur I ise tahminler, sözler ve vurgu için ayrılmıştır.",
    ],
    explanationDetailed: [
      "Yapı sabittir: özne + çekimli werden (ikinci konum) + cümlenin geri kalanı + mastar (son konum). Ich werde morgen arbeiten — 'Yarın çalışacağım.'",
      "werden kuralsızdır: ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden — bu altı biçim bir kuraldan türetilmek yerine ezberlenmelidir.",
      "Almanlar planlanmış gelecek olaylar için genellikle bir zaman ifadesiyle Präsens'i tercih eder (Ich fliege morgen) ve Futur I'i gelecekle ilgili tahminler, sözler ya da varsayımlar için saklar: Es wird morgen regnen (Yarın yağmur yağacak).",
    ],
    exampleMeanings: ["Yarın çalışacağım.", "Yakında yağmur yağacak.", "Sorunu çözeceğiz.", "Seni arayacak."],
    exerciseTexts: [
      {
        explanation: "ich, kuralsız werde biçimini alır.",
        grammarRule: "werden'in ich biçimi: werde.",
        prompt: "Cümleyi werden'in doğru biçimiyle tamamlayın.",
      },
    ],
    quizTexts: [
      {
        explanation: "Mastar arbeiten, morgen'den sonra en sona gider.",
        grammarRule: "Mastarı her zaman cümlenin en sonuna koyun.",
        prompt: "Hangi cümle Futur I'i doğru kurar?",
      },
      {
        explanation: "Doğru — yapının tamamı bu: çekimli werden artı sonda bir mastar.",
        grammarRule: "Futur I = werden (çekimli) + mastar.",
        prompt: "Futur I, werden'in çekimli bir biçimi ile ana fiilin mastarından oluşur.",
      },
      {
        explanation: "du için werden'in kuralsız biçimi wirst'tür.",
        grammarRule: "werden'in du biçimi: wirst.",
        prompt: "'du' için werden'in doğru biçimini yazın.",
      },
      {
        explanation: "er için werden'in kuralsız biçimi wird'dir.",
        grammarRule: "werden'in er biçimi: wird.",
        prompt: "'er' için werden'in doğru biçimini yazın.",
      },
      {
        explanation: "es, er ile aynı biçimi alır: wird.",
        grammarRule: "werden'in es biçimi: wird.",
        prompt: "Cümleyi werden'in doğru biçimiyle tamamlayın.",
      },
      {
        explanation: "lösen, cümlenin en sonunda çıplak bir mastar olarak kalır.",
        grammarRule: "Futur I'deki mastar her zaman çıplak (çekimsiz) biçimdedir.",
        prompt: "Hangi cümlede Futur I doğru kullanılmış?",
      },
      {
        explanation: "Doğru — ikisi de dilbilgisi açısından doğru olsa da, Ich fliege morgen, Ich werde morgen fliegen'den daha doğal durur.",
        grammarRule: "Futur I'i esas olarak tahminler, sözler ve varsayımlar için kullanın.",
        prompt: "Bir zaman ifadesi geleceği zaten açıkça belirttiğinde, Almanlar genellikle Futur I yerine Präsens'i tercih eder.",
      },
      {
        explanation: "wir, werden'i alır — mastarın kendisiyle aynı biçim.",
        grammarRule: "werden'in wir biçimi: werden.",
        prompt: "'wir' için werden'in doğru biçimini yazın.",
      },
      {
        explanation: "sie (o, kadın), er ile aynı biçimi alır: wird.",
        grammarRule: "werden'in sie (tekil) biçimi: wird.",
        prompt: "Cümleyi werden'in doğru biçimiyle tamamlayın.",
      },
      {
        explanation:
          "Ardından bir mastar gelmeden tek başına wird, 'oluyor/dönüşüyor' anlamına gelir — Er wird Arzt bir durum değişikliğini belirtir, gelecekle ilgili bir tahmin değil.",
        grammarRule: "Mastarsız werden, gelecek zaman belirteci değil 'olmak/dönüşmek' anlamına gelir.",
        prompt: "Hangi cümlede werden, gelecek zaman değil 'olmak/dönüşmek' anlamında kullanılmış?",
      },
    ],
    conclusion:
      "Futur I, werden'in çekimli bir biçimini cümlenin sonundaki bir mastarla birleştirir. Günlük konuşmada beklediğinizden daha az yaygındır — Almanlar planlanmış olaylar için genellikle Präsens'i tercih eder — ama gelecekle ilgili tahminler, sözler ve varsayımlar için doğal seçimdir.",
    details: {
      kind: "grammar",
      value: {
        rules: [
          "Futur I'i, werden'in çekimli bir biçimi ile ana fiilin mastarını birleştirerek kurun.",
          "Mastarı cümlenin en sonuna koyun.",
          "Futur I'i gelecekle ilgili tahminler, sözler ve varsayımlar için kullanın — rutin planlar için değil.",
        ],
        notes: [
          "Açık bir zaman ifadesi olan günlük planlar için Präsens genellikle daha doğaldır: ikisi de doğru olsa da, Ich fliege morgen, Ich werde morgen fliegen'den daha deyimsel durur.",
          "werden tek başına (ardından mastar gelmeden) 'olmak/dönüşmek' anlamına gelir — Er wird Arzt (Doktor oluyor) — bu yüzden hangi anlamın kastedildiğini bağlam belirler.",
        ],
        mistakeNotes: [
          "Mastar, morgen gibi diğer her bilgiden sonra, cümlenin kesinlikle en sonuna gitmelidir.",
          "Futur I çıplak mastar kullanır — önünde zu olmaz.",
        ],
        exceptions: [
          "werden'in kendisi, Almancanın gerçekten kuralsız birkaç fiilinden biridir — Präsens biçimleri (wirst, wird) hiçbir düzenli kalıbı izlemez ve doğrudan ezberlenmelidir.",
          "Gelecek anlamı bağlamdan ya da bir zaman ifadesinden zaten açıkça anlaşılıyorsa, Futur I çoğu zaman tamamen atlanıp daha basit olan Präsens tercih edilir.",
        ],
        tips: [
          "werden'in altı biçimini kendi başına küçük bir set olarak ezberleyin — hem 'olmak/dönüşmek' anlamında hem de Futur I içinde sürekli karşınıza çıkarlar.",
          "Yalnızca bir zaman ifadesiyle geleceği belirtiyorsanız, varsayılan olarak Präsens kullanın — Futur I'i gerçek tahminler ya da sözler için saklayın.",
        ],
      },
    },
  },
};
