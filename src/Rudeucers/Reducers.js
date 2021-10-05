import { ADD_ACCESS } from "../Action/AccessAction";
import { ADD_TOPSELL } from "../Action/Action"
import { ADD_OLYMPIC } from "../Action/AndriodAction";
import { ADD_BABY } from "../Action/BabyAction";
import { ADD_BRAND } from "../Action/BrandAction";
import { ADD_LAPTOPS } from "../Action/LaptopsActions";
import { ADD_MOBILE } from "../Action/MobileAction";
import { ADD_PHONE } from "../Action/PhoneAction";
import { ADD_PRINTER } from "../Action/PrinterAction";
import { ADD_SPEAKER } from "../Action/SpeakerAction";
import { ADD_TVS } from "../Action/TvsAction";
import { ADD_FASHION } from "../Component/Fashions/FashionAction";
import { ADD_CLOTH } from "../Fashion/FashionAction";
import { ADD_USER } from "../Action/AccessAction";

const initialState ={
 
    topsell: [
        {
          name: "Nova Professional Rechargeable Hair Trimmer",
          price: "GH₵ 26.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/06/962571/1.jpg?3169",
          id: "1",
        },
        {
          name: 'E-Life 17G1 Digital Satellite TV - 17" Black',
          price: "GH₵ 370.50",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/81/677131/1.jpg?6433",
          id: "2",
        },
        {
          name: "Rectangle Computer Glasses",
          price: "GH₵ 46.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/36/431171/1.jpg?5802",
          id: "3",
        },
        {
          name: "T WS Bluetooth headset + ios smart watch",
          price: "GH₵ 98.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/09/930512/1.jpg?5158",
          id: "4",
        },
        {
          name: "LLOYD V989S USB 3.1 Mini Bass Subwoofer ",
          price: "GH₵ 225.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/187902/1.jpg?4570",
          id: "5",
        },
      ],
      brand: [
        {
          name: "Apple iPhone 12 Pro - 512GB HDD - 6GB RAM",
          price: "GH₵ 7336.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/59/959013/1.jpg?1005",
          id: "6",
        },
        {
          name: "Apple iphone 12 Pro Max -221GB HDD",
          price: "GH₵ 7543.50",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/632013/1.jpg?12463",
          id: "7",
        },
        {
          name: "Apple iPhone 12 Pro 512GB HDD - 4GB RAM - Silver",
          price: "GH₵ 8432.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/069013/1.jpg?9522",
          id: "8",
        },
        {
          name: "Apple iphone 7 128GB - 4GB RAM - BLACK",
          price: "GH₵ 1380.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/02/04477/1.jpg?7965",
          id: "9",
        },
        {
          name: "Apple iPhone 5S - 4 inch - 16GB - 1GB RAM ",
          price: "GH₵ 480.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/426231/1.jpg?6552",
          id: "10",
        },
        {
          name: "Apple iPhone 12 Pro Max - 128GB HDD - 6GB RAM",
          price: "GH₵ 7986.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/98/017122/1.jpg?5647",
          id: "11",
        },
        {
          name: " Apple iphone XR 128GB HDD - 6GB RAM",
          price: "GH₵ 370.50",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/676803/1.jpg?9584",
          id: "12",
        },
        {
          name: "Apple iPhone X - 64GB HDD - 3GB RAM - Silver ",
          price: "GH₵ 2984.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/266803/1.jpg?2423",
          id: "13",
        },
        {
          name: "Apple iPhone 6s - 64GB HDD - 2GB RAM -",
          price: "GH₵ 980.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/90619/1.jpg?1338",
          id: "14",
        },
        {
          name: " Apple iPhone 6s - 64GB HDD - 2GB RAM - Silver",
          price: "GH₵ 986.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/70619/1.jpg?5910",
          id: "15",
        },
      ],
      Olympic: [
        {
          name: "Niche Coffee Bean ",
          price: "GH₵ 225.00",
          imgUrl:
            "https://images.unsplash.com/photo-1593421970636-570fcb157915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
          id: "16",
        },
        {
          name: " Element5 Digital ",
          price: "GH₵ 225.00",
          imgUrl:
            "https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          id: "17",
        },
        {
          name: "gray and white standing fun ",
          price: "GH₵ 225.00",
          imgUrl:
            "https://images.unsplash.com/photo-1565151443833-29bf2ba5dd8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
          id: "18",
        },
        {
          name: " black and white industral staove ",
          price: "GH₵ 225.00",
          imgUrl:
            "https://images.unsplash.com/photo-1578845425669-b6562f83b11e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          id: "19",
        },
        {
          name: " Katherine Chase ",
          price: "GH₵ 225.00",
          imgUrl:
            "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZSUyMGNvb2tlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          id: "20",
        },
        {
          name: "Mini Wireless V5.0 Waterproof Earphones Noise ",
          price: "GH₵ 55.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/45/938422/1.jpg?4710",
          id: "21",
        },
        {
          name: "Wireless Bluetooth 5.0 Waterproof Headphones - Black",
          price: "GH₵ 70.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/782181/1.jpg?9809",
          id: "22",
        },
        {
          name: "3 in 1 Men's shirt T-shirt CottonShortSleeve",
          price: "GH₵ 66.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/909131/1.jpg?9728",
          id: "23",
        },
        {
          name: "Fashion 4-Piece Leather Shoulder/ Handbags Set - Pinkr ",
          price: "GH₵ 55.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/550161/1.jpg?0704",
          id: "24",
        },
        {
          name: "TWS Air Pro 6 Bluetooth Earphone Earbuds HiFi",
          price: "GH₵ 67.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/923432/1.jpg?2130",
          id: "25",
        },
      ],
      andriod: [
        {
          name: "Tecno Camon 16 Dual SIM - 128GB HDD",
          price: "GH₵ 985.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/882242/1.jpg?3103",
          id: "26",
        },
        {
          name: "Tecno POP 3 (BB2) Dual SIM - 16GB HDD ",
          price: "GH₵ 380.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/139403/1.jpg?4146",
          id: "27",
        },
        {
          name: "Tecno Spark 7P - 64GB HDD - 4GB RAM",
          price: "GH₵ 730.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/829403/1.jpg?6539",
          id: "28",
        },
        {
          name: "Samsung A02 - 32GB HDD - 2GB RAM ",
          price: "GH₵ 489.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/998242/1.jpg?6996",
          id: "29",
        },
        {
          name: "Samsung Galaxy A12 - 128GB HDD - 4GB RAM",
          price: "GH₵ 900.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/405422/1.jpg?8573",
          id: "30",
        },
        {
          name: "Samsung A32 (5G) - 128GB RAM - 6GB HDD",
          price: "GH₵ 1490.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/845492/1.jpg?8133",
          id: "31",
        },
        {
          name: "Infinix Note 10 - 4G Dual SIM - 128GB HDD ",
          price: "GH₵ 1202.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/702603/1.jpg?2664",
          id: "32",
        },
        {
          name: "Infinix Hot 10T - 128GB HDD - 4GB RAM",
          price: "GH₵ 834.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/114103/1.jpg?4611",
          id: "33",
        },
        {
          name: "Infinix Hot 10 - 64GB ",
          price: "GH₵ 769.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/738391/1.jpg?6095",
          id: "34",
        },
        {
          name: "Infinix X688C -32GB",
          price: "GH₵ 98.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/275022/1.jpg?7723",
          id: "35",
        },
      ],
 
      mobile: [
        {
          name: "Infinix X688C -32GB",
          price: "GH₵ 98.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/275022/1.jpg?7723",
          id: "36",
        },
        {
          name: "Tecno Camon 16 Dual SIM - 128GB HDD",
          price: "GH₵ 985.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/882242/1.jpg?3103",
          id: "37",
        },
        {
          name: "Tecno POP 3 (BB2) Dual SIM - 16GB HDD ",
          price: "GH₵ 380.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/139403/1.jpg?4146",
          id: "38",
        },
        {
          name: "Tecno Spark 7P - 64GB HDD - 4GB RAM",
          price: "GH₵ 730.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/829403/1.jpg?6539",
          id: "39",
        },
        {
          name: "Samsung A02 - 32GB HDD - 2GB RAM ",
          price: "GH₵ 489.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/998242/1.jpg?6996",
          id: "40",
        },
        {
          name: "Samsung Galaxy A12 - 128GB HDD - 4GB RAM",
          price: "GH₵ 900.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/405422/1.jpg?8573",
          id: "41",
        },
        {
          name: "Samsung A32 (5G) - 128GB RAM - 6GB HDD",
          price: "GH₵ 1490.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/845492/1.jpg?8133",
          id: "42",
        },
        {
          name: "Infinix Note 10 - 4G Dual SIM - 128GB HDD ",
          price: "GH₵ 1202.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/702603/1.jpg?2664",
          id: "43",
        },
        {
          name: "Infinix Hot 10T - 128GB HDD - 4GB RAM",
          price: "GH₵ 834.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/114103/1.jpg?4611",
          id: "44",
        },
        {
          name: "Infinix Hot 10 - 64GB ",
          price: "GH₵ 769.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/738391/1.jpg?6095",
          id: "45",
        },
        {
          name: "Apple iPhone 12 Pro - 512GB HDD - 6GB RAM",
          price: "GH₵ 7336.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/59/959013/1.jpg?1005",
          id: "46",
        },
        {
          name: "Apple iphone 12 Pro Max -221GB HDD",
          price: "GH₵ 7543.50",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/632013/1.jpg?12463",
          id: "47",
        },
        {
          name: "Apple iPhone 12 Pro 512GB HDD - 4GB RAM - Silver",
          price: "GH₵ 8432.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/069013/1.jpg?9522",
          id: "48",
        },
        {
          name: "Apple iphone 7 128GB - 4GB RAM - BLACK",
          price: "GH₵ 1380.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/02/04477/1.jpg?7965",
          id: "49",
        },
        {
          name: "Apple iPhone 5S - 4 inch - 16GB - 1GB RAM ",
          price: "GH₵ 480.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/426231/1.jpg?6552",
          id: "50",
        },
        {
          name: "Apple iPhone 12 Pro Max - 128GB HDD - 6GB RAM",
          price: "GH₵ 7986.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/98/017122/1.jpg?5647",
          id: "51",
        },
        {
          name: " Apple iphone XR 128GB HDD - 6GB RAM",
          price: "GH₵ 370.50",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/676803/1.jpg?9584",
          id: "52",
        },
        {
          name: "Apple iPhone X - 64GB HDD - 3GB RAM - Silver ",
          price: "GH₵ 2984.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/266803/1.jpg?2423",
          id: "53",
        },
        {
          name: "Apple iPhone 6s - 64GB HDD - 2GB RAM -",
          price: "GH₵ 980.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/90619/1.jpg?1338",
          id: "54",
        },
        {
          name: " Apple iPhone 6s - 64GB HDD - 2GB RAM - Silver",
          price: "GH₵ 986.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/70619/1.jpg?5910",
          id: "55",
        },
      ],
      laptops: [
        {
          name: "10.1 inch Netbook PC - 1GBRAM - 8GB HD",
          price: "GH₵ 628.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/45212/1.jpg?0855",
          id: "56",
        },
        {
          name: "Hp 250 G7 - 15.6 - 15.6 Intel Pentium Silver ",
          price: "GH₵ 2645.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/646232/1.jpg?1083",
          id: "57",
        },
        {
          name: "3 Pieces - Computer Backpack With USB Charging Port ",
          price: "GH₵ 60.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/58/852002/1.jpg?8830",
          id: "58",
        },
        {
          name: "TDD-10.1 Netbook PC - 10.1 - Dual-Core - 1GB RAM",
          price: "GH₵ 645.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/45212/1.jpg?8150",
          id: "59",
        },
        {
          name: " Hp Pavilion 15inch Touch 10th Gen Laptop ",
          price: "GH₵ 4289.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/080161/1.jpg?4318",
          id: "60",
        },
        {
          name: "Hp Laptop 15.6” - Intel Celeron Core 2 Duo - 4G - 500GB",
          price: "GH₵ 2900.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/344113/1.jpg?4615",
          id: "61",
        },
        {
          name: "Lenovo V14-IGL -14.0″ Display – Intel Pentium Silver N5030",
          price: "GH₵ 2490.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/426903/1.jpg?3324",
          id: "62",
        },
        {
          name: "N1001 Netbook PC - 10.1 - Dual-Core - 1GB RAM ",
          price: "GH₵ 662.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/81212/1.jpg?0993",
          id: "63",
        },
        {
          name: "Hp 15-dw1083wm Intel Pentium Gold 6405U Laptop",
          price: "GH₵ 2834.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/01/665232/1.jpg?2209",
          id: "64",
        },
        {
          name: "Hp Envy Touch 17-CE1035CL 17-Intel Core i7-10510U ",
          price: "GH₵ 8000.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/176522/1.jpg?1143",
          id: "65",
        },
        {
          name: "Lenovo Chromebook C340 Laptop - x360 11.6HD TouchScreen",
          price: "GH₵ 1736.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/139313/1.jpg?4269",
          id: "66",
        },
        {
          name: "DELL Inspiron 15 2-in-1 7591-15.6FHD Touch - 10th gen",
          price: "GH₵ 4843.50",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/691592/1.jpg?4318",
          id: "67",
        },
        {
          name: "Hp All- in-One 200 G4 Intel Core i3-10110U10th Gen",
          price: "GH₵ 3432.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/431522/1.jpg?7974",
          id: "68",
        },
        {
          name: "DELL Vostro 3668 MT - 18.5 - Intel Dual Core - 500GBHDDK",
          price: "GH₵ 3800.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/12796/1.jpg?1552",
          id: "69",
        },
        {
          name: "Hp All- in-One 200 G4 Intel Core i3-10110U10th Gen ",
          price: "GH₵ 3080.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/173122/1.jpg?1172",
          id: "70",
        },
        {
          name: "PiPo X8 Pro TV Box Style Mini PC, 2GB + 32GB, 7 inch Windows ",
          price: "GH₵ 1986.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/352532/1.jpg?4601",
          id: "71",
        },
        {
          name: "Q768 7 inch Kids Tablet Educational Learning Computer ",
          price: "GH₵ 370.50",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/406551/1.jpg?3901",
          id: "72",
        },
        {
          name: "Hp 290 G3 Micro Tower PC - i3 processor - 4GB RAM ",
          price: "GH₵ 3284.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/135512/1.jpg?1483",
          id: "73",
        },
        {
          name: "10.1Metal Tablet with MT6592 Eight-core Processor",
          price: "GH₵ 430.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/533751/1.jpg?0360",
          id: "74",
        },
        {
          name: " 10.1inch Netbook Lightweight Portable Laptop ACTIONSver",
          price: "GH₵ 726.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/967022/1.jpg?7340",
          id: "75",
        },
      ],
      tvs: [
        {
          name: "Syinix 50A1S Smart Android 4K/UHD TV ",
          price: "GH₵ 2628.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/685571/1.jpg?4005",
          id: "76",
        },
        {
          name: "Chigo CTD-40C2 Curved Digital Satellite TV - 39  ",
          price: "GH₵ 1645.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/948703/1.jpg?1022",
          id: "77",
        },
        {
          name: "Royalstar Digital Satellite TV - 32 Black ",
          price: "GH₵ 760.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/76/783122/1.jpg?4972",
          id: "78",
        },
        {
          name: "Hisense 40H4030F1 - Class H4 Series HD LED Smart ",
          price: "GH₵ 3045.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/672803/1.jpg?1786",
          id: "79",
        },
        {
          name: " E-Life 17G1 Digital Satellite TV - 17 Black ",
          price: "GH₵ 699.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/677131/1.jpg?6871",
          id: "80",
        },
        {
          name: "80 Lumens 1080P HD Multimedia Mini Portable LED Projector",
          price: "GH₵ 290.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/074522/1.jpg?7696",
          id: "81",
        },
        {
          name: "Nasco NAS-T43FB LED Digital Satellite TV - 43 Black",
          price: "GH₵ 1390.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/096122/1.jpg?82574",
          id: "82",
        },
        {
          name: "TRANSJEE Mini LCD Projector - Gold ",
          price: "GH₵ 312.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/856812/1.jpg?9870",
          id: "83",
        },
        {
          name: "Innova Digital Satellite TV - 43- Black",
          price: "GH₵ 1234.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/947603/1.jpg?0295",
          id: "84",
        },
        {
          name: "P11 854x480 DLP Mini Smart Projector With Infrared Remote Contro",
          price: "GH₵ 1600.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/93/393522/1.jpg?9972",
          id: "85",
        },
        {
          name: "S361 80 lumens 320 x 240 Pixel Portable Mini Projector",
          price: "GH₵ 206.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/967531/1.jpg?2899",
          id: "86",
        },
        {
          name: "YG400 800x480 1200LM Mini LED Projector - Black",
          price: "GH₵ 559.50",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/182121/1.jpg?5842",
          id: "87",
        },
        {
          name: "Bruhm BTF-32SC Smart-Cast Digital Satellite LED TV - 32",
          price: "GH₵ 998.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/58/139403/1.jpg?6771",
          id: "88",
        },
        {
          name: "1080P LCD 50000 Hours Mini Portable Projector - White",
          price: "GH₵ 270.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/565831/1.jpg?5816",
          id: "89",
        },
        {
          name: "Nasco NAS-J32CB LED Digital Satellite Curved TV - 32 ",
          price: "GH₵ 1080.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/37/310131/1.jpg?5949",
          id: "90",
        },
        {
          name: "TCL 43P715 QUHD Android TV - 43 ",
          price: "GH₵ 2986.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/91/210881/1.jpg?2560",
          id: "91",
        },
        {
          name: "E400 1600 Lumens 1280x720 720P Portable HD LED  ",
          price: "GH₵ 370.50",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/584522/1.jpg?7988",
          id: "92",
        },
        {
          name: "LCD LED Projector 400 Lumens Mini Portable Video Projector",
          price: "GH₵ 284.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/58/572022/1.jpg?7950",
          id: "93",
        },
        {
          name: "Mini Smart Phone Projector - Multicolor",
          price: "GH₵ 55.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/649261/1.jpg?8235",
          id: "94",
        },
        {
          name: "Epson EB-X41 3LCD Portable Projector - 3600 Lumen",
          price: "GH₵ 3726.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/353891/1.jpg?8566",
          id: "95",
        },
      ],
      accessories: [
        {
          name: "Intelligent Smart Weighing Scales BMI Body Fat Scale",
          price: "GH₵ 86.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/073792/1.jpg?0657",
          id: "96",
        },
        {
          name: "Heat Resistant Glass Storage & Cooking Bowl - 5 Piece - ",
          price: "GH₵ 45.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/65/680003/1.jpg?0778",
          id: "97",
        },
        {
          name: "Nova NV-617B Foldable Mini Travel Hair Dryer ",
          price: "GH₵ 40.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/248981/1.jpg?7697",
          id: "98",
        },
        {
          name: "Kitchen drain dish drying rack plastic display rack grey",
          price: "GH₵ 15.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/794141/1.jpg?6538",
          id: "99",
        },
        {
          name: " Gas Cylinder - 15kg + 2 Burner Table Top Cooker + Hose Set ",
          price: "GH₵ 489.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/482951/1.jpg?0249",
          id: "100",
        },
        {
          name: "700ML Automatic Infrared Sensor Hand Sanitizer",
          price: "GH₵ 80.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/870541/1.jpg?4279",
          id: "101",
        },
        {
          name: "Automatic Air Freshener Dispenser Aerosol Per-",
          price: "GH₵ 25.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/852591/1.jpg?4570",
          id: "102",
        },
        {
          name: "Universal Mobile Phone Screen Magnifier Bracket ",
          price: "GH₵ 22.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/751341/1.jpg?0335",
          id: "103",
        },
        {
          name: "Crystal Glass Bead Curtain Luxury Living Room Bedroom",
          price: "GH₵ 64.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/6303/1.jpg?7726",
          id: "104",
        },
        {
          name: "5 6 7 8 Baking Pans Dish Cake Mold Non-stick ",
          price: "GH₵ 190.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/892912/1.jpg?4875",
          id: "105",
        },
        {
          name: "Electric Waffles Maker Bubble Eggs Cake Oven",
          price: "GH₵ 83.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/16/909422/1.jpg?0942",
          id: "106",
        },
        {
          name: "5 PCS Canvas Printing Love HOME Frameless Wall Art Pictures",
          price: "GH₵ 93.50",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/06/806921/1.jpg?4495",
          id: "107",
        },
        {
          name: "3PCS Round Removable Bottom Pan Spring Latch",
          price: "GH₵ 132.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/975731/1.jpg?2575",
          id: "108",
        },
        {
          name: "Car Charger 2.1A DC 5V Car 12V-24V Car Char",
          price: "GH₵ 89.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/228503/1.jpg?48392",
          id: "109",
        },
        {
          name: "V9 Wireless CSR Bluetooth Headset - Black ",
          price: "GH₵ 3080.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/834112/1.jpg?1561",
          id: "110",
        },
        {
          name: "Professional Baby Soft Head Waterproof Digital",
          price: "GH₵ 86.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/315002/1.jpg?2300",
          id: "111",
        },
        {
          name: "Portable Car QC 3.0 Wireless Fast Charger For Tesla Model 3 ",
          price: "GH₵ 199.50",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/882422/1.jpg?2513",
          id: "112",
        },
        {
          name: "Micro USB Male to Type B Male OTG Cable",
          price: "GH₵ 3284.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/939612/1.jpg?0292",
          id: "113",
        },
        {
          name: "Infinix XW01A Smart Watch - Black/Green",
          price: "GH₵ 69.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/900903/1.jpg?5208",
          id: "114",
        },
        {
          name: "11 Pcs Domestic Sewing Machine Presser Feet Foot ",
          price: "GH₵ 99.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/438001/1.jpg?6479",
          id: "115",
        },
      ],
      speaker: [
        {
          name: "IPARROT I-20extra Wooden Multimedia Bluetooth Speaker",
          price: "GH₵ 100.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/146541/1.jpg?97865",
          id: "116",
        },
        {
          name: "X6 Wireless Bluetooth Speaker With Deep Bass HD Sound",
          price: "GH₵ 89.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/009522/1.jpg?9098",
          id: "117",
        },
        {
          name: "Protech PR-SB2D Bluetooth Soundbar And Sub-woofe ",
          price: "GH₵ 560.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/085311/1.jpg?4843",
          id: "118",
        },
        {
          name: "Wireless Bluetooth Speaker With Alarm Clock & FM Radio ",
          price: "GH₵ 45.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/063112/1.jpg?9941",
          id: "119",
        },
        {
          name: " Bluetooth Home Theatre With Remote Control ",
          price: "GH₵ 389.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/809213/1.jpg?5370",
          id: "120",
        },
        {
          name: "Balance car portable bluetooth speaker-blac",
          price: "GH₵ 130.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/792132/1.jpg?6069",
          id: "121",
        },
        {
          name: "Correct XN-C11 Wireless Bluetooth Portable Speaker",
          price: "GH₵ 60.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/871431/1.jpg?8845",
          id: "122",
        },
        {
          name: "Asano TK 522 Bluetooth 2.1 Channel Sub Woofer System ",
          price: "GH₵ 352.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/267012/1.jpg?2460",
          id: "123",
        },
        {
          name: "X3000 Stereo Heavy Bass Speaker - Black",
          price: "GH₵ 98.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/287541/1.jpg?2349",
          id: "124",
        },
        {
          name: "Panasonic SC -PM250 Home Theatre - 200W Black ",
          price: "GH₵ 580.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/279991/1.jpg?6804",
          id: "125",
        },
        {
          name: "Triple Power C20 Extra Bass USB Bluetooth",
          price: "GH₵ 96.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/76/509213/1.jpg?8064",
          id: "126",
        },
        {
          name: "Sony MHC-V73D/M EA3 Hifi System - Black",
          price: "GH₵ 3843.50",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/693213/1.jpg?1558",
          id: "127",
        },
        {
          name: "Hp All- in-One 200 G4 Intel Core i3-10110U10th Gen",
          price: "GH₵ 3432.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/65/19875/1.jpg?6578",
          id: "128",
        },
        {
          name: "Triple Power C20 Shock Super Bass Bluetooth",
          price: "GH₵ 110.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/745841/1.jpg?6471",
          id: "129",
        },
        {
          name: "Jerry Power JR-302 Home Theatre System - 3.1",
          price: "GH 207.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/467802/1.jpg?3305",
          id: "130",
        },
        {
          name: "Triple Power TP 9 Smart Digital Bluetooth Speaker ",
          price: "GH₵ 106.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/45/342113/1.jpg?0425",
          id: "131",
        },
        {
          name: "BM-800 3.5mm Studio Recording Wired Condenser ",
          price: "GH₵ 90.50",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/561851/1.jpg?4540",
          id: "132",
        },
        {
          name: "Yamaha HS7 Studio Monitor- Black",
          price: "GH₵ 3284.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/31627/1.jpg?8295",
          id: "133",
        },
        {
          name: "Philips SPA 4040B- Woofer System - 5.1CH Black",
          price: "GH₵ 630.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/856491/1.jpg?0812",
          id: "134",
        },
        {
          name: " Big Wireless Speaker Stereo Subwoofer Heavy Bass Music",
          price: "GH₵ 226.00",
          imgUrl:
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/54959/1.jpg?8443",
          id: "135",
        },
      ],
      
printers: [
  {
    name: "Hp DeskJet 2710 All-in-One Printer - White",
    price: "GH₵ 118.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/02/877403/1.jpg?0064",
    id: "136",
  },
  {
    name: "Hp LaserJet Pro M107a Printer - White ",
    price: "GH₵ 545.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/348981/1.jpg?4286",
    id: "137",
  },
  {
    name: " Hp Laser MFP 135a Multi Function Printer - LaserJet ",
    price: "GH₵ 1109.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/007791/1.jpg?5869",
    id: "138",
  },
  {
    name: "GOOJPRT JP-58DC Thermal Receipt Printer 58mm",
    price: "GH₵ 345.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/71736/1.jpg?8024",
    id: "139",
  },
  {
    name: " Hp MFP 130A LaserJet G3Q57A Pro Multi-Function ",
    price: "GH₵ 9289.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/46827/1.jpg?6748",
    id: "140",
  },
  {
    name: "Canon IRC3580Ne Medium Office Colour",
    price: "GH₵ 23000.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/34/690622/1.jpg?9565",
    id: "141",
  },
  {
    name: "Mini Pocket Printer BT Wireless Portable Instant Mobile",
    price: "GH₵ 190.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/65/352103/1.jpg?5858",
    id: "142",
  },
  {
    name: "Hp DeskJet Ink Advantage 3785 All-in-One Printer - White ",
    price: "GH₵ 562.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/374512/1.jpg?5739",
    id: "143",
  },
  {
    name: "Hp LaserJet Pro M102A Printer - White",
    price: "GH₵ 634.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/67397/1.jpg?7773",
    id: "144",
  },
  {
    name: "Hp Deskjet 2320 Scan Copy Printer - White + Free ",
    price: "GH₵ 300.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/675022/1.jpg?5901",
    id: "145",
  },
  {
    name: "Epson Ecotank L3150 All-in-one Wireless Printer - Black",
    price: "GH₵ 1736.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/763122/1.jpg?6725",
    id: "146",
  },
  {
    name: "Cartridge Refill Ink For Hp, Epson and Canon Inkjet",
    price: "GH₵ 93.50",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/429103/1.jpg?5147",
    id: "147",
  },
  {
    name: "Hp Color LaserJet Pro MFP M182n All-In-One Printer - White",
    price: "GH₵ 1732.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/009122/1.jpg?7326",
    id: "148",
  },
  {
    name: "Hp OfficeJet Pro 7740 Wide Format All-In-One",
    price: "GH₵ 2100.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/901181/1.jpg?2909",
    id: "149",
  },
  {
    name: "Hp CF540A 203A LaserJet Toner Cartridge - Black ",
    price: "GH₵ 480.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/556022/1.jpg?3374",
    id: "150",
  },
  {
    name: "12mm x 4m Plastic Label Tape Compatible For DYMO letraTAG 9",
    price: "GH₵ 186.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/11/192012/1.jpg?2426",
    id: "151",
  },
  {
    name: "Epson Workforce M200 All in One Monochrome ",
    price: "GH₵ 2200.50",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/880212/1.jpg?5702",
    id: "152",
  },
  {
    name: "USB Printer High Quality Thermal Receipt Printers Qr Code ",
    price: "GH₵ 184.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/109911/1.jpg?0606",
    id: "153",
  },
  {
    name: "Canon PIXMA MG2540S Printer - Black",
    price: "GH₵ 230.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/59/189413/1.jpg?8164",
    id: "154",
  },
  {
    name: " POS-5890K 58mm USB Printer Receipt Bill Ticket",
    price: "GH₵ 116.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/92736/1.jpg?8494",
    id: "155",
  },
],
fashions: [
  {
    name: "Men's running shoes breathable casual",
    price: "GH₵ 68.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/911361/1.jpg?1431",
    id: "156",
  },
  {
    name: " Fashion Office ladies pencil skirt Large size slim women dress",
    price: "GH₵ 76.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/18/006703/1.jpg?2177",
    id: "157",
  },
  {
    name: "Fashion High heels sandals women stiletto",
    price: "GH₵ 94.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/763113/1.jpg?7765",
    id: "158",
  },
  {
    name: "Striped Short Sleeve Polo T-Shirt Set - 4 Pieces - Multicolour ",
    price: "GH₵ 270.50",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/770991/1.jpg?0052",
    id: "159",
  },
  {
    name: "Spaghetti Camisole Set - 3 Pieces - Multicolour ",
    price: "GH₵ 66.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/0694/1.jpg?1241",
    id: "160",
  },
  {
    name: "Fashion Sports Round Neck Printed T-shirt-White ",
    price: "GH₵ 40.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/530161/1.jpg?5927",
    id: "161",
  },
  {
    name: "Fashion Sports Round Neck Printed T-shirt-White ",
    price: "GH₵ 800.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/730413/1.jpg?8409",
    id: "162",
  },
  {
    name: "mens formal shoes genuine leather oxford shoes",
    price: "GH₵ 532.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/830413/1.jpg?8403",
    id: "163",
  },
  {
    name: "Fashion Men's Sneakers Lace Up Shoes - Black/White",
    price: "GH₵ 63.50",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/237711/1.jpg?5388",
    id: "164",
  },
  {
    name: "Fashion Low Top Lace Up Sneakers - Khaki Brown",
    price: "GH₵ 66.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/575951/1.jpg?3722",
    id: "165",
  },
  {
    name: "Men's running shoes breathable casual",
    price: "GH₵ 68.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/911361/1.jpg?1431",
    id: "166",
  },
  {
    name: "Trendy Men's Lace-up Sneakers-White And Black",
    price: "GH₵ 65.00",
    imgUrl:
   "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/085802/1.jpg?3045",
   id:"167"
  },
  { 

    name:"Trendy Men's Lace-up Sneakers-White And Black",
    price: "GH₵ 30.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/37/542003/1.jpg?7664",
    id: "168",
  },
  {
    name: "Lace Up Canvas Sneakers - Multicolor",
    price: "GH₵ 45.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/953132/1.jpg?1537",
    id: "169",
  },
  {
    name: " Fashion 2 in 1 men's Big size outdoor sports suit-Black/Yellow ",
    price: "GH₵ 59.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/225622/1.jpg?6339",
    id: "170",
  },
  {
    name: "Fashion 4-Piece Leather HandBag Set - Black",
    price: "GH₵ 60.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/550161/1.jpg?0710",
    id: "171",
  },
  {
    name: "Fahion Women's Watch Roman Numerals Full ",
    price: "GH₵ 30.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/65/785003/1.jpg?8796",
    id: "172",
  },
  {
    name: "Fashion Bandana Scarf Silk Headscarf Large Square Plain ",
    price: "GH₵ 42.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/15/907791/1.jpg?2654",
    id: "173",
  },
  {
    name: "Breathable Sports Sneakers - White",
    price: "GH₵ 134.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/48/639413/1.jpg?4736",
    id: "174",
  },
  {
    name: "New Chiffon Belly Dance Hip Scarf 3 Rows Coin Belt",
    price: "GH₵ 30.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/79885/1.jpg?6567",
    id: "175",
  },
],
baby: [
  {
    name: "3-in-1 Wooden Baby Cot With Drawers and Net - Brown",
    price: "GH₵ 528.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/992421/1.jpg?8325",
    id: "176",
  },
  {
    name: "Baby Push Metal Cot With Net - Blue/White ",
    price: "GH₵ 445.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/317603/1.jpg?9665",
    id: "177",
  },
  {
    name: "Baby Walker - 3 In 1 - Multicolour ",
    price: "GH₵ 250.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/828531/1.jpg?9546",
    id: "178",
  },
  {
    name: "Foldable Baby Pushchair Stroller - Red",
    price: "GH₵ 2645.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/50289/1.jpg?6141",
    id: "179",
  },
  {
    name: "Adorable Panda Printed Pajamas Nightwear ",
    price: "GH₵ 4289.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/971022/1.jpg?5521",
    id: "180",
  },
  {
    name: "Beautiful White Party Dress Outfit for 18 Girl Doll",
    price: "GH₵ 50.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/59/314322/1.jpg?3274",
    id: "181",
  },
  {
    name: "Breathable Infant Baby Carrier Backpack Front Back",
    price: "GH₵ 190.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/26689/1.jpg?1742",
    id: "182",
  },
  {
    name: "Portable Baby Carriers Hip Seat Breathable Spine",
    price: "GH₵ 662.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/20979/1.jpg?4484",
    id: "183",
  },
  {
    name: "Baby Hat Cotton Soft Turban Knot Summer",
    price: "GH₵ 34.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/370481/1.jpg?2473",
    id: "184",
  },
  {
    name: "Baby Girl Elastic Hairband Children Hair Wear Flower",
    price: "GH₵ 36.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/490481/1.jpg?4929",
    id: "185",
  },
  {
    name: "5 Tier Plastic Baby Wardrobe - Cream ",
    price: "GH₵ 836.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/10/95684/1.jpg?7713",
    id: "186",
  },
  {
    name: "10pcs Set Children's Bow Hanger Home Baby",
    price: "GH₵ 193.50",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/06644/1.jpg?4420",
    id: "187",
  },
  {
    name: "5 Tier Plastic Baby Wardrobe - White/Blue",
    price: "GH₵ 932.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/98506/1.jpg?2770",
    id: "188",
  },
  {
    name: "Essence Diaper Bag Set - 5 Pieces - Blue/Multicolour",
    price: "GH₵ 150.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/73618/1.jpg?7089",
    id: "189",
  },
  {
    name: "Diaper Bag Tote, Navy Blue 5 Piece Set Diaper Bag for Baby ",
    price: "GH₵ 180.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/898122/1.jpg?2665",
    id: "190",
  },
  {
    name: "Cartoon Baby Wet Dry Diaper Changing Bags Large ",
    price: "GH₵ 196.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/274002/1.jpg?2612",
    id: "191",
  },
  {
    name: "Baby Girl Sleeveless Round Neck Dress - Multicolor ",
    price: "GH₵ 70.50",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/970571/1.jpg?1492",
    id: "192",
  },
  {
    name: "Fashion Summer Baby Girls Infant Lace Birthday ",
    price: "GH₵ 184.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/45/458851/1.jpg?3747",
    id: "193",
  },
  {
    name: "Short Sleeve T-shirt & Pants for 18'' American Doll",
    price: "GH₵ 120.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/10/033022/1.jpg?1960",
    id: "194",
  },
  {
    name: " Summer Lovely Baby Boys Short Sleeve T Shirt Kids",
    price: "GH₵ 76.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/217631/1.jpg?9687",
    id: "195",
  },
],
cloth: [
  {
    name: "Men's running shoes breathable casual",
    price: "GH₵ 68.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/911361/1.jpg?1431",
    id: "196",
  },
  {
    name: "Trendy Men's Lace-up Sneakers-White And Black",
    price: "GH₵ 65.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/085802/1.jpg?3045",
    id: "197",
  },
  {
    name: "Luxury Men's Full Steel Business WatchSports ",
    price: "GH₵ 30.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/37/542003/1.jpg?7664",
    id: "198",
  },
  {
    name: "Lace Up Canvas Sneakers - Multicolor",
    price: "GH₵ 45.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/953132/1.jpg?1537",
    id: "199",
  },
  {
    name: " Fashion 2 in 1 men's Big size outdoor sports suit-Black/Yellow ",
    price: "GH₵ 59.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/225622/1.jpg?6339",
    id: "200",
  },
  {
    name: "Fashion 4-Piece Leather HandBag Set - Black",
    price: "GH₵ 60.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/550161/1.jpg?0710",
    id: "201",
  },
  {
    name: "Fahion Women's Watch Roman Numerals Full ",
    price: "GH₵ 30.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/65/785003/1.jpg?8796",
    id: "202",
  },
  {
    name: "Fashion Bandana Scarf Silk Headscarf Large Square Plain ",
    price: "GH₵ 42.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/15/907791/1.jpg?2654",
    id: "203",
  },
  {
    name: "Breathable Sports Sneakers - White",
    price: "GH₵ 134.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/48/639413/1.jpg?4736",
    id: "204",
  },
  {
    name: "New Chiffon Belly Dance Hip Scarf 3 Rows Coin Belt",
    price: "GH₵ 30.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/79885/1.jpg?6567",
    id: "205",
  },
  {
    name: "Fashion Low Top Lace Up Sneakers - Khaki Brown",
    price: "GH₵ 66.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/575951/1.jpg?3722",
    id: "206",
  },
  {
    name: "Fashion Men's Sneakers Lace Up Shoes - Black/White",
    price: "GH₵ 63.50",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/237711/1.jpg?5388",
    id: "207",
  },
  {
    name: "mens formal shoes genuine leather oxford shoes",
    price: "GH₵ 532.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/830413/1.jpg?8403",
    id: "208",
  },
  {
    name: "mens formal shoes genuine leather oxford shoe",
    price: "GH₵ 800.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/730413/1.jpg?8409",
    id: "209",
  },
  {
    name: "Fashion Sports Round Neck Printed T-shirt-White ",
    price: "GH₵ 40.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/530161/1.jpg?5927",
    id: "210",
  },
  {
    name: "Spaghetti Camisole Set - 3 Pieces - Multicolour ",
    price: "GH₵ 66.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/0694/1.jpg?1241",
    id: "211",
  },
  {
    name: "Striped Short Sleeve Polo T-Shirt Set - 4 Pieces - Multicolour ",
    price: "GH₵ 270.50",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/770991/1.jpg?0052",
    id: "212",
  },
  {
    name: "Fashion High heels sandals women stiletto",
    price: "GH₵ 94.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/763113/1.jpg?7765",
    id: "213",
  },
  {
    name: "Women Sandals Dot Bowknot Design Platform",
    price: "GH₵ 93.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/522041/1.jpg?4538",
    id: "214",
  },
  {
    name: " Fashion Office ladies pencil skirt Large size slim women dress",
    price: "GH₵ 76.00",
    imgUrl:
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/18/006703/1.jpg?2177",
    id: "215",
  },
]
        
}

let Reducers = (state = initialState,action) =>{
    switch(action.type){
        case ADD_TOPSELL:
            return{...state,topsell:[...state.topsell,action.payload]};
            case ADD_BRAND:
              return{...state,brand:[...state.brand,action.payload]};
              case ADD_OLYMPIC:
              return{...state,Olympic:[...state.Olympic,action.payload]};
                case ADD_PHONE:
               return{...state,andriod:[...state.andriod,action.payload]};
               case ADD_FASHION:
               return{...state,fashions:[...state.fashions,action.payload]};
                case ADD_LAPTOPS:
                 return{...state,laptops:[...state.laptops,action.payload]};
                 case ADD_PRINTER:
                  return{...state,printers:[...state.printers,action.payload]};
                 case ADD_TVS:
               return{...state,tvs:[...state.tvs,action.payload]};
                 case ADD_CLOTH:
               return{...state,cloth:[...state.cloth,action.payload]};
               case ADD_BABY:
                return{...state,baby:[...state.baby,action.payload]};
                case ADD_SPEAKER:
                return{...state,speaker:[...state.speaker,action.payload]};
                case ADD_MOBILE:
                 return{...state,mobile:[...state.mobile,action.payload]};
                 case ADD_ACCESS:
                return{...state,access:[...state.access,action.payload]};
                case ADD_USER:
                  return{...state,users:[...state.users,action.payload]};
                        
                
            
        
        
    
    

            default:
                return (state)
    }
}
export default Reducers