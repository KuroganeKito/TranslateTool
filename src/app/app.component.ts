import { VocabulariesList } from './shared/VocabulariesList';
import { ParagraphsList } from './shared/ParagraphsList';
import { IParagraphsList } from './shared/IParagraphsList';
import { Component } from '@angular/core';
import { IVocabulariesList } from './shared/IVocabulariesList';
import { IVocabulary } from './shared/IVocabulary';
import { Vocabulary } from './shared/Vocabulary';
import { Paragraph } from './shared/Paragraph';
import { IParagraph } from './shared/IParagraph';
import { GlobalService, IdRange } from './shared/global.service';
import { Dictionary } from './shared/Dictionary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  RawTextarea:        string = `　眩しさに目を覚ますと木の天井があった。
　わたしは寝ぼけた頭のままあくびをしながら身体を起こして、それから温もりを包んでいた掛け布団と毛布を押しのけた。
　分厚い木枠の窓から外を見ると、まず澄み切った蒼空が目に入った。それは見渡す限りどこまでも広がっていて、同じようにどこまでも広がる雲海と水平線を成している。雲海は大きく隆起し、穏やかに流動していたが、それが途切れて下界が見えるということはなかった。
　そんな空を背景に、十に満たないほどの豆粒大の点が浮かんでいた。点と点の距離は数十キロメートルはあるだろうか。
　浮遊島と呼ばれる島々だ。そのうちのいくつかには、村や、ひょっとしたら町と呼べるくらいの規模で人々が暮らしているのかもしれない。
「今日もいい天気だなあ」
　この世界に大地はない。
　何千年も前に世界はばらばらに壊れて、空に浮かぶ数え切れないほどの島々だけになってしまったらしい。
　ごうごうと風切り音が響く中、わたしは暖かい木材の匂いに満ちた室内からそんな景色をぼうっと眺めていた。ふと眼下に視線を向けると、陽の光に煌めく雲海の表面を楕円形の影が滑っていく──わたしの乗る飛空船のものだ。
　ここは島から島へと旅をする、クロート号という飛空船の中だ。
　わたしは、数ヶ月ほど前からこの船に乗っている。
　ベッドに腰掛け、櫛で髪をといて手早く身なりを整えて立ち上がると、間仕切りのカーテンをさっと開けた。大きなリビングくらいの居室に陽の光が満ちる。
　部屋の中には二人の人間が暮らしていけるだけの最低限の調度品が置かれている。ベッド、テーブル、簞笥といった大物の家具は壁や床に固定されていた。
　向かいにはもう一つ間仕切りのカーテンがあって、そこは開かれたままになっており、ベッドも無人だった。たぶん、そのベッドの主は前方の操舵室で操舵席に座ったまま眠っているのだろう。速度と高度を維持する自動操縦は付いているのだけれど、何か異変があったときにすぐ対応できるようにそうしているらしい。
「相変わらず汚いなあ……」
　この飛空船に初めて乗ったとき、船内は卒倒しそうになるくらい汚れて散らかっていた。ゴミや埃は当たり前。食べ物のカスは落ちてるし、タバコのヤニはこびりついてるし、カビが生えているところまであった。面倒そうな顔をしていたあの人を尻目に、わたしは全力で掃除をした。いらないものを捨てて、船内をぴかぴかに磨き上げて、それから自分の寝る場所を確保して。
　だから今、船室はおおむね綺麗で、汚いのは目の前の一角だけだ。
　あの人の寝床にだけは手を出せなかったのだ。結果、あの人のベッドとその周辺には服や紙ゴミが散らかっている。何度も片付けるように注意したが、聞く耳を持ってくれない。いっそ自分で片付けようかとも思ったが、人には侵されたくない領域があることくらい、わたしも分かっている。
「見なかったことにしよ……」
　わたしは居室後ろにある簡易キッチンへと移動した。食事係なのだ。
「何にしようかな」
　足下の木箱からトマトを取り出す。真っ赤に熟れた、甘そうなトマト。前の島で手に入れたものだ。そのまま齧ってしまいたいくらいだったけど、ぐっと堪える。
「決めた」
　トマトを包丁で櫛型に切っておいて、それからちぎったレタスと一緒にして皿に並べていって──よし、サラダの完成。それからタマネギとジャガイモの皮を剝いて、細かく刻んでフライパンでバターと一緒に軽く炒める。そこに溶いた卵を入れて蓋をして、蒸し焼きにする。
　このコンロは後ろにある機関室で出た熱を反射板でキッチンまで飛ばして使っているとのことで、薪や炭の火ほど熱くはならない。だから、火加減が少し難しい。
　バターの香ばしさが居室に充満してくる。あと五分くらいだろうか。
　そのとき、不意に先ほど見たあの人のベッドが脳裏をよぎった。
　そう言えばあのベッドの布団、最後に干したのいつなんだろう。
　一度気にし始めるともう駄目だった。
　布団を干すくらいいいよね、勝手に片付けるわけじゃないし、と自分に言い聞かせながら、わたしはあの人のベッドへと向かった。布団をがばっとめくって──
「ひっ」
　瞬間、全身に鳥肌が立った。
　布団に隠れて見えなかった枕とシーツの隙間から、それらは無数に生えていた。
　茶色い笠と、白っぽい柄。
「ぎゃ──────────っ!!」
　わたしは叫んだ。直後、操舵室のドアが勢いよく開いて、あの人が出てきた。
「アリア、どうした！」
「はははは、泊人さん！　きききききき、きの、きのっ、きのこが生えてるっ！」
「ん？」
　怪訝そうに自分のベッドを検分する泊人さんは、無精髭を生やし、よれよれのシャツを着ていた。寝起きらしく、頭もぼさぼさだ。操舵席で寝てどうしたらこんな頭になるんだろう。二五歳らしいけど、そんな姿のせいで何歳か老けて見える。もったいない。いやいや、今はそんなことはどうだっていい。
「ああ、前の島で胞子が付いたんだ。何事かと思った。全く、このくらいで騒ぐな。少し考えれば分かるだろう」
　何でもないことのように泊人さんは鼻を鳴らした。
「な……っ！」
　カチンと来た。カチンと。
　確かについ数日前まで滞在していた島は一面がキノコになっていた。と言うより島自体がキノコでできていた。泊人さんのベッドに生えているのがそこから持ってきてしまったものだということも、冷静に考えれば分かる。エンジンの熱で暖かい室内の、しかも滅多に干されることのない布団の中ですくすく育ったのだろうということも簡単に想像できる。
　けれどどう考えても、問題はキノコがどこから来たかという話じゃない。キノコがベッドに生えていること。そして、そうなってしまった理由が問題なんだ。
「だから言ったのに！　島を出るときにちゃんと着替えてお風呂入ってねって！　めんどくさくて入らなかったんでしょ！」
「……時間がなかったんだ。仕方ないだろ」
「今すぐ頭洗って、身体拭いてきてっ。頭からキノコ生えてきたらどうするの!?」
「生えるわけないだろ……ったく、面倒だな」
　泊人さんはそう言いながら、キッチンへと歩いていく。この船では、樽に蛇口を付けたものを水溜めとして使っていて、それはキッチンにしか置いていないのだ。
　見ていると蛇口の下に置いた桶に少量の──空の旅では貴重な──水を溜めて、頭を突っ込んで器用に髪を洗っている。しばらくすると泊人さんは無造作に服を脱ぎ捨てて身体を拭き始めた。
「わっ、急に脱がないでよ」
　わたしは慌てて視線を逸らした。
　そして、改めてベッドに生えたキノコを見た。
　どうしよう、これ。全部取って捨てれば大丈夫だろうか。
「おい、朝飯作ってたのか」
「うん。今日はサラダとオムレツだけど？」
「そうか」
　泊人さんはキノコの生えたベッドの前にかがむ。
「わわっ、裸のままうろうろしないでよ」
　わたしは慌てて窓の方を向いた。
　背後で泊人さんが何かごそごそやっている音がする。
「ねえ、泊人さん……？」
「何だ」
「何してるの……？」
「キノコ、入れるぞ」
　入れる？　何に？
　疑問が浮かんですぐ消えた。ここまでの会話から考えて答えは一つしかない。
　わたしは慌ててキッチンの方を見て、
「ああああああああ────────────っ!?」
　絶叫した。卵を溶いておいたボウルに泊人さんがキノコを放り込んでいる光景を見てしまったのだ。
「な、な、何てことをっ！」
「そんなに騒ぐな。このキノコは食用だ。前の島で見ただろ」
　泊人さんがキノコを放り投げて寄越す。
「ううう……」
　わたしは嫌々ながらそのキノコを受け取って、なるべく顔から遠ざけて観察した。よく見てみれば、それは確かに前の島で食用にされていたものだ。よくそんなこと覚えてるな、と感心してしまう。いやいや、そもそもこれは泊人さんの身から出た錆──じゃなくてキノコだ。感心してどうする。
　ボウルの中を覗き込むと、大量のキノコが卵の中に浮いている。
　どうしよう、これ。取り除いた方がいいかなあ。
　けれど、飛空船の旅において食料は貴重だ。島から島への移動は風向きや天候に大きく左右されるから、予想よりずっと長く時間がかかることがある。その間、何とか食いつながなければいけない。この船の食事係であるわたしは、食料の残量にも責任を負う必要がある。キノコを入れれば食材が節約できる。そもそも、今から取り出したところで色々手遅れのような気もするし。
　ごくりと唾を飲み込む。
　枕の隙間から生えていたキノコ。栄養は何なんだろう。いや、考えてはいけない。
「わ、分かった……。なんか抵抗はあるけど、このまま焼いてみる……」

　オムレツとスープから湯気が昇り、サラダ、それからカリカリに焼いたバゲットが卓に並んでいる。
「うまいな」
　泊人さんはキノコ入りオムレツを一口食べてそう言った。こういうとき下手なごまかしをしたりすることのない人なので本当においしいのだろう。しばらく様子を見守っていると、泊人さんはオムレツとバゲットをがつがつ食べていく。それからときどきトマトとレタスのサラダに手を付ける。
「あっ、そんな一気に。わたしの分もあるんだからね、そのオムレツ」
　わたしは慌てて自分の分を確保すると、そこから恐る恐る口に運ぶ。
「あ、おいしい」
　思わずうっとりした声が出てしまう。
　意外にもキノコがいい味を出している。生えていた場所は努めて忘れる。
「でも、言っとくけど、もうぜーったいに、勝手に料理に触らないでよ」
「ああ、分かってる。何度言えば気が済むんだ」
　本当に分かっているのだろうか。
　わたしはため息をこぼしつつ、二口目のオムレツを味わった。
　ああ、ほっぺたがとろけそう。
「前の島で貰った野菜もおいしい」
「ああ、そう言えば分けてもらったな」
　泊人さんは飛空船で人や物を運んだり、行商したりを仕事にしている。そのついでと言っては何だけど、面倒事の手助けをすることがあるのだ。この間は、島民同士の争いを仲裁した。そのお礼にと貰ったのが、実はこの朝食の野菜たちだ。
　そうやって面倒事に首を突っ込むとき、本人は心底面倒そうにして、疲れただの、金のためだのと言っているが、それは関わるための言い訳なんじゃないかと、わたしは思っている。言うと怒るので言わないけれど。
　それに、泊人さんは人を助けるとき、それを恩に着せることは決してしない。
　たぶん、誰かを助けるということが泊人さんにとって自然なことなのだろう。きっと無意識なんだろうけど。
　わたしが今、こうしてこの船に乗っているのも、きっと。
「泊人さん」
「どうした？」
　泊人さんがもぐもぐオムレツとバゲットを咀嚼しながら、わたしを見る。
　わたしはすぐには答えず、泊人さんをしばらく見つめた。
「次の島も、いい島だといいね」
「ああ。食い物がうまいところだといいな」
　その答えに、わたしは思わず吹き出してしまった。
　と、そのとき──
　ふと外を見て、わたしは呆けてしまった。
　飛空船の遥か下方の雲海を、巨大な魚のような影が泳いでいるのだ。
　あまりのことに言葉を失っていると、泊人さんもそれを見て「ああ」と呟いた。
「雲海鯨だな。運がいい」それから泊人さんは思い出したように付け加える。
QSDEFRGTHJKLvbn.
「雲海鯨……？」
　わたしは目を凝らして雲海を泳ぐ影を見た。
　けれど、その影はふっと消えてしまって。
「あ、行っちゃった」とわたしが呟いた瞬間、雲海の一部が膨らみ、噴き上がるように下から上へと何かが飛び出した。
　まるで水のように透きとおった、巨大な体軀が宙を舞う。
　小さいときに絵本で読んだことがある。古い時代の海という場所に棲んでいた、鯨と呼ばれた生き物──それによく似た形をしている。
　すごい迫力だ。
「あ」
　目が合ったような気がした次の瞬間に、その巨軀はまた雲海へと戻っていた。
　少しずつ収まっていく雲のうねりを、わたしはじっと見つめていた。
　そのときわたしは、世界の広さに圧倒されていた。
　大地は壊れ、残されたのは空に浮かぶ島々。この世界には氷に閉ざされた島も、人ならざる者が棲む島も、時の流れが歪な島さえもある。
　だからこうしてその広さを目の当たりにするたびに不安になる。
　わたしは本当に探しているものに辿り着けるのだろうか、と。
　でも、とも思う。
　わたしを不安にさせるのは世界の広さだけど、前へ進む力をくれるのも、いつだってそこで経験する様々な出来事とそこで出会う人たちだ。
　だからわたしはこれからも進んでいける。
　喜びも悲しみも、希望も不安も、全部を受け止めて。
　どこまでも果てしない、この空の旅路を。`;
  TranslatedTextarea: string = `Mở mắt trong căn phòng tràn ngập ánh nắng chói chang, hình ảnh trần nhà gỗ hiện lên trước mắt tôi.
Toàn thân tôi ngồi dậy với cái đầu vẫn lơ tơ mơ ngáp ngắn ngáp dài, sau đó tôi lật chiếc futon cùng chiếc chăn mỏng ra, thứ tôi đã đắp để sưởi ấm.
Tôi nhìn qua khung gỗ cửa sổ dày dặn, một cảnh quan bầu trời xanh trong vắt lọt vào tầm mắt tôi. Tôi đưa mắt nhìn tổng thể thì hướng nào cũng như hướng nào, biển mây và đường chân trời kéo dài đến vô tận. Những dòng biển mây to lớn đang nhẹ nhàng trôi dạt dào, nhưng nó đã ngăn tôi khỏi tầm nhìn phía hạ giới.
Trên phông nền của bầu trời tuyệt đẹp, chưa tới mười chấm nhỏ bằng hạt đậu đa lơ lửng giữa phông nền của bầu trời tuyệt đẹp. Từng chấm nhỏ đó cách nhau hơn 10km?
Đó là những đảo được gọi chung tên với Đảo Phù Du. Trong đó, số người sống trên đảo có đạt quy mô làng hoặc có thể lên đến thị trấn.
“Thời tiết hôm nay cũng dịu êm nhỉ.”
Thế giới này không còn khái niệm “Lục Địa”.
Dường như thế giới hàng nghìn năm về trước đã hoàn toàn đổ vỡ và để lại hằng hà những đảo lớn nhỏ trôi nổi giữa nền trời.
Giữa lúc vi vút tiếng gió đang ngân, tôi ngắm nhìn cảnh đẹp như vậy bên trong căn phòng ấm áp thấm đượm mùi gỗ. Bật chợt khi tôi nhìn xuống bên dưới, một chiếc bóng hình elip đang trượt bên mặt biển mây sáng lấp lánh dưới ánh mặt trời - đó là con thuyền tôi đang ngồi.
Nơi tôi đang đứng là bên trong một chiếc phi thuyền chu du từ đảo này sang đảo khác mang tên hiệu Krot.
Tôi đã sống trên con thuyền này nhiều tháng trôi qua.
Tôi ngồi tạm bợ trên chiếc giường, dùng lược chải đầu và nhanh chóng chỉnh trang diện mạo của mình, mạnh tay kéo chiếc rèm ra. Ánh mặt trời đã lắp đầy bên trong căn phòng thoáng đãng tựa như phòng khách.
Bên trong căn phòng này, những nội thất cổ được bố trí vừa đủ cho hai người chung sống. Những nội thất lớn như giường, bàn, tủ cổ hay những thứ to lớn đầu được cố định vào tường hay sàn nhà.
Gần bên chỗ của tôi thì còn có một cái tấm rèm đã được kéo ra từ trước, phía bên đó có một chiếc giường không người. Trông có vẻ như chủ nhân của chiếc giường đó đã ngủ trên ghế bên trong buồn lái ở trước thuyền rồi. Bởi theo tôi, chiếc thuyền đang duy trì ở tốc độ và độ cao này chỉ có thể là chế độ tự động lái mà thôi, nhưng chắc cậu ta làm vậy chỉ có thể là nếu có sự cố gì xảy ra, cậu ta có thể ứng phó ngay lập tức.
"Cái giường vẫn bẩn như mọi ngày nhỉ..."
Cái này mà tôi lần đầu bước lên con thuyền này, tôi đã muốn ngất xỉu trước sự bẩn và lôi thôi bên trong nó. Rác và bụi là thứ . Vụn thức ăn thì rơi lải rải, tường phòng thì dính đầy màu úa vàng của thuốc lá, đến nỗi có mấy chỗ nấm mốc còn thi nhau phát triển. Tôi đã phớt lời khuôn mặt phiền hà của cậu ta để cố hết sức tổng vệ sinh nơi này. Tôi vứt hết những thứ không cần, chùi đến khi giang phòng của con tàu này bóng loáng, và sau cùng là tự chọn cho mình một chỗ để ngủ.
Thế nên buồng phòng bây giờ mới sạch bóng như này, chỉ trừ một góc trước mặt tôi.
Chỉ có chỗ ngủ của cậu ta là tôi không được động tay vào. Kết cục thì, địa bàn giường của cậu ấy vương vấn đủ loại giấy và quần áo. Đã nhiều lần tôi giải quyết vụ này bằng cách nhắc rồi, thế nhưng cậu ta nghe tai trái trôi hết qua tai phải. Tôi nghĩ thà rằng mình tự lực đi dọn còn hơn, nhưng tôi cũng hiểu rằng ai ai cũng có những nơi mà họ không muốn bị xâm phạm.
“Thôi thì mình sẽ coi như nó vô hình...”
Tôi đi sang giang bếp đơn giản phía sau phòng.
“Nấu món gì cho ngon bây giờ nhỉ?”
Tôi lấy ra trái cà chua từ chiếc hộp gỗ được đặt dưới chân. Trái cà chua chín màu đỏ tươi, trông thật ngon lịm. Tôi đã có được nó từ hòn đảo trước. Nhìn nó thôi mà tôi muốn cắn một phát rồi, nhưng tôi đã kiềm chế được.
“Quyết định được rồi.”
Tôi dùng dao để xắt cà chua theo dạng lược rồi xếp chúng trên đĩa cùng với bắp cải đã được cắt sẵn... Thế là tôi đã hoàn thành món salad. Từ đó, tôi bóc vỏ hành và gọt khoai tây. Sau đó, tôi bắt đầu bóc vỏ hành tây và gọt vỏ khoai tây, tôi xắt chúng thành từng lát nhỏ rồi xào sơ qua cùng với bơ. Từ đó, tôi cho trứng đã đánh tan vào và đậy nắp lại là sẽ hoàn thành món xào.
Nhà bếp này được sử dụng nhờ vào tấm phản quang tạo nhiệt từ buồng máy được đặt ở phía sau, thế nên việc điều chỉnh nhiệt độ sẽ có phần khó hơn, nhưng đổi lại thì nhiệt độ trong phòng sẽ không nóng như khi sử dụng bếp than hay bếp củi.
Mùi thơm phức của bơ đã loang khắp phòng. Chắc 5 phút nữa thôi.
Trong lúc đó, bỗng dưng chiếc giường ban nãy tôi để ý của cậu ta đột nhiên xuất hiện trong 11đầu tôi.
Nhắc mới nhớ, lần cuối tấm ra đó giặt là khi nào ấy nhỉ.
Một khi tôi đã lo lắng chuyện gì thì quả là khó để kiềm chế bản thân lại mà.
Trong khi tôi tự nói với bản thân rằng phơi khô futon thì tốt hơn nhỉ, với lại mình cũng đâu tự ý làm đâu đúng không. Tôi bắt đầu lật tấm futon lên và...
“Hííí.”
Trong khoảnh khắc mà cảnh tưởng trước mắt đã khiến toàn thân tôi nổi da gà.
"Những thứ đó" đang mọc vô kể ẩn giữa chiếc gối và tấm ga, nơi tôi không thể nhìn thấy
Chúng có hình mũ màu nâu sẫm, và thân trắng .
“Gyaaa──────────!!”
Tôi đã hét toáng cả lên. Lập tức cánh cửa từ buồng lái mở mạnh và cậu ta bước ra.
“Aria, có chuyện gì vậy!”
“Ha-Ha-Ha-Ha-Hakuto-san! N-n-n-n-n-n-nâ-nấ-nấm đang mọc kìa!”
“Hửm?”
Vận chiếc áo sơ mi luộm thuộm, râu thì mọc lởm chởm, Hakuto-san bắt đầu khó hiểu xem xét giường của mình. Trông thấy cái đầu như tổ quạ như cậu ta mới ngủ dậy. Bởi lý do cho cái đầu đó hẳn là ngủ nướng trong buồng lái rồi đây. Cậu ta thì ra dáng chàng trai 25, nhưng trông cái thể diện đó thì vài tuổi già hơn. Phí thật. Khoang cái đã, bây giờ đó không phải chuyện tôi phải bận tâm.
“À, chắc là bào tử từ đảo trước. Thiệt tình, chuyện vặt vãnh này thì có cần phải inh ỏi thế chứ. Suy nghĩ cái là hiểu rồi.”
Trước sự việc như vậy, Hakuto-san khịt mũi như chả có gì phải bàn tới.
“Cái...!”
Tôi mệt lắm rồi đấy. Mệt lắm rồi.
Quả nhiên là hòn đảo nơi chúng tôi lưu trú, chỉ vài trước đã bao phủ trong nấm. Nói đúng hơn là toàn bộ hòn đảo đó bao phủ trong nấm. Nếu tôi bình tĩnh ngẫm thềm một chút thì cũng có thể hiểu được số nấm mọc trên giường của Hakuto-san là từ hòn đảo đó. Cơ mà, cũng thật khó để tưởng tượng nổi đống nấm đó lại có lớn vùn vụt bên trong chiếc futon nóng, không có nước mà còn kế bên phòng động cơ.
Nhưng dù nghĩ thế nào đi nữa thì vấn đề không phải số nấm đó đến từ đâu. Đính chính bản thân lại là số nấm đó mọc từ chiếc giường. Và rồi, vấn đề là thành ở đó.
“Thế nên tớ mới nhắc cậu rồi mà! Sau khi rời khỏi đảo thì nhớ mà thay quần áo rồi chui vô bồn không chịu!
“...Bởi lúc đó tôi không còn thời gian. Biết thế nào được.”
“Cậu ngay bây giờ đi gội đầu và lau người. Lỡ như nấm mọc trên đầu cậu thì tính sao chứ!?"
“Sao mà mọc được chứ... Thiệt tình, phiền phức thật.”
Hakuto trong lúc nói vậy, cậu đi về hướng nhà bếp. Trên con thuyền này vốn chỉ có một thùng có vòi để trữ nước, và chỉ đặt bên trong khuôn viên nhà bếp.
Bên dưới thùng nước, tôi nhìn thấy cậu ấy đang khéo léo tận dụng một lượng nước nhỏ - thứ được ví như vàng ngọc trên những cuộc hành trình xuyên trời – để dội vào đầu cậu. Sau một lúc, Hakuto-san một cách thản nhiên cởi bỏ bộ quần áo để lau người.
“Wah, đừng có mà đường đột cởi đồ thế chứ.”
Tôi liền mặt sang chỗ khác trong cơn bối rối.
Nhưng làm như thế tôi lại một lần nữa nhìn thấy đống nấm mọc trên giường.
Nên làm gì với đống này bây giờ. Nếu tôi nhổ rồi đem vứt chúng hết chắc không sao đâu nhỉ.
“Này, cô đang nấu bữa sáng đúng không?”
“Ừm. Hôm nay tôi làm món salad với cơm trứng ráng, có chuyện gì à?”
“Vậy sao.”
Hakuto-san khom lưng xuống trước chiếc giường, nơi đống nấm đang đua nhau sinh mầm.
“Wa-wahhh, đừng có đi lung tung trong cái bộ dạng trần như nhộng thế kia chứ.”
Tôi bối rối và đánh mặt sang phía cửa sổ.
Còn về phía Hakuto, cậu ấy làm gì đó phát ra tiếng lục cục sau lưng tôi.
“Nè, Hakuto-san...?”
“Chuyện gì?”
“Cậu đang làm gì vậy...?”
“Tôi đang cho nấm vào.”
Cho nấm vào? Vào đâu cơ chứ?
Nảy ra nghi vấn thì ngay lập tức tôi đã nhận ra. Bởi xét từ góc độ của cuộc trò chuyện từ nãy  giờ thì câu trả lời chỉ có một.
Tôi vội vàng đánh mặt về hướng phòng bếp và...
"Aaaaaa────────────!?"
Tôi đã thét thành tiếng. Bởi trước mắt tôi ngay lúc này là cảnh tưởng Hakuto đang thảy đống nấm đó vào tô trứng mà tôi đã đánh.
“C-C-Cậu làm cái quái gì thế!”
“Có cần phải lớn tiếng thế không. Nấm này ăn được. Cô cũng đã nhìn thấy lúc còn đang ở đảo trước rồi còn gì.”
Hakuto ném nấm về phía tôi.
“Uuu...”
Trong khi cơn giận của tôi chưa nguôi thì tôi bắt lấy và tránh mặt nó càng xa càng tốt. Nếu nhớ lại một chút thì quả thật, người dân trên đảo đã sử dụng nó làm thực phẩm. Tôi cũng ấn tượng với bản thân vì không nhớ đến vụ này. Không không, bởi đây không phải là ghẻ từ Hakuto-san,... mà là nấm.
Tôi đảo mắt qua nhìn tô trứng thì nhận ra lượng lớn số nấm đã nổi lồng bồng trong đó.
Làm gì với tô này bây giờ. Chắc bốc hết đống này ra sẽ tốt hơn nhỉ.
Tuy nhiên, thực phẩm trong những cuộc hành trình trên phi thuyền tựa như vàng ngọc vậy. Nội việc di chuyển từ đảo này sang đảo khác có thể tốn nhiều thời gian hơn dự kiến vì nó còn phụ thuộc vào hướng gió và thời tiết. Trong thời gian chờ đó phải có gì đó để bỏ bụng. Với tư cách là người quản lý thực phẩm trên con thuyền này, tôi cần có trách nhiệm về lượng thực phẩm tồn kho. Nếu tôi cho số nấm này vào  thì có thể tiết kiệm được số thực phẩm. Với lại giờ có lấy hết đống đó ra thì cũng đã quá muộn rồi.
Tôi nuốt nước miếng thành tiếng
Số nấm đó mọc lên từ các khe hở trên gối. Có dinh dưỡng gì sao? Không, tôi không được nghĩ về nó.
“Đ-Được rồi... Tuy tớ không đồng lòng với cậu, cơ mà tớ sẽ chiên nó thử...”

Trên bàn ăn bây giờ đang bay biện bởi những món cơm trứng omurice và nước súp nóng hổi đang bốc hơi nước, bên cạnh đó là bánh Baguette được nướng giòn rụm.
“Ngon thật đấy.”
Hakuto thốt lên ngay khi thưởng thức miếng cơm trứng đầu tiên. Những lúc như này, nghe được lời khên từ Hakuto mấy vụ như này, cho nên khi biết cậu ta nói vậy thì hẳn là nó rất ngon. Sau một hồi trong bộ dạng đứng hình mà quan sát xung quanh, Hakuto-san lia lịa ngoằm lấy omurice và bánh Baguette. Cứ sau vài miếng, cậu ấy gắp cà chua hay bắp cải từ tô salad.
"Ấy, đừng có ăn lia ăn lịa vậy chứ. Chỗ omurice đó còn có phần của tớ nữa đó."
Tôi bắt đầu bối rối và bảo về phần của mình, tôi gắp thử miếng đó và đưa vào khóe miệng đang run rẩy.
“Ồ, ngon thật.”
Tôi đã không khỏi cất thành tiếng thích thú.
Tôi thật sự ngạc nhiên biết được chỗ nấm đó có vị rất ngon. Chính vì thế mà tôi sẽ cố gắng quên đi nơi chúng đã nảy mầm.
“Nhưng mà nghe tớ nói này, đừng có mà tự tiện động tay vào đồ đang nấu lần nữa nghe chưa.”
“Rồi, tôi hiểu rồi. Cô định nói bao lần nữa mới thỏa lòng cô đây.”
Không biết cậu ta có thật sự đang hiểu không nữa?
Tôi đánh một hơi thở dài rồi tiếp tục miếng omurice thứ hai.
Ahh, bỏ vô miệng thôi muốn tan ra hết luôn rồi.
“Chỗ rau lấy được từ đảo vừa rồi cũng ngon nữa.”
“Ahh, nhắc mới nhớ, chừa phần chỗ đó cho tớ nữa đấy.”
Nhiệm vụ của Hakuto trên phi thuyền này là vận chuyển khách và hàng hóa, cậu ấy cũng kiêm luôn việc bán hàng rong. Tiện thể thì cậu ấy cũng xử lý những việc rắc rối dù là việc gì. Mới chỉ ngày trước cậu đã giải quyết mâu thuẫn giữa người dân trên đảo. Và thế là chúng tôi được đáp lễ như một món quà cảm ơn, và thực tế chúng là đống rau của của bữa sáng hôm nay.
Những lúc cậu ta trỏ cổ vào chuyện bao đồng như này, chính cậu ta thường, vì mệt mỏi hay vì tiền, tuy nhiên, tôi nghĩ đó chỉ là cái cớ để cậu ta tham gia. Nếu nói ra chắc hẳn cậu ta sẽ giận nên tôi không nói
Kể ra mỗi khi Hakuto-san giúp đỡ người, cậu ta thường không một lời kể ơn.
Có lẽ, giúp một ai đó đã là lẽ thường nhiên đối với Hakuto-san. Tôi chắc đó như là phản xạ vô điều kiện.
Và cũng lý do đó mà tôi cho đến bây giờ vẫn ngồi trên con thuyền này, chắc hẳn là nó.
“Hakuto-san.”
“Có chuyện gì?”
Hakuto-san từ tốn nhai cơm trứng rang và bánh bagutte trong khi nhìn tôi.
Tôi không đáp lại ngay mà nhìn Hakuto một lúc sau đó.
“Hi vọng đảo lần sau cũng tốt như vậy nhỉ”
“Ahh. Tôi hi vọng đồ ăn lần sau cũng sẽ ngon.”
Thật ra, câu trả lời đó chỉ là tôi vô tình nói ra thôi.
Và sau đó---
Tôi trong chóng vánh đánh mặt sang nhìn ra ngoài và bắt đầu lẩm cẩm.
Xa xôi phía bên ngoài có hình bóng tựa như một con cá khổng lồ đang bơi phía dưới phi thuyền.
Trong khi tôi không nói lên được lời nào, Hakuto-san cũng quay qua nhìn rồi “ahh” – cậu ấy thì thầm trong miệng.
“Cá voi Vân Hải nhỉ. May mắn thật” Và rồi Hakuto-san nối tiếp câu nói của mình như vừa nhớ ra điều gì đó.
“Nó không bay ra đâu. Nhìn kĩ đi.”
"Cá voi Vân Hải…?"
Tôi nheo mắt dõi theo hình bóng của nó đang bơi giữa biển mây.
Nhưng chiếc bóng đó biến mất trong chóng vánh.
“A, đi mất rồi.” Ngay sau khi tôi thì thầm vậy, một vùng biển mây phình to ra, thứ gì đó bay lên từ dưới bay lên như thổi lên.
Một thân hình khổng lồ, trong suốt như nước đang múa lượn giữa bầu trời không trung.
Khi còn nhỏ, tôi cũng thường hay đọc truyện tranh. Và hình dạng nó khá tương đồng với một sinh vật được gọi là cá voi sinh sống dưới biển từ những năm tháng xa xưa.
Đúng là nó có một sức cuốn hút đến phi thường.
“Ah.”
Khi tôi có cảm giác như chúng tôi chạm mắt nhau thì thân hình to lớn đó quay trở về với biển mây.
Tôi đăm đăm nhìn vào những gợn sóng của biển mây, nơi sự kiện đã kết thúc trong thoáng mắt.
Bởi khi đó, tôi đã bị choáng ngợp bởi sự rộng lớn của thế giới này.
Kể từ khi sự kiện Trái Đất tan vỡ, thứ mà nó đã để lại là hằng hà những hòn đảo lơ lững giữa bầu trời. Ở thế giới này có những hòn đã bị băng khóa lại, có những hòn đảo là sinh sống của dị nhân, thậm chí có những hòn đảo đã bị bóp méo hình dạng sau nhiều năm trôi qua.
Vì thế mà khoảnh khắc tôi chứng kiến sự to lớn của nó cảm thấy bản thân bị bất an. | Chính vì thế mà lòng tôi càng cảm thấy bất an hơn mỗi khi được chứng kiến sự ... của thế giới.
Thực sự tôi cũng không biết liệu có đạt được thứ mà mình đang tìm kiếm hay không nữa?
Ngoài ra, tôi cũng có cách nghĩ khác.
Đúng là thứ làm tôi bất an chính sự rộng lớn của thế giới này, nhưng thay vào đó là những người tôi gặp sau vô vàn trải nghiệm khác nhau đã truyền cho tôi động lực để tiến về phía trước.
Chính vì họ mà tôi có thể tiếp tục tiến bước trên cuộc hành trình này.
Dù là niềm vui hay nỗi buồn, dù là hy vọng hay bất an, tôi sẽ đón nhận nó.
Trên cuộc hành trình không kết thúc này.`;
  VocabTextarea:      string = `澄み切る|すみきる|làm cho yên lặng |bầu trời
眼下|がんか|nhìn xuống dưới
弧|こ|cô độc
描く|かく|vẽ, phác họa, khắc họa
成す|なす|hoàn thành, làm xong
遺物|いぶつ|di vật
透明|とうめい|trong suốt, trong veo, trong trẻo, tính minh bạch
樹脂|じゅし|nhựa cây, nhựa dẻo
製|せい|sự chế ra, nơi sản xuất
操舵輪|そうだりん|vô lăng tàu
天候|てんこう|thời tiết, khí hậu
安定|あんてい|ổn định, yên thỏa
まして||huống chi
長年|ながねん|nhiều năm
習慣|しゅうかん|thói quen |cá nhân
全長|ぜんちょう|tổng chiều dài
紡錘形|ぼうすいけい|như hình trái bầu dục
球|たま|banh
皮|かわ|da
固定|こてい|cố định
回転|かいてん|xoay vòng
設ける|もうける|thiết lập, trang bị
ゴンドラ||cabin
眩しい|まぶしい|rực rỡ
天井|てんじょう|trần nhà
寝ぼけた||ngái ngủ
欠伸を出る|あくびをでる|ngáp
掛け布団|かけぶとん|chăn, mền |dày
毛布|もうふ|chăn |mỏng
押し退ける|おしのける|đẩy qua một bên
分厚い|ぶあつい|dày cộm
木枠|きわく|khung gỗ
澄み切った空|すみきったそら|bầu trời trong xanh không một gợn mây
見渡す|みわたす|nhìn khắp, nhìn tổng thể
雲海|うんかい|biển mây
水平線|すいへいせん|đường chân trời
成す|なす|hình thành, đạt tới
隆起|りゅうき|lồi lên |địa hình
穏やかな|おだやかな|ôn hòa, điềm đảm
流動|りゅうどう|lưu động
途切れる|とぎれる|bị gián đoạn
下界|げかい|hạ giới
背景|はいけい|phông nền, background
満つ|みつ|chất đầy
豆粒|まめつぶ|hạt đậu
豆粒ほど小さい||nhỏ như hạt đậu
距離|きょり|khoảng cách
数十|すうじゅう|hàng chục
浮遊|ふゆう|lơ lửng
島々|しまじま|những hòn đảo
ひょっと||có lẽ, có khả năng là
規模|きぼ|quy mô

大地|だいち|mặt đất, đất đai
ばらばら|| rời ra, tách ra
別々||rời ra, tách ra
壊れる|こわれる|đổ vỡ
空に浮かぶ||lơ lửng trên bầu trời
数え切れない|かぞえきれない|đếm không xuể
ごうごう||ồn ào, ầm ầm
風切り音|かざきりおと|tiếng gió cắt
響く|ひびく|vang vọng
木材|もくざい|vật liệu gỗ
室内|しつない|trong phòng
景色|けしき|phong cảnh
ぼうっと||mập mờ, lơ mơ
眺める|ながめる|ngắm
睨む|にらむ|lườm
不図|ふと|đột nhiên, bất chợt
眼下|がんか|tầm nhìn bên dưới
陽|よう／ひ|mặt trời
煌めく|きらめく|lấp lánh
楕円|だえん|hình bầu dục
滑る|すべる|trơn, trượt
飛空船|ひくうせん|thuyền bay
旅する|たびする|đi khám phá
号|ごう|số, thứ

腰掛け|こしかけ|tạm bợ
櫛|くし|lược chải đầu
髪を解く|かみをとく|xõa tóc
身なり|みなり|diện mạo
整える|ととのえる|chuẩn bị, sẵn sàng
間仕切り|まじきり|vách ngăn, tường ngăn
カーテン||rèm
颯と|さっと|nhanh chóng, thoắt một cái
居室|きょしつ|phòng ở
満ちる|みちる|lắp đầy, tròn đủ
調度品|ちょうどひん|nội thất |cổ
置く|おく|bố trí
簞笥|たんす|tủ |cổ
大物|おおもの|thứ lớn
床|ゆか|sàn
固定|こてい|cố định
前方|ぜんぽう|phía trước
操舵室|そうだしつ|buồng lái
速度|そくど|tốc độ
維持|いじ|duy trì
操縦|そうじゅう|vận hành, lái
異変|いへん|sự cố/ bất thường
対応|たいおう|ứng phó
相変わらず|あいかわらず|không thay đổi
汚い|きたない|dơ bẩn
船内|せんない|bên trong thuyền
卒倒する|そっとう|ngất
汚れる|よごれる|bẩn, nói về bề ngoài |bụi bẩn
汚れる|けがれる|bẩn, nói về bề trong |suy nghĩ
散らかる|ちらかる|lôi thôi, vương vãi
埃|ほこり|bụi bặm
滓|かす|cặn bã, phế thải
タバコのヤニ||ố vàng màu thuốc lá
こびり付く|こびりつく|bám vào, dính
黴が生える|かびがはえる|mọc nấm mốc
面倒|めんどう|phiền hà, khó khăn
尻目に懸ける|しりめにかける|phớt lờ
掃除|そうじ|dọn dẹp
ぴかぴか||bóng loáng
磨き上げる|みがきあげる|đánh bóng/mài giũa nhân cách
確保|かくほ|duy trì, |chọn để sống lâu
船室|せんしつ|buồng ngủ
概ね|おおむね|đại khái, phần lớn
一角|いっかく|một góc
寝床|ねどこ|chỗ ngủ
手を出す||nhúng tay vào việc người khác
周辺|しゅうへん|vùng lân cận
片付ける|かたつける|dọn dẹp, giải quyết
聞く耳を持たない||để ngoài tai
いっそ||thà rằng, đành rằng
侵す|おかす|xâm nhập/bị bênh
領域|りょういき|lãnh thổ/lĩnh vực
簡易|かんい|đơn giản, đơn sơ
食事係|しょくじかかり|người phục vụ bữa ăn
足下|あしもと|dưới chân, chỗ đứng
木箱|きばこ|hộp gỗ
熟れる|うれる|chín |hoa quả
手に入れる||sở hữu, có được
齧る|かじる|nhai, cắn
ぐっと||hơn hẳn, hết mình
堪える|こらえる|chịu đựng
包丁|ほうちょう|dao
櫛型|くしがた|dạng lược
レタス||rau bắp cải
玉葱|たまねぎ|củ hành
じゃが芋|じゃがいも|củ khoai tây
皮|かわ|vỏ, da
剝く|むく|lột vỏ
細かく刻む|こまかくきざむ|thái, băm nhỏ, cắt nhuyễn
軽く炒める|かるくいためる|chiên, xào nhẹ
溶く|とく|đánh trứng, làm tan ra
蓋をする|ふたをする|đậy nắp nồi
蒸し焼き|むしやき|nướng, chiên, xào
焜炉|こんろ|bếp nấu
機関室|きかんしつ|phòng máy
反射板|はんしゃばん|tấm phản quang
薪を焼べる|たきぎをくべる|nhóm lửa bằng củi
炭|すみ|than
熱くなる|あつくなる|bốc nhiệt
火加減|ひかげん|giảm nhỏ lửa
香ばしい|こうばしい|thơm phức
充満|じゅうまん|đầy rẫy, lan tràn
脳裏を過る|のうりをよぎる|lóe lên trong đầu
干す|ほす|làm khô
隠れる|かくれる|trốn, ẩn
枕|まくら|cái gối
隙間|すきま|khoảng trống, kẽ hở
直後|ちょくご|ngay sau đó
怪訝|けげん|sự nghi ngờ, khó hiểu
検分|けんぶん|xem xét kỹ
無精髭|ぶしょうひげ|râu mọc lởm chởm
よれよれ||quần áo| sờn rách
頭もぼさぼさ||đầu như tổ quạ
老けて見える|ふけてみえる|nhìn già hơn
胞子|ほうし|bào tử |có ở thực vật
鼻を鳴る|はなをなる|khịt mũi
滞在|たいざい|lưu trú
冷静|れいせい|bình tĩnh, điềm đạm
滅多|めった|hiếm, ít, thiếu
すくすく||vùn vụt, nhanh chóng
着替える|きがえる|thay quần áo
洗う|あらう|rửa
身体|しんたい|cơ thể
拭く|ふく|lau, chùi
面倒|めんどう|phiền phức
樽|たる|thùng
蛇口|じゃぐち|van |nước
溜める|ためる|đọng lại, chứa
桶|おけ|cái xô
空の旅|そらのたび|viễn chinh trên trời
貴重な|きちょうな|quý, đắt đỏ
突っ込む|つっこむ|cho vào, đưa vào
頭を突っ込む||cắm đầu vào, chú tâm
器用|きよう|khéo léo
無造作|むぞうさ|một cách thản nhiên
脱ぎ捨てる|脱ぎ捨てる|cởi bỏ
慌てる|あわてる|bối rối, luống cuống
目を逸らす|そらす|nhìn chỗ khác
オムレツ||trứng ốp lết
屈む|かがむ|khom lưng
裸|はだか|trần trụi
うろうろ||lượn đi lượn lại
背後|はいご|phía sau lưng
ごそごそ||tiếng lục cục
絶叫|ぜっきょう|tiếng thét
卵を溶うく|たまごをとく|đánh trứng
ボウル||bowl, tô
放り込ん|ほうりこむ|nén vào
光景|こうけい|quanng cảnh
騒ぐ|さわぐ|làm ồn
食用|しょくよう|ăn được
放り投げる|ほうりなげる|thảy vào
寄越す|よこす|gửi/ giúp đỡ
嫌々|いやいや|không thích
成るべく|なるべく|nhiều nhất có thể
遠ざけ|とおざける|tránh xa
観察|かんさつ|việc ngắm nhìn
感心|かんしん|khen ngợi
錆|さび|ghỉ
浮く|うく|nổi
取り除く|とりのぞく|lấy ra, tháo ra, gỡ cài đặt
風向き|かぜむき|hướng gió
天候|てんこう|thời tiết
左右|さゆう|trái phải
食いつく|くいつく|cắn một miếng
残量|ざんりょう|phần còn lại
責任を負う|せきにんをおう|chịu trách nhiệm
節約|せつやく|tính tiết kiệm
手遅れ|ておくれ|trễ tay
獄吏|ごくり|tù nhân bị tra tấn
唾|つば／つばき|nước bọt
栄養|えいよう|dinh dưỡng
抵抗|ていこう|phản kháng
焼く|やく|nướng

湯気|ゆげ|hơi nước sôi
昇る|のぼる|bốc lên
カリカリ||giòn rùm rụm
バゲット||baguette, bánh mì dài kiểu Pháp
卓|たく|mặt bàn
一口|ひとくち|1 miếng
誤魔化し|ごまかし|ăn gian
見守る|みまもる|quan sát một hồi
がつがつ||tốc độ ăn nhanh
もりもり||tốc độ ăn trung bình
もぐもぐ||tốc độ ăn chậm
一気|いっき|một hơi, làm một lịa
恐る|おそる|sợ hãi
うっとり||thích thú, sảng khoái
努めて|つとめる|hết sức có thể
気が済む|きがすむ|thỏa mãn
味わう|あじわう|nếm
頬っぺた|ほっぺた|gò má
蕩ける|とろける|tan chảy,
貰う|もらう|mượn, lấy được
行商|ぎょうしょう|bán hàng rong
島民|とうみん|người trên đảo
争い|あらそい|tranh đua, mâu thuẫn
仲裁|ちゅうさい|phân xử
首を突っ込む|くびをつっこむ|trỏ đầu vào chuyện người khác
関わる|かかわる|liên quan, dính dáng
恩に着せる|おんにきせる|kể ơn, đòi hỏi phải biết ơn
咀嚼|そしゃく|nhai, nghiền
吹き出す|ふきだす|phun ra, phọt ra
吹き出し|ふきだし|bong bóng thoại
呆ける|ぼける|lẩm cẩm
遥か|はるか|xa xôi
鯨|くじら|cá voi
付け加える|つけくわえる|bổ sung, thêm vào
目を凝らす|めをこらす|nheo mắt tập trung
膨らむ|ふくらむ|làm phình ra, to ra
噴き上がる|ふきあがる|thổi lên
透き通す|すきとおす|nhìn thấu qua
体軀|たいく|cơ thể
宙|ちゅう|không trung
絵本|えほん|truyện tranh
棲む|すむ|sinh sống
似た形|にた・かたち|hình dáng giống nhau
迫力|はくりょく|sức lôi cuốn
軀|むくろ|thân thể
巨躯|きょく|thân thể to lớn
収まる|おさまる|thỏa lòng/kết thúc việc gì đó
畝ねり|うねり|chuyển động sóng
圧倒|あっとう|áp đảo
人ならざる者||người không giống người
流れ|ながれ|dòng chảy, quy trình
閉ざす|とざる|bít lại, khóa lại
歪な|いびつな|méo mó, như hình trái xoan
辿り着く|たどりつく|đạt được
受け止める|うけとめる|hứng chịu, đóng nhận
果てし|はてし|chấm dứt, giới hạn
旅路|たびじ|cuộc hành trình`;
  SelectedText:                 string = "";
  SearchRange:                  number = 0;
  outRenderHighlightDictionary: Dictionary = new Dictionary();
  inRenderHighlightDictionary:  Dictionary = new Dictionary();
  currentRenderRange:          IdRange = {BeginId: 0, EndId: 0};
  Time:                         number = new Date().getTime();

  ParagraphsListContent:    IParagraphsList   = new ParagraphsList([]);
  VocabListContent:         IVocabulariesList = new VocabulariesList([]);
  SearchedVocabListContent: IVocabulariesList = new VocabulariesList([]);
  RecommendedVocabList:     IVocabulariesList = new VocabulariesList([]);

  needApplyRender!: boolean;

  constructor(private readonly GS: GlobalService) {}

  private BreakRawParagraphsList(rawText: string, translatedParagraph: string): IParagraph[] {
    let returner: IParagraph[] = []
    const TranslatedTextsList: string[] = translatedParagraph.split("\n")
    rawText.split("\n").forEach((rawText, index) => {
      if(rawText !== "")returner.push(new Paragraph(rawText, TranslatedTextsList[index]))
    });
    return returner;
  }

  private BreakRawVocabulariesList(vocabText: string): IVocabulary[] {
    let returner: IVocabulary[] = []
    vocabText.split("\n").forEach(vocabLine => {
      if(vocabLine !== "") returner.push(new Vocabulary(vocabLine))
    })
    return returner;
  }

  applyTranslateTool() {
    this.needApplyRender = true;
    this.outRenderHighlightDictionary.Data = [];
    this.inRenderHighlightDictionary.Data  = [];
    this.currentRenderRange   = {BeginId: 0, EndId: 0};
    this.ParagraphsListContent = new ParagraphsList(this.BreakRawParagraphsList(this.RawTextarea, this.TranslatedTextarea))
    this.VocabListContent      = new VocabulariesList(this.BreakRawVocabulariesList(this.VocabTextarea))
    this.ParagraphsListContent.Data.forEach((paragraph) => { paragraph.updateHighlightDictionary(); })
  }

  checkSelectedText() {
    let textData: any;

    const WindowDocument: any = window.document;
    if      (window.getSelection)          textData = window.getSelection();
    else if (window.document.getSelection) textData = window.document.getSelection();
    else if (WindowDocument.selection)     textData = WindowDocument.selection.createRange().text;

    const StartIndex   = Math.min(textData.baseOffset, textData.extentOffset);
    const EndIndex     = Math.max(textData.baseOffset, textData.extentOffset);
    const selectedText = textData.focusNode.data.slice(StartIndex, EndIndex)

    if(selectedText !== "") this.onSearchVocabInputChange(selectedText);
  }

  SearchRangeInputOnChange(newValue: number) {
    if(this.SearchRange === newValue) return;
    this.SearchRange = newValue;
    this.searchVocab();
  }

  onSearchVocabInputChange(newValue: string) {
    console.log(newValue);
    this.SelectedText = newValue;
    if(newValue === "") { this.RecommendedVocabList.Data = []; return; }
    this.searchVocab();
    if(this.SearchedVocabListContent.Data.length === 0 && this.SelectedText !== "") {
      this.RecommendedVocabList.Data[0] = this.VocabListContent.Data.find(vocab =>
        vocab.RawWord.indexOf(this.SelectedText) === 0
      ) ?? null!;
    }
  }

  onSearchVocabInputKeyDown(ev: KeyboardEvent) {
    console.log(ev);
    if(this.RecommendedVocabList.Data === []) return
    switch(ev.key)
    {
      case "ArrowUp":
        break;
      case "ArowDown":
        break;
      case "Enter":
        this.SelectedText = this.RecommendedVocabList.Data[0].RawWord;
        this.searchVocab();
        break;
    }
  }

  searchVocab() {
    if(this.SelectedText === "") return;
    const vocab = this.VocabListContent.Data.find(vocab => vocab.RawWord === this.SelectedText)
    this.SearchedVocabListContent.Data = vocab? [vocab] : []
    const that = this;
    that.VocabListContent.Data.find(vocab => vocab.RawWord === this.SelectedText)?.TranslatedWordsList.reduce((acc, val) => acc.concat(val), []).forEach(word => {
      this.searchVocabulary(word, this.SearchRange).Data.forEach(vocab => {
        if(!this.SearchedVocabListContent.Data.includes(vocab)) this.SearchedVocabListContent.Data.push(vocab)
      });
    })
  }

  searchVocabulary(rawWord: string, times: number): IVocabulariesList {
    let returnSearchedVocabList: IVocabulariesList = new VocabulariesList([]);
    if(times === 0) return returnSearchedVocabList;
    else {
      returnSearchedVocabList = this.VocabListContent.getSynonymVocabByTranslatedWord(rawWord)
      returnSearchedVocabList.Data.forEach(vocab => {
        const getAllTranslatedWordsInVocab = vocab.TranslatedWordsList.reduce((acc, val) => acc.concat(val), [])
        getAllTranslatedWordsInVocab.forEach(word => {
          this.searchVocabulary(word, times-1).Data.forEach(newVocab => {
            if(!returnSearchedVocabList.Data.includes(newVocab)) returnSearchedVocabList.Data.push(newVocab)
          })
        })
      })
    }
    return returnSearchedVocabList;
  }

  getLoadRangeParagraphIdsInViewport(id: number, viewportHeight: number): (IdRange | null) {
    let BeginId = id,
        EndId = id;
    while (BeginId > 0) {
      const new_BeginId = BeginId - 1;
      const pos = this.GS.getDomPositionToViewPort(new_BeginId);
      if(!pos || Math.abs(pos) < viewportHeight) BeginId--;
      else break;
    }
    while (EndId < this.ParagraphsListContent.Data.length -1) {
      const new_EndId = EndId + 1;
      const pos = this.GS.getDomPositionToViewPort(new_EndId);
      if(!pos || pos < viewportHeight * 2) EndId++;
      else break;
    }
    return {BeginId, EndId}
  }

  getParagraphsListInViewport(BeginId: number, EndId: number): (IdRange | null) {
    const MiddleId                   = BeginId + ((EndId - BeginId) >> 1),
          positionMiddleIdToViewport = this.GS.getDomPositionToViewPort(MiddleId),
          viewportHeight             = Math.floor(visualViewport.height);

    if(!positionMiddleIdToViewport)    return null;
    if(positionMiddleIdToViewport < 0) return this.getParagraphsListInViewport(MiddleId, EndId);
    else {
      if(positionMiddleIdToViewport > 0 && positionMiddleIdToViewport < viewportHeight) return this.getLoadRangeParagraphIdsInViewport(MiddleId, viewportHeight);
      return this.getParagraphsListInViewport(BeginId, MiddleId);
    }
  }

  RenderHighlight(range: IdRange, dictionary: Dictionary) {
    for(let index = range.BeginId; index<=range.EndId; index++) {
      this.ParagraphsListContent.Data[index].updateHighlightIndex(dictionary);
    }
  }

  onParagraphsListScroll() {
    const new_time = new Date().getTime();
    if(new_time - this.Time < 100 ) { this.Time = new_time; return; }
    this.Time = new_time;

    const newRenderRange = this.getParagraphsListInViewport(0, this.ParagraphsListContent.Data.length);
    if(!newRenderRange) return

    for(let index=Math.min(newRenderRange.BeginId, this.currentRenderRange.BeginId);
            index<=Math.max(newRenderRange.EndId, this.currentRenderRange.EndId);
            index++) {
      const isIndexInNewRange     = index >= newRenderRange.BeginId          && index <= newRenderRange.EndId;
      const isIndexInCurrentRange = index >= this.currentRenderRange.BeginId && index <= this.currentRenderRange.EndId;
      const paragraphDictionary   = this.ParagraphsListContent.Data[index].HighlightDictionary
      if(isIndexInNewRange && !isIndexInCurrentRange) {
        this.outRenderHighlightDictionary.RemoveDictionary(paragraphDictionary);
        this.inRenderHighlightDictionary.AddDictionary(paragraphDictionary);
      } else
      if(!isIndexInNewRange && isIndexInCurrentRange) {
        this.outRenderHighlightDictionary.AddDictionary(paragraphDictionary);
        this.inRenderHighlightDictionary.RemoveDictionary(paragraphDictionary);
      }
    }
    this.currentRenderRange = newRenderRange;
    this.RenderHighlight(newRenderRange, this.getAllDictionary());
  }

  getAllDictionary(): Dictionary {
    const returner = new Dictionary([...this.outRenderHighlightDictionary.Data]);
    returner.AddDictionary(this.inRenderHighlightDictionary);
    return returner;
  }

  onTextareaChange(paragraph: IParagraph, value: string) {
    this.inRenderHighlightDictionary.RemoveDictionary(paragraph.HighlightDictionary);
    paragraph.updateHighlightDictionary(value);
    this.inRenderHighlightDictionary.AddDictionary(paragraph.HighlightDictionary);
    const allDictionary = this.getAllDictionary()
    for(let index=this.currentRenderRange.BeginId;
        index<=this.currentRenderRange.EndId;
        index++) this.ParagraphsListContent.Data[index].updateHighlightIndex(allDictionary);
  }

  onTextareaScroll(ev: any) {
    window.document.getElementsByClassName("highlight-area")[ev.target.id].scrollTop = ev.target.scrollTop;
  }

  getHighlightColorStyle(count: number): string {
    const ColorCode = this.GS.getColorCode(count);
    return "background: " + ColorCode + ";border: 0.1rem solid " + ColorCode;
  }

  RenderHighlightOnApply() {
    const newRenderRange = this.getParagraphsListInViewport(0, this.ParagraphsListContent.Data.length)
    if(!newRenderRange) return;

    for(let index=0; index<this.ParagraphsListContent.Data.length; index++) {
      const paragraphDictionary = this.ParagraphsListContent.Data[index].HighlightDictionary
      if(index >= newRenderRange.BeginId && index <= newRenderRange.EndId)
        this.inRenderHighlightDictionary.AddDictionary(paragraphDictionary);
      else
        this.outRenderHighlightDictionary.AddDictionary(paragraphDictionary);
    }
    this.currentRenderRange = newRenderRange;
    this.needApplyRender = false;
    this.RenderHighlight(newRenderRange, this.getAllDictionary());
  }

  async wait(time: number, wait: number=100): Promise<number> {
    setInterval(() => {}, wait)
    return time;
  }

  ngAfterViewChecked() {
    if(this.needApplyRender) this.RenderHighlightOnApply();
  }
}
