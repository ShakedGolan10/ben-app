import timelineImg1 from '@/assets/imgs/timeline-img-1.png'
import timelineImg2 from '@/assets/imgs/timeline-img-2.png'
import timelineImg3 from '@/assets/imgs/timeline-img-3.png'
import timelineImg4 from '@/assets/imgs/timeline-img-4.png'
import timelineImg5 from '@/assets/imgs/timeline-img-5.png'
import timelineImg6 from '@/assets/imgs/timeline-img-6.png'
import timelineImg7 from '@/assets/imgs/timeline-img-7.png'

import volunteerPageImgPolice from '@/assets/imgs/volunteer-img-1.jpg'
import volunteerPageImg2 from '@/assets/imgs/volunteer-img-2.jpg'
import volunteerPageImgMada from '@/assets/imgs/volunteer-img-3.jpg'
import volunteerPageImg4 from '@/assets/imgs/volunteer-img-4.jpg'
import volunteerPageImg5 from '@/assets/imgs/volunteer-img-5.jpg'
import volunteerPageImg6 from '@/assets/imgs/volunteer-img-6.jpg'
import volunteerPageImg7 from '@/assets/imgs/volunteer-img-7.jpg'

export const addBreakInString = (string) => {
    string = string.replaceAll(/(?<!\.)\.(?!\.)/g, ".<br>")
    return string.replaceAll(':', ":<br>")
}
// /(?<!\.)\.(?!\.)/g
const benTimelineInfo = [
    {
        imgSrc: timelineImg1,
        paragraph: 'ב-5.11.97 יום שבת בבית החולים "וולפסון" בשעה 11:50  הגיח לעולם התינוק שלי במשקל 3.200 של אושר ואהבה. הילד השני שהכניס אור הביתה, אח ליוסי הקטן בן ה3. והילד הכי יפה במחלקה. "בן אברהם בן רחל ומוריס" הכריז המוהל ביום השמיני בברית המילה בן היה תינוק חייכן ,מתוק ,שובב ומלא מרץ.'

    },

    {
        imgSrc: timelineImg2,
        paragraph: (`בגיל שנתיים בן שלי החל להרכיב משקפיים עם תספורת קרה עגולה וככה זכה לכינוי "הארי פוטר" .
מהגן בן היה עליל הבנות מהרגע שנכנס בבוקר לגן כולם בשורה היו מחכות בתור לתת לנסיך נשיקה. אהב להיות אבא של שבת כשהבחירה לאמא של שבת תמיד הייתה קשה.
מגיל קטן נלחם על העקרונות והצדק גם בעבור החברים שלו.`)

    },
    {
        imgSrc: timelineImg3,
        paragraph: `בן עלה לכיתה א' בבית הספר "הנשיא" בבת ים עם כל חבריו מהגן ועד היום.
ילד מבריק, מחונן, פטפטן וחרוץ. היה מסיים את שיעורי הבית כבר בכיתה כדי להספיק לשחק עם כל החברים וליצור עבודות יצירה ואומנות ולשחק עם אחיו יוסי כשיהיה עושה עליו "שיטות" (של מכות כמובן) כמו כל האחים, בן העריץ את יוסי בילדותו ובבגרותו והיה מודל לחיקוי עבורו כל ימי חייו.
ביום הזיכרון בכיתה ו' בן שר את השיר "פרי גנך" של אביבה אבידן בסיומו כל המשתתפים הריעו בדמעות והתרגשות קורעת לב. מהגן לכיתה א' למד לנגן על אורגן על ידי מורה למשך כחצי שנה "הילד יגיע עוד לקונצרטים גדולים" אחרי זמן קצר בן כבר למד באופן עצמאי מהאינטרנט ואף המשיך ללמד עצמו גיטרה. ניגוניו היו מרגשים ותמיד משאירים מקום לרצות לשמוע עוד ועוד, בכל מקום שהיה בו פסנתר , ברחוב ,באולם , במלון היה מיד מתיישב ומתחיל לנגן ומסביבו מתאספים אנשים ומאזינים לצליל הנעימות שעשו לכולם נעים בלב ובנשמה.
בגיל 9 הצטרפה אל המשפחה אחותו הקטנה שירן והשלושה היו בלתי נפרדים וניתנים לעצירה.
בן התאהב מהרגע הראשון בלהיות אח גדול לראשונה וכמובן היה עושה "שיטות" על אחותו הקטנה מה שלא יעשה על אחיו😊`
    },
    {
        imgSrc: timelineImg4,
        paragraph: `את כל תוכניות ההתנדבות החל מהחטיבה ועד ליומו האחרון. בן היה תלמיד אהוב במיוחד על המורים ועל חבריו לכיתה. המחנכת הדס אף אמרה שהייתה רוצה לשכפל ילד כמוהו.
תקופת התיכון הייתה אבן דרך לחייו שם הכיר את אהבתו הראשונה, טייל נהנה ממגוון חוויות הנעורים ובעיקר אהב את טיולי הטבע בשל"ח ולילה לפני לא היה ישן מהתרגשות ומהצפייה לטיול.
בן היה מארגן ציוד של חבלים ופנסים וכו' והכי חשוב תיק עזרה ראשונה למקרה הצורך, תמיד אמר שהמענה הראשוני יכול להציל חיים.
באחד מטיוליו נעקץ ע"י בעל חיים ככל הנראה עקרב והוזעקנו לאסוף אותו לבית החולים כשידו שחורה ונפוחה, קיבל טיפול ולא היה מוכן לוותר על חזרה לטיול וכך היה.
את התיכון סיים עם תעודת בגרות מלאה ואיכותית מלא במרץ ורצון להתחיל את תקופת שירותו הצבאי.`

    },
    {
        imgSrc: timelineImg5,
        paragraph: `חלומו של בן שלי היה לעשות שירות קרבי בצבא אבל בשל פרופיל לא מתאים שירת בפיקוד העומק בקריה בתל אביב בתור מנהל לוגיסטי במערך מבצעים.
בן היה צוחק ואומר שהוא קצין המבצעים של עזריאלי , כל מבצע בחנויות היה מעדכן את המשפחה בהומור הייחודי שלו.
כחייל מפקדיו העריצו והעריכו ולא פעם התקשרו אלינו לספר שהם גאים בזכותך שניתנה להם לפקד על חייל בעל ערכים ומידות טובות כמו שיש רק לבן. את שירותו סיים כחייל מצטיין וזכה ללימודים על חשבון המערכת. בן היה חייל של אהבה היה מחכה לטיולים ולגיבושים צהליים על מנת לשמח, לחזק להצחיק ולעודד את כל השבוזים.
הוא חזר לצה"ל במילואים בתור חובש ומציל והצטרף לטיולים רבים נוספים מתוקף תפקידו והיה נהנה מהטבות התשלום במילואים על ההנאה הפרטית שלו 😊`
    },
    {
        imgSrc: timelineImg6,
        paragraph: `אחרי הצבא בגיל 21 בן החליט כמו כל הצעירים לצאת לטיול ולעוף על החיים שלו בטיול אחרי הצבא לארץ המסקרנת והמדהימה ווייטנאם.
במשך חודש וחצי עשה את מה שהוא הכי אוהב לעשות, לטייל בין הנופים המרהיבים , להכיר תרבויות חדשות ושונות ולהיות בחברת צעירים משוחררים ולהנות מהחיים. במהלך הטיול עשה רפטינג, סנפלינג מפלים, מסאז'ים בנג'י מסיבות וחוויות נוספות שיישארו שלו לנצח. בן עם הלב הכי ענק בעולם גם משם שלח לאמו תמונה עם חמניות וכתב "אולי אני לא בארץ אבל ברגע שראיתי את החמניות רציתי לקנות לכבוד החג אוהב אותך" גם מרחוק כל חג וכל שבת היה מאחל את ברכת השבת שלום והיה מתגעגע לאוכל של אמא. מיד לאחר הטיול החל את לימודיו במכון הטכנולוגי חולון בתור הנדסאי חשמל מוסמך בחסות אלקטרה. בן עבד גם כמציל בקאנטרי עם אביו וכל שבת משפחתו היית מצטרפת לבילוי של שבת איתם.`
    },
    {
        imgSrc: timelineImg7,
        paragraph: `בן חי את החיים! 
קריוקי, ישבות נרגילה , מפגשי מכוניות ואופנועים , לשמח חתן כלה ואירועים רבים שבהם היה כוכב הערב תמיד מסטול בלי אלכוהול , רקדן אוטומטי בכל רמ"ח איבריו,חבר אמיתי אשר נמצא כל הזמן זמין לכל בעיה: "בן לשעת חירום" כך כינו אותו חבריו. לכל חבר בתקופה מאתגרת תמיד אמר " מהלימון תעשה לימונדה" והוכיח עצמו כחבר נפש לעד וכל סביבתו האמינה באופן אישי שהוא האחד המיוחד בעיניו, זו הייתה גדולתו בחייו ובמותו. חברים רבים קעקעו על גופם את בן במגוון דרכים להנצחתו על גופם לתמיד. משפט שהיה שגור במשפחתו של אברהם אבינו " ויהיה כשולחנו של אברהם אבינו כל רעב ממנו יאכל וכל צמא ממנו ישתה" תמיד הבית פתוח לכל חבריו ומכריו בכל חג היה מזמין חברים מבלי לעדכן את אמא וכאמא שואלת "למה לא אמרת?" , היה עונה  : " גם ככה בחיים את לא אומרת לא וברור שאם אין לו איפה לעשות הוא אצלנו" בכל הזדמנות היה הביא חברים ותמיד לסעודת "על הדרך" עם הפיצות של אמא, השניצל והפסטה. 
החיבור בין האחים היה בלתי נפרד, הם היו מלוכדים , אוהבים ונלחמים אחד למען השני , וכמובן לא מפסיקים "לכפכף" אחד את השני היה להם הומור שהיה שייך רק להם ולא פעם אמא צעקה "לכו לישון הצחוק שלכם העיר את השכונה". אחיו יוסי נישא לחן שאת נעוריה העבירה יחד עם השלושה ולא פעם היו מתחרים אחד בשנייה על תשומת הלב של יוסי שחוזר מהצבא. כשהזוג עזבו את הבית נרקם בין שירן לבן קשר עמוק ודואג ,מלא בשיחות נפש בשעות הקטנות של הלילה ששמורות רק להם.
לאחר הנישואין בלילה קסום נולד לבן אחיין אליה "צ'ינוק" אשר מילא את לבו כדוד בפעם הראשונה.(את הלל לא זכה להכיר)
כשאליה היה ישן היה רץ ומעיר אותו בחיבוקים ונשיקות כשברקע אמא הייתה צועקת "אם הוא מתעורר אתה מטפל בו" וכמובן שזה לא היה מרתיע את בן.
הסלגנים שלו חרוטים בלשוננו "חול זה רק תבלין" "אח שלי היקרן" "בואי נתלטף" "בואי נתלחם" "אוהב בארגזים" "בן המכשיר" ועוד שפה שלמה שהייתה מיוחדת רק לו.  
"אני משוגע בסטנדרטים של עצמי" היה חלק ממנו, אף פעם לא פחד להסתלבט על עצמו, תמיד מאמין בדרך שלו בכל דבר בחייו "לעולם אל תתחרט , גם אם טעית בדרך כל כישלון מחזק אותך יותר", משפט זה ליווה אותו תמיד.  
בחברת משפחתו המורחבת תמיד היה מוקד הצחוק והחיוך כל חג הפך לאירוע ארוחה חגיגית וקריוקי עד אור הבוקר וכל חבריו מצטרפים לחגיגה שמחה ומאושרת. החלק האהוב על בן היה בסיום ערב בחג להלהיט את כולם  לצאת לטיול אוהלים ספונטניים ומי בכלל יכול לעמוד בפניו, בתוך שעה כולם מאורגנים עם ציוד אוהלים אוכל, התלהבות שיא ולב מלא בנסיעה אל הכנרת.
בן היה עולם ומלואו של אור, אהבת חינם, ונתינה אין סופית. הוא חי את החיים בעיקר דרך הבטן (שליש מכספו הלך על מסעדות) ואהבתו הגדולה לאופנועים הייתה חלק מרוח חייו ואף הלך ללמוד נהיגה מבצעית למען בטיחותו..
תוך כדי התנדבות במד"א בן הכיר את אהבת חייו סנדרה ומאז לא נפרדו בשנים רבות של אהבה , תמיכה, הכלה צחוק טיולים טיסות לחו"ל ואהבה אינסופית שמשכרת חושים בן כמו כל ג'נטלמן היה גבר רומנטי שהעניק את כולו בזוגיות ובאהבה.
 
 
זה תמצית חייו של בן שלנו.
אנו נמשיך את דרכו של בן שנשארת איתנו אז תדאג להיות הסיבה לחיוך של מישהו אחר ואם נופל בדרכך לעשות מצווה אל תבקש תמורה "את המצווה שעשיתי לך , תעביר את זה הלאה".
`
    }

]


const benVolunteerInfo = [
    {
        title: 'שלח - משצים',
        imgSrc: volunteerPageImg2,
        paragraph: addBreakInString(`בתקופת התיכון בן הצטרף "לתנועת הנוער משצי"ם" (מדרכי של"ח צעירים).  
        בן היה פעיל בפעילויות, לפני כל פעילות היה מגיע לפני כולם כדי לסייע למורה, לסחוב ציוד ולדאוג לכולם. בן אהב את התנועה וגם כשסיים את לימודיו המשיך להתנדב ולצאת איתם למסעות, גם כחובש.`)
    },
    {
        title: 'משטרת ישראל',
        imgSrc: volunteerPageImgPolice,
        paragraph: addBreakInString(`את אהבתו של בן למשטרת ישראל ספג עוד בילדותו מאביו ולאחר מכן מאחיו יוסי.   
        בן העריץ את אביו ואחיו יוסי בדרכם וכשסוף סוף הגיע לתיכון היה לו ברור שגם הוא מתנדב למשטרה.  
        יוסי ובן התנדבו יחד במשמר האזרחי ויצאו לסיורים משותפים מחסומים ובדיקות שיכרות. 
        כשהיו חוזרים הביתה, בן היה מספר בהערצה על פעולותיהם כשהוא ואחיו יוסי ביצעו יחד מרדפים אחרי עבריני תנועה, מחסומים סיורים וכדומה.`)
    },
    {
        title: 'מגן דוד אדום',
        imgSrc: volunteerPageImgMada,
        paragraph: addBreakInString(`מד"א, היא ההתנדבות המועדפת !
        בן הלך ללימודי קורס קבלה למד"א, אך לא עבר את הקורס בפעם הראשונה. כמובן שלא ויתר התעקש ולמד בחירוף נפש עד שעבר והפך לחובש ולאחר מכן לנהג אמבולנס. 
        בן אהב את תפקידו כחובש במד"א, כי האמין שהצלת חיים תלויה ברוב הפעמים במענה הראשוני שניתן לאדם,  לכן בכל פעם שהיה יוצא מהבית, תיק מד"א עשיר במיוחד היה צמוד אליו. לדבריו: "סכנות ופגיעות יכולות להיות בכל רגע ובכל מקום, ואני צריך להיות מוכן לכל תרחיש".`)
    },
    {
        title: 'מחייכים אל החיים',
        imgSrc: volunteerPageImg4,
        paragraph: addBreakInString(`מחייכים אל החיים, 
        התנדבות למען ילדים עם צרכים מיוחדים ומשפחותיהם, שמטרתה לגרום לרגעי כייף ואושר למשפחות "בזכות הילד המיוחד".   
        התנדבות שכל המשפחה התנדבה בה. ובכל מקום שיש התנדבות, בן הראשון לתרום ולהתנדב.`)

    },
    {
        title: 'יום המעשים הטובים',
        imgSrc: volunteerPageImg5,
        paragraph: addBreakInString(`יום המעשים הטובים 
        בכל 19 למרס בכל שנה, בן היה מתנדב בכל פעילות שהתבקש. 
        צביעת מתנסים, הפנינג משפחות (דרך מחייכים אל החיים) וכל פעילות שהייתה מזדמנת בדרכו. 
        וכמובן הכל בחיוך ואהבת חינם.  
        השנה אזכרתו הראשונה 11 חודשים יצאה בדיוק ביום המעשים הטובים, ללא ספק " כלום לא קורה סתם..."`)
    },
    {
        title: 'כנפיים של קרמבו',
        imgSrc: volunteerPageImg6,
        paragraph: addBreakInString(`כנפיים של קרמבו
        ההכרות של בן עם כנפיים של כרמבו הייתה דרך שריתה ממרוט שפועלת ועובדת בעמותה זמן רב. 
        בכל פעילות שנצטרכה סיוע בהתנדבות, פנתה לבן והוא היה מתייצב וממתין למשימות.`)
    },

    {
        title: 'בן אלוף הפנצרים ושרותי דרך',
        imgSrc: volunteerPageImg7,
        paragraph: addBreakInString(`אחד הדברים המדהימים המאפיינים את בן, הוא הסיוע בכל רגע, בכל שעה ובכל מקום שזקוקים לעזרה. 
        כשרכב עמד בצד הכביש, בן היה מיד נעצר אחריו ושואל האם צריך סיוע. 
        כמובן שהכל ללא תמורה, אך הייתה בקשה אחת : את המצווה / העזרה שנתתי לך תמשיך ותסייע לאדם הזקוק לה. `)
    },
]




const aboutBen = addBreakInString(`נעים להכיר קוראים לי בן אברהם רומנו 🙋‍♂
אני בן 25 מבת ים ואשמח לספר לכם את הסיפור שלי🙃 
נולדתי ב-15/11/1997 ואני האח הסנדוויץ' במשפחה, לאחי הגדול קוראים יוסי ולאחותי הקטנה שירן.
מאז ומעולם אנחנו מתגוררים בעיר בת ים.
אני אדם שאוהב את החיים ואת הסובבים שלי. 
גדלתי בבית חם ועוטף כזה שמלא בערכים ואהבה לזולת. לימדו אותי להקשיב, לעצור ולשאול, לדאוג לאלה שיושבים בסוף הכיתה ולהגיד כל בוקר שלום לשכנה. גדלתי בבית שאבי התנדב במשטרה ומשם ירשתי את האהבה להתנדבות. מהר מאוד הבנתי את העוצמה וידעתי גם שזה הייעוד שלי.
ההתנדבות הראשונה שלי, בדיוק כמו אבא שלי - התחלתי במשטרת ישראל ומשם צמחתי והכרתי אנשים מדהימים והתחלתי להיות פעיל בעמותות רבות כמו: משצ״ים, מחייכים אל החיים , כנפיים של קרמבו (יחד עם ילדים ונוער בעלי צרכים מיוחדים), מד"א (כחובש ונהג אמבולנס) ועמותת הילדים שלנו (הפועלת בביה"ח שניידר עבור הילדים החולים ומשפחותיהם) ועוד.
והכי חשוב בעיניי אתם שואלים? זה הדברים הקטנים.
לעזור לשכנה לסחוב את הקניות מהסופר לבית. 
לעזור לאדם שנתקע עם פנצ'ר בצד הכביש.
לקנות לאדם שאין לו מה לאכול אוכל.
לשמח ילדים שמרגישים שאין אף אחד בעולם שאכפת לו מהם.
להפיץ אור ושמחה לא משנה לאן שאני מגיע.`)

export { benTimelineInfo, benVolunteerInfo, aboutBen }