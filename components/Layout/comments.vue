<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { register } from 'swiper/element/bundle';
register();

const value1 = ref(5);
const swiperEl = ref<HTMLElement | null>(null);

const comments = ref([
  {
    name: "Sıla Özgan",
    comment: "salonun enerjisi ve işlemlerin profesyonelliği muhteşem işlerini severek yapıyorlar, şeyma hanım özellikle cilt bakımı konusunda çok başarılı tavsiye ederimm sadece cildimi değil mentalimi de toparlayor resmen bir terapi🩷 ipek kiprik konusunda da büşra hanımı kesinlikle tavsiye ediyorum onlarca kez yaptırdım ancak en uzun süreli ve güzel sonucu buradan aldım, çok profesyonel. çok tatlılar en iyi yerlere gelmeleri dileğiyle 🪬🩷🩷🩷",
    rate: 5,
    image: "silaOzgan.png",
  },
  {
    name: "Melike BAKIRCI",
    comment: "Ben burayı İLKLERİN YERİ olarak adlandırmak istiyorum.Gerçekten daha önce yaptırmadığınız bir işlem var ise ve tereddüt yaşıyorsanız gelmelisiniz kendileri sorularınızı kibar,ayrıntılı,özenli ve samimi bir şekilde cevaplıyorlar .İlk Protez tırnağımı,kirpik lifting’imi,ipek kirpiğimi buradan yaptırmıştım kalitesiyle ve titizliğiyle gerçekten işinin hakkını veren bir yer.Daha bir çok alanda hizmet veren bu merkezi deneyimlemek benim için büyük şans .",
    rate: 5,
    image: "melikeBakirci.png"
  },
  {
    name: "Şehriban Taşdelen",
    comment: "İşini özenle yapan güzel kardeşlere kirpik lifting ve cilt bakımı yaptırdım. İlgi, alâka harika. İşlemler çok başarılı. Memnun kalacağınıza emin olabilirsiniz. 😍",
    rate: 5,
    image: null
  },
  {
    name: "Gamze ç.",
    comment: "İki genç kadın girişimci ve iki kız kardeş her anlamda mükemmeller. Bir kere sizi evinizde gibi hissettiriyorlar. Ben arkadaşımın tavsiyesi üzerine gittim tırnak ve kirpik lifting yaptırdım. Saatlerce bıkmadan titizlikle uğraştılar benimle. Onlara çok teşekkür ediyorum ve bol kazançlar dilerim kızlar 🌸🌸",
    rate: 5,
    image: null
  },
  
  {
    name: "Dilara Blgc",
    comment: "Dört günlük uygulamalı eğitim sürecimde Şeyma Hoca ile çalışmak benim için büyük bir şanstı. Gerek bilgisi gerekse yaklaşımıyla bana ilham verdi. Eğitim süreci boyunca her detayı titizlikle anlattı ve birebir uygulama imkanı sundu. Kendimi geliştirmek için en doğru yerde olduğumu hissettim. Gönül rahatlığıyla herkese tavsiye ederim.🩵",
    rate: 5,
    image: null
  },
  {
    name: "Zehra Nur GÖLCÜK",
    comment: "Gelin olmak için gidilecek tam teçhizatlı tek mekan diyebilirim. Aylar öncesinden cilt bakımı ve kaş alımıyla beni müthiş hazırladı. Sonuna kadar ev konforunda hissettiren birisi , sizi gerçekten en iyi anlayacak kişi. Yok diye bir durum söz konusu değil sırf size özel alışveriş bile yapabilir ve mutsuz çıkmanız imkansız 🤍 ayrıca ciddi bir sosyal medya erişimi ve kitlesi var keşfete düşebilirsiniz 😂",
    rate: 5,
    image: null
  },
  {
    name: "Vera Derelioğlu",
    comment: "19unda düğünüm vardı Şeyma Hanım harika bir makyaj yaptı, BAYILDIM. Kendisi çok samimi,sıcak bir insan o günün stresini aldı. İşini çok severek yaptığı belli oluyor hayatımda yaptırdığım en güzel makyajdı sürekli kendime bakmak istedim. Eline emeğine sağlık 🩷",
    rate: 5,
    image: null
  },
  {
    name: "Özlem Yılmaz",
    comment: "Özellikle Büşra Hanıma ve Şeyma Hanıma çok teşekkür ederim. Benim protez tırnak ön yargımı kırdılar. İşlerini çok özenli ve güzel yapan bir ekip. Her şey için teşekkür ederim🙏💜",
    rate: 5,
    image: null
  },
  {
    name: "Eda nur Özer",
    comment: "İpek kirpik ve altın kaş oranı için gittim, mükkemel ötesi ilk defa memnun kaldım bir yerden , çok ince detaylı bir yaklaşımı rahat, iki sempatik ve ilgili kızlar , her şey için teşekkür ederim 🥰🥰",
    rate: 5,
    image: null
  },
  {
    name: "Hatice Kübra YANGIN",
    comment: "Güler yüz mükemmel hizmetin adresi..\nTamamen güvenerek geldim herşeyi Şeyma hanıma bıraktım. Profesyonel bir hizmet aldım. Olumsuz hiç bir şey yaşamadım. Makyajımda asla bir bozulma olmadı. Kendisine en özel günümde bana bu rahatlığı güveni sağladığı için çok teşekkür ederim.",
    rate: 5,
    image: null
  },
  {
    name: "inci göçmener",
    comment: "Enerjisi inanılmaz yüksek bir yer gerçekten bayıldım. Aynı zamanda hijyene çok dikkat ediyorlar. Özellikle kaş alımı ve lazer işlemi için güvenilir ve memnun kalacağım bir yer arıyordum. Sonunda doğru yeri bulduğumu düşünüyorum 💖 Kaşlarımı bu kadar iyi alan bir yer daha önce hiç olmamıştı. Yorumlara bakarak gittiğim bir yer olduğu için bende yorum yapmak istedim. Şeyma Hanım'a çok teşekkür ederim 💖",
    rate: 5,
    image: null
  },
  {
    name: "Esra Kaya",
    comment: "Kaşlarımı ilk defa burada aldırdım ve ilk defa alacaksanız kesinlikle en doğru yer. Mezuniyetime burada hazırlandım Normalde dümdüz model tutmayan saçım vardır. Çok profesyonelce kesinlikle tutar dediler ve öyle de . Makyaj işin uzmanları desem yeridir. Herkes bayıldı. 40 dereceye rağmen akma vs olmadı. İyi ki burayı tercih etmişim.",
    rate: 5,
    image: null
  },
  {
    name: "BEYZA BEYOĞLU",
    comment: "Gördüğüm en tatlı abla-kardeş diyebilirim. İşini severek yapan ve ince işçilikle mükemmel işler çıkaran o ikili.. Kendi kirpiklerim asla zarar görmedi. Hem kaliteli malzemeler hem de harika bir işçilikle muhteşem kirpiklere sahip oldum.",
    rate: 5,
    image: null
  },
  {
    name: "Nefise İpek",
    comment: "Saçımı ve makyajımı yaptırmak için gittiğim ve çok memnun olarak ayrıldığım güzel mekan. Orada ki herkes o kadar ilgili sıcak kanlı ve yetenekli ki mutsuz ayrılmak imkansız. Bundan sonra sık sık uğrayacağım bir mekan. İşini severek yapan kişilerle olmak mükemmel bir duygu.",
    rate: 5,
    image: null
  },
  {
    name: "büşra tekin",
    comment: "Şeyma hocama saç ve makyaj için gittim .. bütün bir gece düğünde oynamama terlememe rağmen ne bir akma ne de terleme yaptı . Çok çok memnun kaldım düğün için gelinlerin tek adresiiii şeyma hocammm",
    rate: 5,
    image: null
  },
  {
    name: "Beyza Erdoğan",
    comment: "Şeyma Hanımın içtenliğine ve samimiyetine gözünüz kapalı güvenebileceğiniz bir yer. Yapılan işlemi asla para için yapmayan müşteri memnuniyetine önem veren bir merkez, her işlemle detaylı ilgilenerek en güzelini ortaya koyan ellere kendinizi teslim edebilirsiniz ve asla pişman olmazsınız.",
    rate: 5,
    image: "beyzaErdogan.png"
  },
  {
    name: "Çağrı Yalçınkaya",
    comment: "𝐆𝐨𝐝 𝐨𝐟 𝐖𝐚𝐫 hikayesinin ana karakteri 𝐊𝐫𝐚𝐭𝐨𝐬 için cosplay makyajı yapmalarını istemiştim. Tereddütsüz kabul ettiler. Planladığımız saatte çok güzel karşılandım. Karakterdeki ince detaylara kadar her şey kusursuz şekilde yapıldı. Şeyma hanıma ve diğer arkadaşlara çok teşekkür ederim 🙋‍♂️",
    rate: 5,
    image: "cagriYalcinkaya.png"
  },
  {
    name: "Selin Kaya",
    comment: "Güzellik ve özel günler için Eskişehir’de tek adres. Profesyonel makyaj, saç, protez tırnak, cilt bakımı ve altın oran kaş alımı işlemlerinden yararlandım. Hepsinden ayrı ayrı çok memnun kaldım. En güzel günümde bu profesyonel ve güler yüzlü bir ekiple olduğum için çok mutluyum.",
    rate: 5,
    image: null
  },
  {
    name: "Gamze Yangin",
    comment: "İpek kirpik cilt bakimi ve protez tirnak yaptırdım.ozel ilgileri muhabbetleri guleryuzleri ve işlemleri çok başarılı. Her hafta bir bahane ile işleme geliyorum cok da anlayışlilar. Teşekkürler seyma beauty:)",
    rate: 5,
    image: null
  },
  {
    name: "tuana karaca",
    comment: "Kalıcı oje çıkartma ve altın oran kaş alımı yaptırdım ikisinde de çok temiz ve profesyonel bir çalışma sergilediler gerçekten çok memnun kaldım. Kaşlarımı ilk defa aldırmıştım o yüzden endişeliydim ancak yapılan her aşamada isteyip istemediğimi sorarak ve anlatarak ilerlediler sonuçtan da çok memnun kaldım. Profesyonelliklerinin yanında hoşsohbet, samimi ve dürüst iki tatlı kız kardeş, burayı bulduğuma ve sizlerle tanıştığıma çok memnunum. Ellerinize sağlık <3",
    rate: 5,
    image: null
  },
  {
    name: "Naciye Dübek",
    comment: "Çok güler yüzlü çalışanları var. Çok ilgililer. Lazer epilasyon için gittim sabırla bütün sorularımı Şeyma hanım çok iyi bir şekilde yanıtladı, bütün süreçle ilgili beni bilgilendirdi. Hızlı özensiz bir çalışma içinde olmak yerine sabırla danışanlarini mutlu etmeyi amaçlamalari çok hoşuma gitti. Gönül rahatlığıyla tavsiye ederim. Ayrıca çekilişlerine katılmanızı da tavsiye ederim. Çekilişle yüz bakımı kazandım ve çok memnun kaldım.",
    rate: 5,
    image: null
  },
  {
    name: "Büşra Doğanoğlu",
    comment: "Seyma hanimla instagram sayesinde tanistim.sehir disindan nişan sac ve makyaji icin gelmistim.Acikcasi gelmeden once tedirginligim hep vardi.Fakat kendisinin samimiyeti ve cana yakinligi sayesinde sorunsuz ve vip bir hizmet aldim.makyajim çevrem tarafindan çok begenildi.kesinlikle işinin uzmanı diyebilirim.Gönul rahatligiyla tavsiye ediyorum.. :)",
    rate: 5,
    image: null
  },
  {
    name: "Şule Söyleyici",
    comment: "Nişanım için şeyma hanım beni özenle hazırladı.Güler yüzü, enerjisi, yapıcı tavrı için çok teşekkür ediyorum.Saçım ve makyajım gün boyunca bozulmadı.",
    rate: 5,
    image: null
  },
  {
    name: "Ceren Su",
    comment: "Tırnaklarımı bebeksileştirdiler ve kesinlikle kırılmıyor cilt bakımı ve iğnesiz meza terapi sayesinde yüz hatlarım ortaya çıktı en çok takıntım olan gıdığım gitti güler yüzlü ve gercekten çok samimiler gitmeyen pişman olur diyim 💕☺️🫀",
    rate: 5,
    image: null
  },
  {
    name: "Büşra K.",
    comment: "Cilt bakımı için kendilerini tercih ettim, çok güzel ilgilendiler,çok sıcak bir ortamdı. 1 buçuk saat sürdü inanılmaz hafifledim.Genç arkadaşlarımızın bu kadar yetenekli olup kendi yerlerini açmaları beni çok mutlu etti.Elinize emeğinize sağlık, yolunuz, yönünüz,Gönlünüz açık olsun dilerim 💖 Kazancınız bol olsun 😇😘",
    rate: 5,
    image: null
  },
  {
    name: "Eminenur Demirkol",
    comment: "Cilt bakımından aşırrı memnun olduğum bir işletme cildimdeki lekeler ve sivilceler gözle görülür derecede yok oldu Şeyma hanım çok ilgili ve işinde profesyonel çok memnunumm✨️✨️",
    rate: 5,
    image: null
  },
  {
    name: "Sultan Kamalı",
    comment: "Şeyma hocanın güzel ellerinden yaptırdığım makyajım çok beğendim mükemmel ve profesyoneldi büşra hocanın yaptığı ipek kirpikler de bayıldım ayriyeten hizmetleri için çok teşekkür ederim💗🥰",
    rate: 5,
    image: null
  },
  {
    name: "Seval Öngel",
    comment: "sŞeyma hanım mükemmel pozitif bir insan. Enerjisi çok güzel. Yaptığı işi sevgiyle mükemmel yapıyor. Çok memnunum. Herkese tavsiye ederim. Zaten bir kere gitseniz anlarsınız.... ❤️",
    rate: 5,
    image: null
  },
  {
    name: "Ummahan Tutar",
    comment: "Hem doğal hem bakımlı olmak isterseniz tek adres diyebilirim.Altın oran kaş alımı ve kirpik lifting yaptırdım Büşra Hanımın ve Şeyma Hanımın ilgisi işlerine verdikleri öneme bayıldım. İnsanın işini severek yapması o sıcak davranışları ile çok memnun kaldım. Herkese tavsiye ederim💕",
    rate: 5,
    image: null
  },
  {
    name: "Elif Böcü",
    comment: "Merkeze ilk adım attığınız andan itibaren kendinizi özel hissediyorsunuz. Ekibin profesyonelliği, güler yüzlülüğü ve samimiyeti insanı hemen rahatlatıyor. Hem güzellik hem makyaj konusunda en yeni teknikleri uygulamalarıyla görmek harika. Kendine özen gösteren, kaliteli hizmet almak isteyen herkese kesinlikle tavsiye ederim. 🙏❤️",
    rate: 5,
    image: null,
  },
  {
    name: "Melike Böcü",
    comment: "Hızlı ve profesyonel hizmet veren harika bir yer. Manikür ve jel tırnak işleminden çok memnun kaldım 3 hafta oldu halen ilk günkü sağlamlığıyla duruyor, Bundan sonraki en çok uğrak yerim burası olacak, sıradaki işlemlerim kaş ve cilt bakımı. Emzirme döneminden sonra lazer epilasyona da başlamayı hedefliyorum.",
    rate: 5,
    image: "melikeBocu.png"
  },
  {
    name: "Sibel Karaman",
    comment: "Büşra hanım a çok teşekkür ederim cilt bakımı yaptırdım çok memnun kaldım iyi eğitim almış işinde çok başarılı",
    rate: 5,
    image: null
  },
  {
    name: "Dilek Öztürk",
    comment: "Altın oran kas alımı yaptırdım.Güler yüzlü samimi içten davranışlarından çok memnun kaldım .işlerini iyi yapan iki güzel insanlar.tavsiye ederim.",
    rate: 5,
    image: null
  },
  {
    name: "Senem Tiryakii",
    comment: "Valla en iyisinin iyisi dedikleri yer Şeyma Kaya Beauty& Makeup Studıo ellerinize emeklerinize sağlık bütün işlemleri özen içinde yapılıyor.",
    rate: 5,
    image: null
  },
  {
    name: "Arzu Yılmaz",
    comment: "İki kız kardeşin işlettiği çok tatlı bir işletme. Kaş şekillendirme için gittim ve çok memnun ayrıldım 💯",
    rate: 5,
    image: null
  },
  {
    name: "Seda Gençer",
    comment: "Dış çekim için Şeyma hanımı tercih etmiştim. İyi ki etmişim ömür boyu kalacak olan fotoğraflarımda harika bir makyaj var🫶🏻 isteklerime göre profesyonel bir şekilde yönlendirdi ve çok güzel bir makyaj yaptı. İlgisi güler yüzü mükemmel bir insan. Kesinlikle tavsiye ederim. Bu konuda titiz olması beni çok rahatlattı, Eskişehir’de tavsiye edebileceğim ilk yer.",
    rate: 5,
    image: "sedaGencer.png"
  },
  {
    name: "Melike Sağlam",
    comment: "Kına ,dış çekim ve düğünümde hiç tereddüt etmeden ve her gün salondan mutlu ayrıldığım, 3 gün boyunca saçımı, makyajımı özenle ve bir okadarda harika yaptı. 3 gün de gün boyunca hiçbir şekilde makyajımda akma ve yüzümde makyajın ağırlık hissiyatını yaşamadım çok memnun kaldım her özel günümde tercih edeceğim kuaför",
    rate: 5,
    image: "melikeSaglam.png"
  },
  {
    name: "Nehir Çakıroğlu",
    comment: "Çok Güler yüzler ve çok tatlılarIşlemleri çok profesyonel yapıyorlar ve hijyenikGerçekten 5 yıldız değil de 10 yıldız olsa 10 yıldız veririm",
    rate: 5,
    image: "nehirCakiroglu.png"
  },
  {
    name: "Semanur Erbay",
    comment: "Mükemmmeel bi işletme ilgi alaka güler yüz herşeyiyle müşteriyi memnun etmeye yönelik çalışıyorlar Şeyma hanıma Büşra hanıma ayrı ayrı teşekkür ederim herkese önerimdir 🤍",
    rate: 5,
    image: null
  },
  {
    name: "Gamze Konuşkan",
    comment: "Kına ve düğünüm için saç-makyaj yaptırdığım ve ondan sonra sürekli gitmeye başladığım çoooook güzel bir güzellik salonu. Şeyma ve Büşra çok tatlı ve güler yüzlüler umarım her şey gönüllerince olur sonuna kadar tavsiye ediyorum gönül rahatlığıyla işlem yaptırabilirsiniz 😍😍😍🥰🥰🩷🩷",
    rate: 5,
    image: "gamzeKonuskan.png"
  },
  {
    name: "Ceyda Geze",
    comment: "5 yıldızdan daha fazlası olsa onu verirdim çok daha fazlasını hakediyor cünkü cilt bakımı için aşırı hassas ciltli oldugum için çok tereddüt edip cilt bakımına sürekli gidemiyordum şeyma hanım o kadar nazik ve hassas davranıyor ki kendinizi prenses gibi hissederek bakımınızı yaptırıyorsunuz 🥰 her işlemi ayrı özenle düşünerek yapıyor saç masajından kaş kirpik serumuna kadar cildinizin neye ihtiyacı varsa yeniliyor sıcacık bir ortamda kahve ve bakımlarınızı yaptırmak icin seyma hanıma gönül rahatlığıyla randevunuzu oluşturabilirsiniz çok teşekkürler",
    rate: 5,
    image: "ceydaGeze.png"
  },
  {
    name: "Ayşegül Sarman",
    comment: "Şeyma hanım İşinde oldukça başarılı mesleğini severek yapan genç dinamik bir kadın . Yaptığı makyaj gerçekten çok harika siz ne istiyorsanız nasıl istiyorsanız ona uygun şeyler yapıyor, iletişimi o kadar iyi ki sanki en yakın arkadaşınızmış gibi. Geleceği parlak önü açık olsun. . Gidin gidin durun arkadaşlar gönül rahatlığıyla 🥰",
    rate: 5,
    image: null
  },
  {
    name: "Rümeysa Sarı",
    comment: "Şeyma hanım( Şeyma Make up )çok tatlı müşterilerine çok nazik ve ilgiyle yaklaşan , yaptığı işlemlerin hepisinde ayrı yetenekli bi işletme. Ben hatanın en az olması gerektiği bi gün yani düğünümde onu tercih ettiğim için çok şanslıyım bence her kadın bu konuda şanslı olmayı hakediyo bunun için gerçekçi bi yorumu sizlerin de görmesini istedim ✨💖",
    rate: 5,
    image: null
  },
  {
    name: "Ayşe Akar",
    comment: "Kendinizi özel hissedeceğiniz ilgili ve nazik bir işletme. Profesyonel cilt bakımı, kalıcı makyaj, kaş kirpik laminasyon vs işlemleri için işini aşkla yapan Şeyma ve Büşra hanımla mutlaka tanışmalısınız.",
    rate: 5,
    image: "ayseAkar.png"
  },
  {
    name: "Emel Böcü",
    comment: "Merhabalar Şeyma hanım; Sizi çok özel ve güzel hissettiren bir yer. Sadece özel günlerinizde değil, her zaman gidebileceğiniz özel bir yer. Şeyma hanım ve Büşra hanım özellikle işinin ehli bayanlar.Hijyen ve temizlik konusunda da ayrıca tebrik ederim çok temiz ve titiz bir işletme herkese tavsiye ederim. Sadece işlem yaptırmak için değil kendinizi kötü hissettiğinizde bir kahve ve çay içmeye de gidebileceğiniz nezih bir ortam.Pozitif enerjlieri ile sizi çok çok özel hissettiren bir yer. On yıldız olsa on verirdim bence bu işletmeye beş yıldız az.",
    rate: 5,
    image: "emelBocu.png"
  },
  {
    name: "ZEYNEP DEMİREL",
    comment: "Şeyma Hanımı dış çekim makyajım ve saçım için tercih ettim.Güleryüzü,ilgisi, alakası ve harika işçiliğiyle peri kızı gibi yaptı beni.Çok memnun kaldım çok sevdim kendisini eğer kalite ve memnuniyet arıyorsanız kesinlikle tercih edeceğiniz yer burası olmalı.",
    rate: 5,
    image: null
  },
  {
    name: "Dilay Aliağaoğlu",
    comment: "Nişan çekimim için profesyonel makyaj-saç hizmeti almıştım çook memnun kaldım. Ayrıcaa çok tatlı ve ilgili🥹🤍 Gönül rahatlığıyla tercih edebilirsiniz.",
    rate: 5,
    image: null
  },
  {
    name: "Özlem Köse",
    comment: "Şeyma Hanımın ellerindeki o cilt bakımım miss Hem güzelleşiyorsun hem de günlük terapini alıyorsun :) guleryuzlu ve sıcakkanlı işinde profesyonel Şeyma Hanımla Sabah güne iyi başlamak için en uygun salon burası.",
    rate: 5,
    image: null
  },
  {
    name: "Kubra Bulut",
    comment: "Bugün kaş alımı için gittim o kadar güzel ilgilenildi ve her adımda fikrim soruldu çoook memnun kaldım içtenlikle arkadaşlarıma da önereceğim 🥰",
    rate: 5,
    image: null
  },
  {
    name: "Selin Yuruk",
    comment: "Eskişehirin en kaliteli ve profesyonel uzmanları, ilk defa ipek kirpik yaptırdım ve hiç pişman değilim ailecek geliyoruz artık ! Şeyma hanımın makyajları da AYRI MUHTEŞEM çok teşekkür ederiz !!",
    rate: 5,
    image: null
  },
  {
    name: "isa duyar",
    comment: "İşlerinde oldukça profesyonel ve gayet iyi biri sanki sizin probleminizi kendi problemiymiş gibi düzeltmeye çalışıyor",
    rate: 5,
    image: "isaDuyar.png"
  },
  {
    name: "serra aktaş",
    comment: "Nişanım için saç ve makyaj yaptırdım ve çok memnun kaldım 🥰 Şeyma hanım makyajda her detayını sorarak ilerledi ve bu beni daha da rahatlattı mutlu etti çok pozitif ve müşterilere gerçekten çok naziktiler kendisi gibi işleri de mükemmel içiniz rahat bir şekilde tercih edebilirsiniz 🤗🤍",
    rate: 5,
    image: "serraAktas.png"
  },
  {
    name: "Didem Tunçbilek Barlas",
    comment: "Bir süredir Eskişehir de altın oran kas alımı yapan bir yer arıyordum sonunda buldumm. Güler yüzlü ve pozitif olması bir yana işinde de çok çok iyi Şeyma hanımcım. İyi ki tanıştık iyi kiii ☺️ kesinlikle tavsiye ederimm sıcacık bir ortam işlerinde profesyonel bir ekip ❤️",
    rate: 5,
    image: "didemTuncbilekBarlas.png"
  },
  {
    name: "Büşra Demirçakmak",
    comment: "Güler yüzlü kardeşler ❤️ en mutlu günümde makyajımı saçımı en güzeliyle yaptınız çok teşekkür ederim 🌸 asla çıkmayan makyajı bulmuş olabilirsiniz bu arada 🙃 en özel günleriniz için kuşkusuz düşünebilceğiniz bir stüdyo, inşallah düğünümde de görüşürüz 😘",
    rate: 5,
    image: null
  },
  {
    name: "Sibel Altinkaya",
    comment: "Şeyma hanıma yaptığı makyaj için teşekkür ediyorum, çok memnun kaldım, nasıl istersen ve senin yüzüne yakışacak şekilde yönlendirme yapıyor, tatlı dilli ve güler yüzlü olmasından da ayrıca memnun kaldım. Eskişehirin en iyisi diyebilirim",
    rate: 5,
    image: null
  },
  {
    name: "Esta Yavuz",
    comment: "Şeyma Hanımm, çok naif çok zarif ve işinde en detaycı 💫 Gelin makyajımı yapmıştık kendisiyle ve çoook memnun kalmıştım ♥️ sonrasında ise ailemizin makeup artisti oldu 🦋 yolu bahtı açık olsun her şeyin ennn iyisini enn güzelini hak ediyor",
    rate: 5,
    image: null
  },
  {
    name: "Hazal y",
    comment: "Hayallerimin çok ötesinde bir saç\nVe makyaj oldu. Çok teşekkür ediyorum 🙏Harika keyifli bir gün geçirdik. Düğünüme birlikte hazırlandık ve bu mutlu günümde böyle keyifle hazırlandığım için çok mutlu oldum.",
    rate: 5,
    image: null
  },
  {
    name: "Ilknur Karadayi",
    comment: "Gerek güler yüzüyle gerek yaptığı işlemlerle işini titiz hakkıyla yapan bir minnoş🥰 nişanımda kendimi ona emanet ettim ve çok mutluydum özellikle makyaj konusunda bana makyajı sevdirdi tertemiz cildime uygun bir makyajdı kendinizi ona emanet edin teşekkürler şeyma kaya🤍🙏",
    rate: 5,
    image: null
  },
  {
    name: "Başak Tutal",
    comment: "Kirpik lifting için gittim iyi ki gitmişim çok beğendim ve ayrıca çok ilgili ve sıcakkanlılar gitmenizi tavsiye ederim",
    rate: 5,
    image: null
  },
  {
    name: "Fatma Erdağ",
    comment: "Şeyma hanim isinin ehli güler yüzlülüğü birebir ilgilenisi sakin sakin sizi dinleyisi sizin fikirlerinizi goz onunde bulundurarak istege yonelik super makyaj cikartan bir isim♥️ ozel gunlerinizi hic riske atmayin ve arayisa girmeyin yorumuma guvenebilirsiniz en mutlu sekilde ayrilirsiniz oradan. Ayrica cokta guzel bir eğitmen♥️",
    rate: 5,
    image: null
  },
  {
    name: "seda uzun",
    comment: "Cilt bakımı için gittim çok memnun kaldım hem güler yüzlü hem malzeme kalitesi olsun çok iyiydi. Herseyden önemlisi gerçekten sonuç odaklı olması kendinizi bebek gibi hissetmek istiyorsanız adresiniz belli 🥰🥰",
    rate: 5,
    image: null
  },
  {
    name: "Azime Kuzu",
    comment: "Çok güleryüzlü çalışanları var çok ilgililer ipek kirpik yaptırdım ve çok memnun kaldım✨",
    rate: 5,
    image: null
  },
  {
    name: "Merve Eyigun",
    comment: "Gelin makyajı yaptırmıştım şeyma hanıma orda tanıştık profesyonelliği ilgisi güler yüzü o kadar içten ki ilgilenmesi o gün benim için en mutlu günümdü onunla hazirlanmak beni çok şanslı hissettirdi\n\nsaçımı makyajımı özenle yapmıştı her detayı özenle ilgilendi çok teşekkür ediyorum kendisine yeni yerinde bol bereketli kazançlar olsun 🙏💘🧿🦋💦💖💧",
    rate: 5,
    image: null
  },
  {
    name: "Eylül Maden",
    comment: "İpek kirpik yaptırdım gerçekten çok güzel oldu özellikle büşra hanımın ilgiside çok güzeldi teşekkürler",
    rate: 5,
    image: null
  },
  {
    name: "Sudenaz Gezen",
    comment: "Müşteri memnuniyeti ve kalite diyince direkt şeeyma kaya diyorum başka bir şey demiyorum 😍😍",
    rate: 5,
    image: "sudenazGezen.png"
  },
  {
    name: "Deniz Sibel Güney",
    comment: "Çok memnun kaldım işinde profesyonel ve samimi yaklaşımlarıyla Eskişehir’de 1 numara güzellik uzmanlık ve kalite tek geçerim başka bir yere gitme gereği duymuyorum tavsiye ederim ⭐️ ⭐️⭐️⭐️⭐️",
    rate: 5,
    image: null
  },
  {
    name: "Begum Yildirim",
    comment: "Aldığım en iyi hizmet ve çok kaliteli markaları kullandıkları için sorunsuz bir hizmet almaktasınız",
    rate: 5,
    image: null
  },
  {
    name: "Arzu Yılmaz",
    comment: "Gerek güler yüzlülüğü olsun gerek kişisel olarak verdiği hizmet olsun tam anlamıyla çok Nezih çok güzel çok kaliteli bir işletme. Birçok kez gittim ve her gittiğimde de ayrı bir memnuniyetle geri döndüm. Kesinlikle gidilesi görülesi bir işletme. Verdiğiniz hizmetten ve kaliteden dolayı teşekkür ederim.♥️",
    rate: 5,
    image: "arzuYilmaz.png"
  },
  {
    name: "Eddy",
    comment: "favori merkezim. ilgileri içtenlikleri bir yana hizmet kalitesi ve hijyen koşulları harika. evinizdeymiş gibi hissedeceğiniz bir yer arıyorsanız tereddüt etmeden tercih edebilirsiniz ♥️",
    rate: 5,
    image: "eddy.png"
  },
  {
    name: "Z",
    comment: "Çok memnun kaldım, herkese tavsiye ederim. Hijyenik ve insanı rahat ettiren bir atmosferde güler yüzlü uzmanlara kendinizi teslim edin, sonucu harika olacağından şüpheniz olmasın.",
    rate: 5,
    image: null
  },
  {
    name: "Gulsen Ozcan",
    comment: "Çok tatlısınız, o kadar güzel ilgilendirir ki. Sonsuz teşekkürler",
    rate: 5,
    image: null
  },
  {
    name: "beros the last lovebender",
    comment: "mezuniyet için makyaj ve saçımı yaptırdım hem ben hem arkadaşlarım çok beğendik çok memnun kaldım ve herkese önerdim teşekkürlerrr🙏❤️",
    rate: 5,
    image: "berosTheLastLovebender.png"
  },
  {
    name: "Sema Atıcı",
    comment: "Güler yüzlü, samimi, işinde profesyonel birini arıyorsanız kesinlikle doğru adrestesiniz ! 🤩 Yaptırdığım işlemlerden çok memnun kaldımm teşekkür ederim Şeyma hanımcııım 🥰",
    rate: 5,
    image: "semaAtici.png"
  },
  {
    name: "Hatice Baykal",
    comment: "Bayillldiiiiiimmm çok güler yüzlü işinin en iyisini yapan insanlar çok memnun kaldım Şeyma hanımın enerjisi muhteşem ve çok yetenekli",
    rate: 5,
    image: null
  },
  {
    name: "Ayşe Betül CEYLAN",
    comment: "Nişanım için saçımı ve makyajımı yaptırmıştım çok beğendim💗💗 işinde çok profesyonel bir hanımefendi 💖💖",
    rate: 5,
    image: null
  },
  {
    name: "Melis BÖCÜ",
    comment: "Karşılama ve işlem yapılırkenki ilgi çok iyiydi. Beklentinizi fazlasıyla karşılayacak bir yer. Mutlaka tavsiye ediyorum.",
    rate: 5,
    image: "melisBocu.png"
  },
  {
    name: "Mehmet Türkmen",
    comment: "Şahane hizmet güler yüz harika bir işçilik gerçekten tüm güzel yorumları hakediyorsunuz teşekkürler Şeyma hanım",
    rate: 5,
    image: null
  },
  {
    name: "KAYA",
    comment: "İlgili sevecen titiz işçilikleri ile dört dörtlük bence...",
    rate: 5,
    image: "kaya.png"
  },
  {
    name: "Ceylan Bilgin",
    comment: "Altın oran kaş tasarımı için gittim ve çok memmun kaldım,hepinize tavsiye ederimm♡",
    rate: 5,
    image: null
  },
  {
    name: "Ebru Sönmez",
    comment: "Gayet ilgili güleryüzlü bir işletme. Yaptırdığım işlemden çok memnun kaldım. Teşekkür ederim tavsiye ederim",
    rate: 5,
    image: null
  },
  {
    name: "Nisanur Çakıroğlu",
    comment: "Verilen hizmet çok profesyonel yaptirdigim işlemden çok memnun kaldım.Herkese tavsiye ederim ❤️",
    rate: 5,
    image: "nisanurCakiroglu.png"
  },
  {
    name: "Ece Bilgin",
    comment: "Çok güzeldi aşırı samimi ve güler yüzlüler ben çok memnun kaldım teşekkür ederim 💕",
    rate: 5,
    image: null
  },
  {
    name: "şeymasu kayacı",
    comment: "Doğru adres🤍",
    rate: 5,
    image: "seymasuKayaci.png"
  },
  {
    name: "Cennet Bakırlıoğlu",
    comment: "Arkadaşımın tavsiyesi üzerine ilk kez geldim iyiki de gelmişim 👍 çok tatlı güler yüzlü iki kız kardeş 🥰 elinize emeğinize sağlık çok memnun kaldık bundan sonra hep sizdeyim 🌸 tereddüt etmeden her işlem için gelmeniz gereken bı işletme 👍",
    rate: 5,
    image: null
  },
  {
    name: "Ayşe Özcan",
    comment: "Tavsiye üzerine ilk defa geldim detaylı cilt temizliği yaptırdım, iple kaş bıyık çene tüylerimi temizlettim ve manikür yaptırdım. Tüm hizmetlerinden çok memnun kaldım. İşletme sahipleri çok kibar, ilgili, iletişimleri çok iyi. Bende tavsiye ediyorum. Gönül rahatlığıyla gelebilirsiniz.",
    rate: 5,
    image: null
  },
  {
    name: "Merve Yuksel",
    comment: "Ipek kirpik işlemi için onların yanına gittim ve çok memnun kaldım. Büşra benimle çok iyi ilgilendi, isteklerimi gerçekten dinledi, çok profesyonel ve çok cana yakın. İster kirpikleriniz, ister tırnaklarınız, ister makyajınız için olsun, bu salonu şiddetle tavsiye ederim.",
    rate: 5,
    image: null
  },
])

function goNextSlide() {
  const swiper = (swiperEl.value as any)?.swiper;
  if (swiper) {
    swiper.slideNext();
  }
}

function goPrevSlide() {
  const swiper = (swiperEl.value as any)?.swiper;
  if (swiper) {
    swiper.slidePrev();
  }
}

onMounted(() => {
  if (swiperEl.value) {
    (swiperEl.value as any).breakpoints = {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    };
  }
})
</script>

<template>
  <section id="comments" style="background-color: #D3BB8C;">

    <svg xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 40px;" viewBox="0 0 2600 131.1" preserveAspectRatio="none"> 
      <path d="M0 0L2600 0 2600 69.1 0 0z" fill="#FFF"></path> 
      <path style="opacity:0.5" d="M0 0L2600 0 2600 69.1 0 69.1z" fill="#FFF"></path> 
      <path style="opacity:0.25" d="M2600 0L0 0 0 130.1 2600 69.1z" fill="#FFF"></path>
    </svg>

    <div class="container py-4">
      <h3>Şeyma Kaya Beauty Makeup Studio için dile getirilenler</h3>
      <p class="m-0">Eskişehir gelin makyajı ve güzellik merkezi hizmetlerinde fark yaratan <strong>Şeyma Kaya Beauty Makeup Studio</strong> olarak, misafirlerimizin deneyimlerine büyük önem veriyoruz. İşte stüdyomuzdan mutlu ayrılan danışanlarımızın Google üzerindeki gerçek yorumları...</p> 
      <p style="text-align: right; margin-bottom: 20px; font-size: 12px;">+150 yorum <a href="https://www.google.com/search?sca_esv=9c862ab14c0bc3f3&sxsrf=ANbL-n4HqAt4wxDm_y9_qEp9gpBsfiAoGg:1773607272367&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVdjRjomqm_fci7_A7OOBNj9awc-VU7IGX8Xkw2bblt52Ld09IxbfR5A6DLb99UWUxkc9mfwk7jKgk6HlDO_ugsHGaIOHhOsUgTck6xGnkXqIt0Tr_McX7fb5FHN191WykUfa0s%3D&q=%C5%9EEYMA+KAYA+BEAUTY+%26+MAKEUP+STUDIO+Yorumlar&sa=X&ved=2ahUKEwiM4cL74aKTAxW25QIHHZ-iI5sQ0bkNegQIMhAF&biw=1309&bih=716&dpr=2.2" target="_blank">( Tümünü Gör )</a></p>
      <swiper-container 
        slides-per-view="4" 
        speed="500" 
        loop="true" 
bqV        grid-rows="1"
        ref="swiperEl">
        <swiper-slide v-for="comment in comments" :key="comment.name" style="height: auto">
          <div class="card-comment">
            <div class="card-comment__header">
              <el-avatar 
                :size="48" 
                :src="comment.image ? `/comment-image/${comment.image}` : ''" 
                style="flex-shrink: 0;"
              >
                {{ comment.name.charAt(0) }}
              </el-avatar>
              <div class="name">{{ comment.name }}</div>
              <el-rate v-model="value1" style="margin-left: auto; pointer-events: none;" />
            </div>
            <div class="card-comment__body">
              <p>{{ comment.comment }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
      <div class="d-flex align-items-center justify-content-end mt-4">
        <el-button type="primary" @click="goPrevSlide" class="comment-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 640 640">
            <path d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z" fill="white"/>
          </svg>
        </el-button>
        <el-button type="primary" @click="goNextSlide" class="comment-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 640 640"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" fill="white"/></svg>
        </el-button>
      </div>
    </div>
    


      

      

    <svg xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 40px; transform: rotate(180deg);" viewBox="0 0 2600 131.1" preserveAspectRatio="none"> 
      <path d="M0 0L2600 0 2600 69.1 0 0z" fill="#FFF"></path> 
      <path style="opacity:0.5" d="M0 0L2600 0 2600 69.1 0 69.1z" fill="#FFF"></path> 
      <path style="opacity:0.25" d="M2600 0L0 0 0 130.1 2600 69.1z" fill="#FFF"></path>
    </svg>


  </section>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
}

#comments {
  swiper-container {
    display: flex;
  }

  swiper-slide {
    height: auto !important;
  }
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.card-comment {
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 10px 20px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;

  .el-rate i {
    margin-right: 0;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 10px;

    .name {
      font-size: 14px;
      font-weight: 600;
      color: #111;
    }
  }

  &__body {
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.45;
    color: rgba(0, 0, 0, 0.8);
    flex: 1;
    white-space: pre-line;
  }
}

.comment-btn, .comment-btn:hover {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid white;
  overflow: hidden;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.comment-btn svg {
  transition: .3s ease-in-out transform;
}

.comment-btn:hover svg{
  transform: rotate(360deg);
}

@keyframes pulse-ring {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
  }
}

.comment-btn:active {
  animation: pulse-ring 0.4s cubic-bezier(0.24, 0, 0.38, 1);
  background-color: rgba(255, 255, 255, 0.1) !important; // Tıklayınca içi hafif parlasın
}
</style>