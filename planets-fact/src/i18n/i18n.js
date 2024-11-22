import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            title: "The Planets",
            overview: "Overview",
            structure: "Internal Structure",
            geology: "Surface Geology",
            stats: {
                rotation: "Rotation Time",
                revolution: "Revolution Time",
                radius: "Radius",
                temperature: "Average Temp."
            },
            planets: {
                mercury: {
                    name: "Mercury",
                    overview: {
                        content:
                            "Mercury is the first planet from the Sun and the smallest in the Solar System. In English, it is named after the ancient Roman god Mercurius (Mercury), god of commerce and communication, and the messenger of the gods. Mercury is classified as a terrestrial planet, with roughly the same surface gravity as Mars. The surface of Mercury is heavily cratered, as a result of countless impact events that have accumulated over billions of years. Its largest crater, Caloris Planitia, has a diameter of 1,550 km (960 mi), which is about one-third the diameter of the planet (4,880 km or 3,030 mi). Similarly to the Earth's Moon, Mercury's surface displays an expansive rupes system generated from thrust faults and bright ray systems formed by impact event remnants.",
                        source: "https://en.wikipedia.org/wiki/Mercury_(planet)"
                    },
                    structure: {
                        content:
                            "Mercury appears to have a solid silicate crust and mantle overlying a solid, metallic outer core layer, a deeper liquid core layer, and a solid inner core. The composition of the iron-rich core remains uncertain, but it likely contains nickel, silicon and perhaps sulfur and carbon, plus trace amounts of other elements. The planet's density is the second highest in the Solar System at 5.427 g/cm3, only slightly less than Earth's density of 5.515 g/cm3.",
                        source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
                    },
                    geology: {
                        content:
                            "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than the surface of Mars or the Moon, both of which contain significant stretches of similar geology, such as maria and plateaus.[49] Albedo features are areas of markedly different reflectivity, which include impact craters, the resulting ejecta, and ray systems. Larger albedo features correspond to higher reflectivity plains.",
                        source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
                    },
                    rotation: "58.6 Days",
                    revolution: "87.97 Days",
                    radius: "2,439.7 KM",
                    temperature: "430°c",
                    images: {
                        planet: "/images/planet-mercury.svg",
                        internal: "/images/planet-mercury-internal.svg",
                        geology: "/images/geology-mercury.png"
                    },

                },
                venus: {
                    name: "Venus",
                    overview: {
                        content:
                            "Venus is the second planet from the Sun. It is a terrestrial planet and is the closest in mass and size to its orbital neighbour Earth. Venus has by far the densest atmosphere of the terrestrial planets, composed mostly of carbon dioxide with a thick, global sulfuric acid cloud cover. At the surface it has a mean temperature of 737 K (464 °C; 867 °F) and a pressure 92 times that of Earth's at sea level. These extreme conditions compress carbon dioxide into a supercritical state at Venus's surface.",
                        source: "https://en.wikipedia.org/wiki/Venus"
                    },
                    structure: {
                        content:
                            "Without data from reflection seismology or knowledge of its moment of inertia, little direct information is available about the internal structure and geochemistry of Venus.[72] The similarity in size and density between Venus and Earth suggests that they share a similar internal structure: a core, mantle, and crust. Like that of Earth, the Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate,[73] although a completely solid core cannot be ruled out.",
                        source: "https://en.wikipedia.org/wiki/Venus#Internal_structure"
                    },
                    geology: {
                        content:
                            "The Venusian surface was a subject of speculation until some of its secrets were revealed by planetary science in the 20th century. Venera landers in 1975 and 1982 returned images of a surface covered in sediment and relatively angular rocks. The surface was mapped in detail by Magellan in 1990–91. The ground shows evidence of extensive volcanism, and the sulphur in the atmosphere may indicate that there have been recent eruptions..",
                        source: "https://en.wikipedia.org/wiki/Venus#Surface_geology"
                    },
                    rotation: "243 Days",
                    revolution: "224.7 Days",
                    radius: "6,051.8 KM",
                    temperature: "471°c",
                    images: {
                        planet: "/images/planet-venus.svg",
                        internal: "/images/planet-venus-internal.svg",
                        geology: "/images/geology-venus.png"
                    }
                },

                earth: {
                    name: "Earth",
                    overview: {
                        content:
                            "Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being an ocean world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust. The remaining 29.2% of Earth's crust is land, most of which is located in the form of continental landmasses within Earth's land hemisphere. Most of Earth's land is at least somewhat humid and covered by vegetation, while large sheets of ice at Earth's polar deserts retain more water than Earth's groundwater, lakes, rivers and atmospheric water combined. Earth's crust consists of slowly moving tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes. Earth has a liquid outer core that generates a magnetosphere capable of deflecting most of the destructive solar winds and cosmic radiation.",
                        source: "https://en.wikipedia.org/wiki/Earth"
                    },
                    structure: {
                        content:
                            "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle. The crust is separated from the mantle by the Mohorovičić discontinuity.[130] The thickness of the crust varies from about 6 kilometres (3.7 mi) under the oceans to 30–50 km (19–31 mi) for the continents. The crust and the cold, rigid, top of the upper mantle are collectively known as the lithosphere, which is divided into independently moving tectonic plates.",
                        source: "https://en.wikipedia.org/wiki/Earth#Internal_structure"
                    },
                    geology: {
                        content:
                            "Earth's surface is the boundary between the atmosphere, and the solid Earth and oceans. Defined in this way, it has an area of about 510 million km2 (197 million sq mi). Earth can be divided into two hemispheres: by latitude into the polar Northern and Southern hemispheres; or by longitude into the continental Eastern and Western hemispheres.",
                        source: "https://en.wikipedia.org/wiki/Earth#Surface"
                    },
                    rotation: "0.99 Days",
                    revolution: "365.26 Days",
                    radius: "6,371 KM",
                    temperature: "16°c",
                    images: {
                        planet: "/images/planet-earth.svg",
                        internal: "/images/planet-earth-internal.svg",
                        geology: "/images/geology-earth.png"
                    }
                },
                mars: {
                    name: "Mars",
                    overview: {
                        content:
                            "Mars is the fourth planet from the Sun. The surface of Mars is orange-red because it is covered in iron(III) oxide dust, giving it the nickname the Red Planet. Mars is among the brightest objects in Earth's sky, and its high-contrast albedo features have made it a common subject for telescope viewing. It is classified as a terrestrial planet and is the second smallest of the Solar System's planets with a diameter of 6,779 km (4,212 mi). In terms of orbital motion, a Martian solar day (sol) is equal to 24.6 hours, and a Martian solar year is equal to 1.88 Earth years (687 Earth days). Mars has two natural satellites that are small and irregular in shape: Phobos and Deimos.",
                        source: "https://en.wikipedia.org/wiki/Mars"
                    },
                    structure: {
                        content:
                            "Like Earth, Mars is differentiated into a dense metallic core overlaid by less dense rocky layers. The outermost layer is the crust, which is on average about 42–56 kilometres (26–35 mi) thick,with a minimum thickness of 6 kilometres (3.7 mi) in Isidis Planitia, and a maximum thickness of 117 kilometres (73 mi) in the southern Tharsis plateau. For comparison, Earth's crust averages 27.3 ± 4.8 km in thickness. The most abundant elements in the Martian crust are silicon, oxygen, iron, magnesium, aluminium, calcium, and potassium. Mars is confirmed to be seismically active; in 2019 it was reported that InSight had detected and recorded over 450 marsquakes and related events",
                        source: "https://en.wikipedia.org/wiki/Mars#Internal_structure"
                    },
                    geology: {
                        content:
                            "Mars is a terrestrial planet with a surface that consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The Martian surface is primarily composed of tholeiitic basalt,[59] although parts are more silica-rich than typical basalt and may be similar to andesitic rocks on Earth, or silica glass. Regions of low albedo suggest concentrations of plagioclase feldspar, with northern low albedo regions displaying higher than normal concentrations of sheet silicates and high-silicon glass. Parts of the southern highlands include detectable amounts of high-calcium pyroxenes. Localized concentrations of hematite and olivine have been found.[60] Much of the surface is deeply covered by finely grained iron(III) oxide dust",
                        source: "https://en.wikipedia.org/wiki/Mars#Surface_geology"
                    },
                    rotation: "1.03 Days",
                    revolution: "1.88 Years",
                    radius: "3,389.5 KM",
                    temperature: "-28°c",
                    images: {
                        planet: "/images/planet-mars.svg",
                        internal: "/images/planet-mars-internal.svg",
                        geology: "/images/geology-mars.png"
                    }
                },
                jupiter: {
                    name: "Jupiter",
                    overview: {
                        content:
                            "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than 2.5 times that of all the other planets in the Solar System combined and slightly less than one-thousandth the mass of the Sun. Its diameter is eleven times that of Earth, and a tenth that of the Sun. Jupiter orbits the Sun at a distance of 5.20 AU (778.5 Gm), with an orbital period of 11.86 years. It is the third brightest natural object in the Earth's night sky, after the Moon and Venus, and has been observed since prehistoric times. Its name derives from that of Jupiter, the chief deity of ancient Roman religion.",
                        source: "https://en.wikipedia.org/wiki/Jupiter"
                    },
                    structure: {
                        content:
                            "Before the early 21st century, most scientists proposed one of two scenarios for the formation of Jupiter. If the planet accreted first as a solid body, it would consist of a dense core, a surrounding layer of fluid metallic hydrogen (with some helium) extending outward to about 80% of the radius of the planet,[74] and an outer atmosphere consisting primarily of molecular hydrogen.[72] Alternatively, if the planet collapsed directly from the gaseous protoplanetary disk, it was expected to completely lack a core, consisting instead of a denser and denser fluid (predominantly molecular and metallic hydrogen) all the way to the centre.",
                        source: "https://en.wikipedia.org/wiki/Jupiter#Internal_structure"
                    },
                    geology: {
                        content:
                            "TA well-known feature of Jupiter is the Great Red Spot,[102] a persistent anticyclonic storm located 22° south of the equator. It was first observed in 1831,[103] and possibly as early as 1665.[104][105] Images by the Hubble Space Telescope have shown two more \"red spots\" adjacent to the Great Red Spot.[106][107] The storm is visible through Earth-based telescopes with an aperture of 12 cm or larger.[108] The storm rotates counterclockwise, with a period of about six days.[109] The maximum altitude of this storm is about 8 km (5 mi) above the surrounding cloud tops.[110] The Spot's composition and the source of its red colour remain uncertain, although photodissociated ammonia reacting with acetylene is a likely explanation.",
                        source: "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices"
                    },
                    rotation: "9.93 Hours",
                    revolution: "11.86 Years",
                    radius: "69,911 KM",
                    temperature: "-108°c",
                    images: {
                        planet: "/images/planet-jupiter.svg",
                        internal: "/images/planet-jupiter-internal.svg",
                        geology: "/images/geology-jupiter.png"
                    }
                },
                satrun: {
                    name: "Saturn",
                    overview: {
                        content:
                            "Saturn is the sixth planet from the Sun and the second largest in the Solar System, after Jupiter. It is a gas giant, with an average radius of about nine times that of Earth. It has an eighth the average density of Earth, but is over 95 times more massive. Even though Saturn is almost as big as Jupiter, Saturn has less than a third the mass of Jupiter. Saturn orbits the Sun at a distance of 9.59 AU (1,434 million km), with an orbital period of 29.45 years.",
                        source: "https://en.wikipedia.org/wiki/Saturn"
                    },
                    structure: {
                        content:
                            "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass. The temperature, pressure, and density inside Saturn all rise steadily toward the core, which causes hydrogen to be a metal in the deeper layers.",
                        source: "https://en.wikipedia.org/wiki/Saturn#Internal_structure"
                    },
                    geology: {
                        content:
                            "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The proportion of helium is significantly deficient compared to the abundance of this element in the Sun.[42] The quantity of elements heavier than helium (metallicity) is not known precisely, but the proportions are assumed to match the primordial abundances from the formation of the Solar System. The total mass of these heavier elements is estimated to be 19–31 times the mass of Earth, with a significant fraction located in Saturn's core region.",
                        source: "https://en.wikipedia.org/wiki/Saturn#Atmosphere"
                    },
                    rotation: "10.8 Hours",
                    revolution: "29.46 Years",
                    radius: "58,232 KM",
                    temperature: "-138°c",
                    images: {
                        planet: "/images/planet-saturn.svg",
                        internal: "/images/planet-saturn-internal.svg",
                        geology: "/images/geology-saturn.png"
                    }
                },
                uranus: {
                    name: "Uranus",
                    overview: {
                        content:
                            "Uranus is the seventh planet from the Sun. It is a gaseous cyan-coloured ice giant. Most of the planet is made of water, ammonia, and methane in a supercritical phase of matter, which astronomy calls \"ice\" or volatiles. The planet's atmosphere has a complex layered cloud structure and has the lowest minimum temperature (49 K (−224 °C; −371 °F)) of all the Solar System's planets. It has a marked axial tilt of 82.23° with a retrograde rotation period of 17 hours and 14 minutes. This means that in an 84-Earth-year orbital period around the Sun, its poles get around 42 years of continuous sunlight, followed by 42 years of continuous darkness.",
                        source: "https://en.wikipedia.org/wiki/Uranus"
                    },
                    structure: {
                        content:
                            "Uranus's mass is roughly 14.5 times that of Earth, making it the least massive of the giant planets. Its diameter is slightly larger than Neptune's at roughly four times that of Earth. A resulting density of 1.27 g/cm3 makes Uranus the second least dense planet, after Saturn.[11][12] This value indicates that it is made primarily of various ices, such as water, ammonia, and methane. The total mass of ice in Uranus's interior is not precisely known, because different figures emerge depending on the model chosen; it must be between 9.3 and 13.5 Earth masses.",
                        source: "https://en.wikipedia.org/wiki/Uranus#Internal_structure"
                    },
                    geology: {
                        content:
                            "Although there is no well-defined solid surface within Uranus's interior, the outermost part of Uranus's gaseous envelope that is accessible to remote sensing is called its atmosphere.[18] Remote-sensing capability extends down to roughly 300 km below the 1 bar (100 kPa) level, with a corresponding pressure around 100 bar (10 MPa) and temperature of 320 K (47 °C; 116 °F).[100] The tenuous thermosphere extends over two planetary radii from the nominal surface, which is defined to lie at a pressure of 1 bar.[101] The Uranian atmosphere can be divided into three layers: the troposphere, between altitudes of −300 and 50 km (−186 and 31 mi) and pressures from 100 to 0.1 bar (10 MPa to 10 kPa); the stratosphere, spanning altitudes between 50 and 4,000 km (31 and 2,485 mi) and pressures of between 0.1 and 10−10 bar (10 kPa to 10 μPa); and the thermosphere extending from 4,000 km to as high as 50,000 km from the surface.",
                        source: "https://en.wikipedia.org/wiki/Uranus#Atmosphere"
                    },
                    rotation: "17.2 Hours",
                    revolution: "84 Years",
                    radius: "25,362 KM",
                    temperature: "-195°c",
                    images: {
                        planet: "/images/planet-uranus.svg",
                        internal: "/images/planet-uranus-internal.svg",
                        geology: "/images/geology-uranus.png"
                    }
                },
                neptune: {
                    name: "Neptune",
                    overview: {
                        content:
                            "Neptune is the eighth and farthest known planet from the Sun. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth. Compared to its fellow ice giant Uranus, Neptune is slightly more massive, but denser and smaller. Being composed primarily of gases and liquids, it has no well-defined solid surface, and orbits the Sun once every 164.8 years at an orbital distance of 30.1 astronomical units (4.5 billion kilometres; 2.8 billion miles). It is named after the Roman god of the sea and has the astronomical symbol ♆, representing Neptune's trident.",
                        source: "https://en.wikipedia.org/wiki/Neptune"
                    },
                    structure: {
                        content:
                            "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5 to 10% of its mass and extends perhaps 10 to 20% of the way towards the core. Pressure in the atmosphere reaches about 10 GPa, or about 105 atmospheres. Increasing concentrations of methane, ammonia and water are found in the lower regions of the atmosphere",
                        source: "https://en.wikipedia.org/wiki/Neptune#Internal_structure"
                    },
                    geology: {
                        content:
                            "At high altitudes, Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum. As with Uranus, this absorption of red light by atmospheric methane is part of what gives Neptune its faint blue hue, which is more pronounced for Neptune's due to concentrated haze in Uranus's atmosphere.",
                        source: "https://en.wikipedia.org/wiki/Neptune#Atmosphere"
                    },
                    rotation: "16.08 Hours",
                    revolution: "164.79 Years",
                    radius: "24,622 KM",
                    temperature: "-201°c",
                    images: {
                        planet: "/images/planet-neptune.svg",
                        internal: "/images/planet-neptune-internal.svg",
                        geology: "/images/geology-neptune.png"
                    }
                }


            }
        }
    },
    fa: {
        translation: {
            title: " سیارات منظومۀ شمسی",
            overview: "نمای کلی",
            structure: "ساختار داخلی",
            geology: "زمین‌شناسی سطح",
            stats: {
                rotation: "زمان چرخش",
                revolution: "زمان گردش",
                radius: "شعاع",
                temperature: "میانگین دما"
            },
            planets: {
                mercury: {
                    name: "عطارد",
                    overview: {
                        content: "تیر یا عُطارِد نزدیک‌ترین سیاره به خورشید در منظومهٔ شمسی و تندروترین سیارهٔ این منظومه است که با سرعتی حدود ۴۷٫۳۲ کیلومتر بر ثانیه، هر ۸۸ روز یکبار خورشید را دور می‌زند. از این رو سیاره‌ای گریزپا است و به همین دلیل است که، ایرانیان باستان آن را «تیر» نامیده‌اند. در روم باستان «مِرکوری» یا «پیک خدایان» لقبش داده بودند و نام یونانی آن هرمس خدای سرعت بوده‌است.",
                        source: "https://fa.wikipedia.org/wiki/عطارد"
                    },
                    structure: {
                        content:
                            "این سیاره از دسته سیاره‌های زمین‌سان است. عطارد همچون ناهید و ماه، حالت‌های گوناگونی از هلال تا قرص کامل را به خود می‌گیرد. قرص کامل، چون در آن سوی خورشید است دیده نمی‌شود. اما اشکال هلالی و نیمهٔ آن به هنگام جلوه‌های شرقی و غربی، مشاهده می‌گردند\n. نیروی گرانش این سیاره کم و دارای جو ناچیزی است که ۹۸٪ آن از هلیم و بقیه از هیدروژن، اکسیژن و سدیم ساخته شده‌است. بادهای خورشیدی به شدت به عطارد می‌دمند و این می‌رساند که تقریباً هیچ هوایی در آن وجود ندارد.",
                        source: "https://fa.wikipedia.org/wiki/%D8%B9%D8%B7%D8%A7%D8%B1%D8%AF#%D9%88%DB%8C%DA%98%DA%AF%DB%8C%E2%80%8C%D9%87%D8%A7"
                    },
                    geology: {
                        content:
                            "دانشمندان هنوز نمی‌دانند که فعالیت‌های آتشفشانی این سیاره سنگی، چقدر به طول انجامیده. سن دشت‌های گدازه‌ای‌اش را می‌توان به عصر «بمباران سهمگین متأخر»، یا حدود ۴ میلیارد سال پیش نسبت داد؛ که در جریانش اعضای منظومه شمسی، آماج برخورد شهابسنگ‌های غول‌آسا واقع می‌شدند. به محض کاهش آمار این برخوردها بود که گدازه در سرتاسر عطارد جریان یافت و با پر کردن گودال‌ها، عوارض نرم و مسطحی را به وجود آورد. فرو زمین‌ها هم در همین گودال‌ها به وجود آمدند و در واقع تنها نقاطی به‌شمار می‌رفتند که بستر سنگیِ سیاره در آن‌ها «منبسط» (و نه منقبض) می‌شد.در دشت‌های آتشفشانی عطارد عوارض نامتعارفی وجود دارد که بیشتر شبیه «کلوچه» های کیهانی‌اند و هیچ‌گونه نمونه مشابهی در سایر نقاط منظومه‌مان ندارند. این «کلوچه‌ها» سازه‌های دوار و غول‌آسایی هستند که مرز گودال‌های مدفون را مشخص کرده‌اند و خودْ از چین‌خوردگیهای درونی و عوارضی موسوم به «فروزمین» پر شده‌اند؛ یعنی باریکه‌هایی که در مرز دو گسل موازی، فرو نشسته‌اند.",
                        source: "https://fa.wikipedia.org/wiki/%D8%B9%D8%B7%D8%A7%D8%B1%D8%AF#%D9%85%D8%AF%D8%A7%D8%B1%D8%8C_%DA%AF%D8%B1%D8%AF%D8%B4_%D9%88%D8%B6%D8%B9%DB%8C_%D9%88_%D8%B7%D9%88%D9%84_%D8%AC%D8%BA%D8%B1%D8%A7%D9%81%DB%8C%D8%A7%DB%8C%DB%8C"
                    },
                    rotation: "۵۸.۸ روز",
                    revolution: "۸۷.۹۷ روز",
                    radius: "۲,۴۳۹.۷ کیلومتر",
                    temperature: "۴۳۰°c",
                    images: {
                        planet: "/images/planet-mercury.svg",
                        internal: "/images/planet-mercury-internal.svg",
                        geology: "/images/geology-mercury.png"
                    },

                },
                venus: {
                    name: "زهره",
                    overview: {
                        content: "ناهید یا زهره به ترتیب نزدیکی به خورشید، دومین سیارهٔ زمین‌سان سامانهٔ خورشیدی است که در هر ۲۲۵ روز یکبار به دور خورشید می‌چرخد. مدار زهره، میان مدارهای زمین و تیر قرار گرفته و از نظر مداری، نزدیک‌ترین فاصله را با مدار زمین دارد. ناهید پس از ماه، درخشان‌ترین جرم آسمانی طبیعی است که به هنگام شب در آسمان زمین دیده می‌شود و قدر ظاهری آن به ۴٫۶- می‌رسد. در زبان لاتین به این سیاره وُنوس می‌گویند که به معنی خدای عشق و زیبایی در روم باستان است.",
                        source: "https://en.wikipedia.org/wiki/Venus"
                    },
                    structure: {
                        "content": "شباهت در اندازه و چگالی بین زهره و زمین نشان می‌دهد که آن‌ها ساختار داخلی مشابهی دارند: هسته، گوشته و پوسته. مانند زمین، احتمالاً هسته زهره نیز حداقل به صورت جزئی مایع است زیرا این دو سیاره با تقریباً همان نرخ در حال خنک شدن هستند.",
                        "source": "https://fa.wikipedia.org/wiki/زهره#ساختار_داخلی"
                    },
                    geology: {
                        content: "بخش زیادی از سطح زهره به نظر می‌رسد که توسط فعالیت‌های آتشفشانی شکل گرفته است. زهره چندین برابر زمین آتشفشان دارد و دارای ۱۶۷ آتشفشان بزرگ است که بیش از ۱۰۰ کیلومتر (۶۰ مایل) عرض دارند. تنها مجموعه آتشفشانی با این اندازه در زمین جزیره بزرگ هاوایی است.",
                        "source": "https://fa.wikipedia.org/wiki/زهره#زمین‌شناسی_سطح"
                    },
                    "rotation": "۲۴۳ روز",
                    "revolution": "۲۲۴.۷ روز",
                    "radius": "۶۰۵۱.۸ کیلومتر",
                    "temperature": "۴۷۱ درجه سانتی‌گراد",

                    images: {
                        planet: "/images/planet-venus.svg",
                        internal: "/images/planet-venus-internal.svg",
                        geology: "/images/geology-venus.png"
                    }
                },

                earth: {
                    name: "زمین",
                    overview: {
                        content:
                            "زَمین سومین سیارهٔ سامانه خورشیدی است که در فاصلهٔ ۱۴۹٬۶۰۰٬۰۰۰ کیلومتر از ستارهٔ خورشید قرار گرفته که از نظر واژه‌شناسی ایرانی، زم در زبان اوستایی به معنای سرد بوده است که با پسوند «ین»، واژهٔ زمین را به معنای «جسم سرد» به وجود آورده است. نام این سیاره در زبان عربی «الأرض» (جمع: اراضی) است و نام زمین تنها نام فارسی و غیر عربی یک سیاره در سامانهٔ خورشیدی است که به‌طور گسترده در فارسی رایج است. این سیاره چگال‌ترین (به دلیل دارا بودن منابع وسیع آهن و فلزات دیگر) و از نظر بزرگی پنجمین سیاره از هشت سیارهٔ منظومهٔ شمسی است. همچنین در میان چهار سیارهٔ سنگی گردان به دور خورشید (عطارد، زهره، زمین و مریخ) زمین بزرگ‌ترین آن‌ها است. گاهی از آن با نام‌های جهان و تیله آبی نیز یاد می‌شود. نام لاتین آن Terra است. در منظومهٔ شمسی، فاصلهٔ زمین تا خورشید بین فاصلهٔ زهره تا خورشید و فاصلهٔ مریخ تا خورشید است. زمین جزو سیارات داخلی سامانهٔ خورشیدی به‌شمار می‌آید. زمین ششمین جسم در منظومهٔ شمسی بر پایهٔ جرم و حجم است.",
                        source: "https://fa.wikipedia.org/wiki/%D8%B2%D9%85%DB%8C%D9%86"
                    },
                    structure: {
                        content:
                            "زمین یک سیارهٔ سنگی است یعنی به جای آنکه مانند سیارهٔ هرمز یک غول گازی باشد، از خاک و سنگ ساخته است. زمین در جرم و حجم در میان چهار سیارهٔ سنگی سامانهٔ خورشیدی در جایگاه نخست قرار دارد. همچنین زمین در میان آن‌ها از بیشترین چگالی و گرانش سطحی، نیرومندترین میدان مغناطیسی و سریع‌ترین سرعت در گردش برخوردار است[۸۷] و احتمالاً تنها سیاره‌ای است که صفحه‌های زمین‌ساخت بشقابی آن فعال‌اند.",
                        source: "https://fa.wikipedia.org/wiki/%D8%B2%D9%85%DB%8C%D9%86#%D8%B3%D8%A7%D8%AE%D8%AA%D8%A7%D8%B1_%D9%88_%D8%B3%D8%A7%D8%B2%D9%87%D9%94_%D8%B2%D9%85%DB%8C%D9%86"
                    },
                    geology: {
                        content:
                            "شکل زمین مانند یک کره است با این تفاوت که بر روی دو قطب آن و در راستای محور میان آن دو، دچار پهن شدگی و در گرداگرد استوا دچار بیرون زدگی شده است (شکم داده است).[۹۰] این بیرون زدگی در ناحیهٔ استوا، به دلیل گردش زمین به وجود آمده است و باعث ایجاد اختلاف ۴۳ کیلومتری میان قطر زمین در مدار استوایی و قطر آن میان دو قطب شده است.",
                        source: "https://fa.wikipedia.org/wiki/%D8%B2%D9%85%DB%8C%D9%86#%D8%B3%D8%A7%D8%AE%D8%AA%D8%A7%D8%B1_%D9%88_%D8%B3%D8%A7%D8%B2%D9%87%D9%94_%D8%B2%D9%85%DB%8C%D9%86"
                    },
                    rotation: "۰.۹۹ روز",
                    revolution: "۳۶۵.۲۶ روز",
                    radius: "۶٬۳۷۱ کیلومتر",
                    temperature: "۱۶ درجه سانتی‌گراد",
                    images: {
                        planet: "/images/planet-earth.svg",
                        internal: "/images/planet-earth-internal.svg",
                        geology: "/images/geology-earth.png"
                    }
                },
                mars: {
                    name: "مریخ",
                    overview: {
                        content:
                            'مریخ یا بهرام چهارمین سیاره در منظومهٔ شمسی است که در یک مدار طولانی‌تر و با سرعتی کمتر از زمین به دور خورشید می‌چرخد. هر یک بار گردش این سیاره به دور خورشید معادل ۶۸۷ شبانه‌روز زمین طول می‌کشد و طول شب و روز آن از زمین کمی طولانی‌تر است.نام فارسی این سیاره بهرام و نام عربی-یونانی آن مِریخ است. در کتاب‌های قدیمی فارسی آن را فلک شحنهٔ پنجم و سایس رواق پنجم نیز نامیده‌اند.',
                        source: "https://fa.wikipedia.org/wiki/%D9%85%D8%B1%DB%8C%D8%AE#"
                    },
                    structure: {
                        content:
                            "مریخ از زمین کم چگالی‌تر است، به گونه‌ای که حجمی برابر ۱۵٪ و جرمی برابر ۱۱٪ زمین دارد. مساحت سطح آن تنها اندکی کمتر از مجموع سطوح خشکی‌های زمین است. مریخ در برابر عطارد بزرگتر و دارای جرم بیشتر و در نتیجه چگالی‌تر است. همین زمینه سبب شده‌است نیروی گرانش بیشتری در سطح مریخ وجود داشته باشد. مریخ از نظر میزان حجم و جرم، هشتمین جسم در منظومهٔ شمسی است.",
                        source: "https://fa.wikipedia.org/wiki/%D9%85%D8%B1%DB%8C%D8%AE#%D9%88%DB%8C%DA%98%DA%AF%DB%8C%E2%80%8C%D9%87%D8%A7%DB%8C_%D9%81%DB%8C%D8%B2%DB%8C%DA%A9%DB%8C"
                    },
                    geology: {
                        content:
                            "جو زمین شامل ۷۸ درصد نیتروژن، ۲۱ درصد اکسیژن، ۰٫۹ درصد آرگون، ۰٫۰۳ درصد کربن دی‌اکسید و مقادیری بخار آب و ذرات معلق است. در حالی که در جو مریخ ۹۵ درصد دی‌اکسید کربن، ۳ درصد نیتروژن، ۱٫۶ درصد آرگون و فقط مقدار ناچیز اکسیژن و آب وجود دارد. جو سیارهٔ سرخ بسیار رقیق است، به‌طوری‌که فشار جوی سطح آن معادل یک صدم فشار جو زمین در سطح دریاست. افزون‌بر این جو مریخ محافظ خوبی در برابر تابش‌های مرگبار فضایی نیست.بیشتر مناطق مریخ بسیار سرد است. دمای هوا در قطب‌های آن می‌تواند تا ۱۳۰ درجه زیر صفر پایین برود.",
                        source: "https://fa.wikipedia.org/wiki/%D9%85%D8%B1%DB%8C%D8%AE#%D8%AC%D9%88"
                    },
                    "rotation": "۱.۰۳ روز",
                    "revolution": "۱.۸۸ سال",
                    "radius": "۳٬۳۸۹.۵ کیلومتر",
                    "temperature": "۲۸- درجه سانتی‌گراد",
                    images: {
                        planet: "/images/planet-mars.svg",
                        internal: "/images/planet-mars-internal.svg",
                        geology: "/images/geology-mars.png"
                    }
                },
                jupiter: {
                    name: "مشتری",
                    overview: {
                        content:
                            "مُشتَری یا هُرمُز(که به نام‌های بِرجیس، اورمزد، زاوش، ژوپیتر نیز شناخته می‌شود)، بزرگ‌ترین سیاره در منظومهٔ شمسی است. این سیارهٔ غول گازی با جرم یک‌هزارم خورشید است، ولی جرمی دو و نیم برابر تمامی دیگر سیاره‌های منظومهٔ شمسی دارد و دومین جسم در منظومهٔ شمسی بر پایهٔ جرم و حجم است. از نظر دوری از خورشید، مشتری پنجمین سیاره پس از تیر، ناهید، زمین و بهرام است.این سیاره یک سیاره گازی است که از هیدروژن و هلیم تشکیل شده است و هیچ سطح جامدی ندارد. مشتری دارای چندین حلقه و بیش از صد قمر است",
                        source: "https://fa.wikipedia.org/wiki/%D9%85%D8%B4%D8%AA%D8%B1%DB%8C_(%D8%B3%DB%8C%D8%A7%D8%B1%D9%87)#"
                    },
                    structure: {
                        content:
                            "جرم مشتری به تنهایی ۲٫۵ برابر جرم تمام سیاره‌های دیگر در منظومهٔ خورشیدی است. نسبت جرم این سیاره به اندازه‌ای است که مرکز سنگینی سراسری آن با خورشید بالاتر از سطح خورشید، در ۱٬۰۶۸ برابر شعاع خورشید (فاصله از مرکز خورشید) قرار می‌گیرد. حجم مشتری ۱٬۳۲۱ برابر حجم زمین و جرم آن تنها ۳۱۸٫۵ برابر زمین است. این نسبت، زمین را به‌طور قابل توجهی متراکم‌تر از مشتری نشان می‌دهد.[۱۲] شعاع مشتری حدود یک‌دهم شعاع خورشید است و جرم آن ۰٫۰۰۱ برابر جرم خورشید است، بنابراین چگالی این دو با هم مشابه است.",
                        source: "https://fa.wikipedia.org/wiki/%D9%85%D8%B4%D8%AA%D8%B1%DB%8C_(%D8%B3%DB%8C%D8%A7%D8%B1%D9%87)#%D9%88%DB%8C%DA%98%DA%AF%DB%8C%E2%80%8C%D9%87%D8%A7%DB%8C_%D9%81%DB%8C%D8%B2%DB%8C%DA%A9%DB%8C"
                    },
                    geology: {
                        content:
                            "مشتری، گوی غول‌پیکری آمیخته از گاز و مایع است و گمان می‌رود مقداری سطح جامد هم داشته باشد. بین ۸۸ تا ۹۲ درصد این غول سیاره از عنصر هیدروژن و ۸ تا ۱۲ درصد آن از هلیوم تشکیل شده‌است. قطر مشتری در ناحیهٔ استوا ۱۴۲٬۹۸۴ کیلومتر است و بر اساس نظریه‌های ارائه شده این بالاترین طول قطری است که یک سیارهٔ گازی می‌تواند داشته باشد. از این پس، ورود جرم بیشتر این غول سیاره را کوچک‌تر، و فشرده‌تر می‌کند. بنابر اصل ناپایداری کلوین–هلمهولتز هم‌اکنون سالانه حدود ۲ سانتی‌متر از قطر مشتری کاسته می‌شود.",
                        source: "https://fa.wikipedia.org/wiki/%D9%85%D8%B4%D8%AA%D8%B1%DB%8C_(%D8%B3%DB%8C%D8%A7%D8%B1%D9%87)#%D8%AC%D9%88"
                    },
                    "rotation": "۹.۹۳ ساعت",
                    "revolution": "۱۱.۸۶ سال",
                    "radius": "۶۹٬۹۱۱ کیلومتر",
                    "temperature": "۱۰۸- درجه سانتی‌گراد"
                    ,
                    images: {
                        planet: "/images/planet-jupiter.svg",
                        internal: "/images/planet-jupiter-internal.svg",
                        geology: "/images/geology-jupiter.png"
                    }
                },
                saturn: {
                    name: "زحل",
                    overview: {
                        content:
                            "زحل یا کیوان (به انگلیسی :saturn)، بعد از سیارهٔ مشتری، دومین سیارهٔ بزرگ منظومه شمسی و ششمین سیارهٔ نزدیک به خورشید است. زحل یک گلولهٔ گازی غول‌پیکر است که با وجود حجم زیادش تنها ۹۵٫۱۵۹ برابر زمین جرم دارد. چگالی این سیاره حدود یک‌هشتم زمین و کمتر از آب است. یک روز کامل در زحل برابر ۱۰ ساعت و ۳۹ دقیقه در زمین و یک سال آن ۲۹٫۵ برابر سال زمین است. از آنجایی که مدار استوایی زحل تقریباً همانند زمین در ۲۷ درجه است، تغییرات زاویهٔ سیاره نسبت به خورشید شبیه به زمین است و در این سیاره نیز همان چهار فصل مشاهده می‌شود. جرم این سیارهٔ همانند مشتری از گاز است که بیشتر آن را هیدروژن تشکیل می‌دهد. میزان اندکی هلیوم و متان در رده‌های بعدی گازهای تشکیل‌دهندهٔ سیاره قرار دارند.",
                        source: "https://fa.wikipedia.org/wiki/%D8%B2%D8%AD%D9%84#"
                    },
                    structure: {
                        content:
                            "زحل کمی از مشتری کوچک‌تر است و جرم آن کمتر از جرم مشتری و در حدود ۹۵ برابر جرم زمین است. زحل سومین جسم در سامانهٔ خورشیدی بر پایهٔ جرم و حجم می‌باشد. زحل یک غول گازی است زیرا سطح آن به صورت کلی از گاز تشکیل شده است با اینکه ممکن است دارای یک هستهٔ جامد باشد. زحل کمترین میانگین چگالی را نسبت به سایر سیارات سامانه خورشیدی دارد. اگر بتوان زحل را در دریایی عظیم انداخت این سیاره بر روی آب شناور می‌ماند. اندازهٔ شعاع این سیاره در منطقه‌های استوایی با مقدار آن در قطب‌ها نزدیک به ۱۰٪ متفاوت است؛ ۶۰٫۲۶۸ کیلومتر در برابر ۵۴٫۳۶۴ کیلومتر. درون زحل می‌تواند ترکیب مشتری را داشته‌باشد. برآوردهای نظری مقدارهایی حدود ۷۴٪ هیدروژن، ۲۴٪ هلیوم، ۲٪ عناصر سنگین‌تر را پیشنهاد می‌کند. این ترکیب تقریباً مشابه ترکیبات خورشید است. گمان می‌رود زحل دارای یک هستهٔ سنگین کوچک به قطر ۲۰ هزار کیلومتر و جرمی معادل ۲۰Mφ باشد.",
                        source: "https://fa.wikipedia.org/wiki/%D8%B2%D8%AD%D9%84#%D9%88%DB%8C%DA%98%DA%AF%DB%8C%E2%80%8C%D9%87%D8%A7%DB%8C_%D9%81%DB%8C%D8%B2%DB%8C%DA%A9%DB%8C"
                    },
                    geology: {
                        content:
                            "ساختار جو زحل با کمربندهایی که به موازات استوا امتداد دارند، همانند مشتری است؛ هرچند آشفتگی‌های این کمربندها بسیار کمتر از مشتری است (تاکنون از روی زمین فقط ۱۰ لکه مشاهده شده‌اند). ترکیب جو زحل نیز شباهت زیادی با جو مشتری دارد. تاکنون متان (CH4)، آمونیاک (NH3)، اتان (C2H6)، فسفین (PH3)، استیلن (C2H2)، متیل استیل (C3H4)، پروپان (C3H8) و هیدروژن مولکولی (H2) آشکار شده‌است. لایه خارجی زحل دارای ۹۶٫۳٪ هیدروژن و ۳٫۲۵٪ هلیم می‌باشد. درصد المان‌های دیگر به صورت کامل مشخص نیست ولیکن تصور می‌شود درصد بسیار کمی از آنان وجود داشته باشد. ابرهای زحل خیلی کمرنگ تر از ابرهای مشتری به نظر می‌رسند. ابرهای مشتری اغلب به رنگ زرد کم‌رنگ و نارنجی هستند، به این دلیل که دما در زحل کمتر از مشتری است، ابرهای زحل در لایه پایین‌تری از جو آن قرار می‌گیرند.",
                        source: "https://en.wikipedia.org/wiki/Saturn#Atmosphere"
                    },
                    "rotation": "۱۰.۸ ساعت",
                    "revolution": "۲۹.۴۶ سال",
                    "radius": "۵۸٬۲۳۲ کیلومتر",
                    "temperature": "۱۳۸- درجه سانتی‌گراد"
                    ,
                    images: {
                        planet: "/images/planet-saturn.svg",
                        internal: "/images/planet-saturn-internal.svg",
                        geology: "/images/geology-saturn.png"
                    }
                },
                uranus: {
                    name: "اورانوس",
                    overview: {
                        content:
                            "اورانوس هفتمین سیاره از نظر نزدیکی به خورشیدو سومین سیاره از نظر اندازه و چهارمین سیاره از نظر جرم در سامانه خورشیدی است. اورانوس هر ۸۴ سال و ۷ روز یکبار به دور خورشید می‌گردد. همچنین هر ۱۷ ساعت و ۱۴ دقیقه یک دور به دور خودش می‌چرخد. اورانوس دارای بیش از ۲۷ قمر است که میراندا، آریل، آمبریل، تیتانیا و اوبرون از شناخته‌شده‌ترین آن‌ها هستند. این سیاره را ویلیام هرشل در سال ۱۷۸۱ میلادی کشف کرد",
                        source: "https://fa.wikipedia.org/wiki/%D8%A7%D9%88%D8%B1%D8%A7%D9%86%D9%88%D8%B3"
                    },
                    structure: {
                        content:
                            "جرم این سیاره برابر (۰٫۰۰۱۳ ± ۸٫۶۸۱۰)×۱۰۲۵ کیلوگرم و ۱۴٫۵۳۶ برابر زمین است و چگالی آن ۱٫۲۵ برآورد می‌شود در نتیجه احتمال می‌رود از جو بسیار ضخیم، گوشته‌ای مایع و هسته‌ای جامد و کوچک تشکیل شده باشد. شتاب گرانشی آن نیز ۹۰ درصد شتاب گرانشی زمین تخمین زده شده‌است.[۳۰] دمای بخش مایع آن ۲۳۰۰ درجه سانتی‌گراد و هسته آن ۷۰۰۰ درجه سانتی‌گراد است.",
                        source: "https://fa.wikipedia.org/wiki/%D8%A7%D9%88%D8%B1%D8%A7%D9%86%D9%88%D8%B3#%D8%B3%D8%A7%D8%AE%D8%AA%D8%A7%D8%B1_%D8%AF%D8%B1%D9%88%D9%86%DB%8C"
                    },
                    geology: {
                        content:
                            "در جو آن هیدروژن (به شکل H2) و ۱۲ درصد هلیوم و ۲ درصد متان وجود دارد اما از آن‌جایی که متان به‌شدت نور قرمز را جذب می‌کند این سیاره به رنگ آبی مایل به سبز دیده می‌شود. بررسی فروسرخ حاکی از آن است که دمای این سیاره برابر ۵۸ درجه کلوین است.تصاویر رایانه‌ای نشان می‌دهد ابرهای آمونیاکی به بزرگی ۲ تا ۴ کیلومتر در زیر جو اورانوس و در ارتفاعات پایین قرار دارند و این ابرها در استوا در طی ۱۵ ساعت یک بار دور سیاره می‌زنند ولی در نزدیکی قطب این مقدار به ۱۵ ساعت می‌رسد.",
                        source: "https://fa.wikipedia.org/wiki/%D8%A7%D9%88%D8%B1%D8%A7%D9%86%D9%88%D8%B3#%D8%AC%D9%88"
                    },
                    "rotation": "۱۷.۲ ساعت",
                    "revolution": "۸۴ سال",
                    "radius": "۲۵٬۳۶۲ کیلومتر",
                    "temperature": "۱۹۵- درجه سانتی‌گراد"
                    ,
                    images: {
                        planet: "/images/planet-uranus.svg",
                        internal: "/images/planet-uranus-internal.svg",
                        geology: "/images/geology-uranus.png"
                    }
                },
                neptune: {
                    name: "نپتون",
                    overview: {
                        content:
                            "نپتون (به انگلیسی: Neptune) هشتمین سیارهٔ منظومه شمسی (و با در نظر نگرفتن پلوتو که یک سیاره کوتوله است) دورترین سیاره شناخته شده می‌باشد. پس از مشتری، زحل و اورانوس، نپتون بزرگ‌ترین سیاره از لحاظ اندازه می‌باشد. نپتون به همراه سیاره کوتوله پلوتو تنها سیاره‌هایی هستند که از زمین با چشم غیرمسلح رویت نمی‌شوند چون فاصله خورشید تا نپتون حدود سی برابر فاصله زمین تا خورشید است. در میان غول‌های گازی، چگالی نپتون از همه بیشتر است و به همین دلیل کوچک‌ترین اندازه را میان سیاره‌های هم‌ردیف خود دارد. جرم نپتون به تنهایی ۱۷ برابر جرم زمین است و قطر آن با اندازه ۴۹٬۵۲۸ کیلومتر چهار برابر قطر زمین می‌باشد. هر سال در نپتون معادل ۱۶۵ سال زمینی است ولی یک دور گردش وضعی این سیاره در مدت ۱۶ ساعت و ۷ دقیقه انجام می‌گیرد. نام نپتون از نام خدای رومی دریاها گرفته شده و دلیل این نامگذاری رنگ آبی پررنگی است که باعث زیبایی منحصربفرد این سیاره سرد می‌شود.",
                        source: "https://fa.wikipedia.org/wiki/%D9%86%D9%BE%D8%AA%D9%88%D9%86"
                    },
                    structure: {
                        content:
                            "معمولاً همه انسان‌های روی زمین این سیاره را به رنگ آبی می‌شناسند. این رنگ را گاز متان حاضر در جو نپتون که رنگ سرخ را جذب می‌کند و آبی‌حاصل از طیف نوری خورشید که بازتابیده می‌شود پدید می‌آید.\nنپتون از نظر ساختاری بسیار شبیه به سایر سیارات گازی به خصوص اورانوس است. تفاوتی که در ساختار سیاره‌هایی مانند اورانوس و نپتون دیده می‌شود، به سبب عدم حضور هیدروژن فلزی مایع است که در عوض آن یک ساختار متراکم آب مانندی در اطراف هسته وجود دارد. لایه بیرونی‌تر نپتون متشکل از هیدروژن ملکولی مایع و هلیوم مایع است.",
                        source: "https://en.wikipedia.org/wiki/Neptune#Internal_structure"
                    },
                    geology: {
                        content:
                            "۷۴ درصد هیدروژن، ۲۵ درصد هلیم و حدود ۱ درصد متان جو نپتون را تشکیل می‌دهند. به دلیل وجود متان در جو سیاره که به شدت نور قرمز را جذب می‌کند، نپتون این رنگ آبی دلنشین را به خود گرفته‌است. جوی از هیدروژن، هلیم و متان، گوشته‌ای از آب یخ زده، متان و آمونیاک و هسته‌ای از سنگ سیلیس ساختار نپتون را شکل می‌دهد. پس از کشف هم اطلاعات بسیار کمی دربارهٔ نپتون موجود بود تا این که در ۲۵ اوت سال ۱۹۸۹ وویجر ۲ از ۵ هزار کیلومتری این غول گازی گذشت و اطلاعات بسیار زیادی دربارهٔ این سیاره به دست آورد. برای مثال وویجر۲ کشف کرد که نپتون آب‌وهوای بسیار خشنی دارد و طوفانهای پر سرعت همه جای این سیاره وجود دارند.",
                        source: "https://fa.wikipedia.org/wiki/%D9%86%D9%BE%D8%AA%D9%88%D9%86#%D8%AC%D9%88_%D9%88_%D8%A2%D8%A8%E2%80%8C%D9%88%D9%87%D9%88%D8%A7"
                    },
                    "rotation": "۱۶.۰۸ ساعت",
                    "revolution": "۱۶۴.۷۹ سال",
                    "radius": "۲۴٬۶۲۲ کیلومتر",
                    "temperature": "۲۰۱- درجه سانتی‌گراد"
                    ,
                    images: {
                        planet: "/images/planet-neptune.svg",
                        internal: "/images/planet-neptune-internal.svg",
                        geology: "/images/geology-neptune.png"
                    }
                }
            }

        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
