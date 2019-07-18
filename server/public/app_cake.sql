-- MySQL dump 10.13  Distrib 5.1.73, for redhat-linux-gnu (x86_64)
--
-- Host: 172.16.100.49    Database: app_cake
-- ------------------------------------------------------
-- Server version	5.7.24-27-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pj_user`
--

DROP TABLE IF EXISTS `pj_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pj_user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(32) DEFAULT NULL,
  `upwd` varchar(32) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `user_name` varchar(32) DEFAULT NULL,
  `gender` int(11) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pj_user`
--

LOCK TABLES `pj_user` WRITE;
/*!40000 ALTER TABLE `pj_user` DISABLE KEYS */;
INSERT INTO `pj_user` VALUES (1,'dingding','123456','ding@qq.com','13501234567','叮叮',0),(2,'dangdang','123456','dang@qq.com','13501234568','铛铛',1),(3,'doudou','123456','dou@qq.com','13501234569','兜兜',1),(4,'yaya','123456','ya@qq.com','13501234560','雅雅',0),(5,'xingxing','123456','xing@qq.com','13551253567','星星',1);
/*!40000 ALTER TABLE `pj_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_bread`
--

DROP TABLE IF EXISTS `product_bread`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_bread` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img_url` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_bread`
--

LOCK TABLES `product_bread` WRITE;
/*!40000 ALTER TABLE `product_bread` DISABLE KEYS */;
INSERT INTO `product_bread` VALUES (1,'http://cake-img.stor.sinaapp.com/product/product-2.png','15.00','奶酥核桃吐司',100,'福建 厦门'),(2,'http://cake-img.stor.sinaapp.com/product/product-3.png','20.00','芒果岩烧土司',75,'福建厦门'),(3,'http://cake-img.stor.sinaapp.com/product/product-6.png','17.00','奥利奥榴莲',80,'福建厦门'),(4,'http://cake-img.stor.sinaapp.com/product/product-5.png','20.00','法式杏仁可颂',105,'福建厦门'),(5,'http://cake-img.stor.sinaapp.com/product/product-4.png','15.00','伯爵红茶脆皮',50,'福建厦门');
/*!40000 ALTER TABLE `product_bread` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_cake`
--

DROP TABLE IF EXISTS `product_cake`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_cake` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img_url` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_cake`
--

LOCK TABLES `product_cake` WRITE;
/*!40000 ALTER TABLE `product_cake` DISABLE KEYS */;
INSERT INTO `product_cake` VALUES (1,'http://cake-img.stor.sinaapp.com/product/product-8.png','198.00','冰雪奇缘',99,'福建厦门'),(2,'http://cake-img.stor.sinaapp.com/product/product-9.png','258.00','小公主',99,'福建厦门'),(3,'http://cake-img.stor.sinaapp.com/product/product-10.png','258.00','雪域牛乳芝士',99,'福建厦门'),(4,'http://cake-img.stor.sinaapp.com/product/product-11.png','258.00','雪域牛乳芝士',99,'福建厦门'),(5,'http://cake-img.stor.sinaapp.com/product/product-12.png','198.00','百分百恋人',99,'福建厦门');
/*!40000 ALTER TABLE `product_cake` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_dessert`
--

DROP TABLE IF EXISTS `product_dessert`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_dessert` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img_url` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_dessert`
--

LOCK TABLES `product_dessert` WRITE;
/*!40000 ALTER TABLE `product_dessert` DISABLE KEYS */;
INSERT INTO `product_dessert` VALUES (1,'http://cake-img.stor.sinaapp.com/product/product-14.png','12.00','草莓马卡龙',99,'福建厦门'),(2,'http://cake-img.stor.sinaapp.com/product/product-15.png','20.00','芒果盒子',99,'福建厦门'),(3,'http://cake-img.stor.sinaapp.com/product/product-16.png','12.00','双皮奶',99,'福建厦门'),(4,'http://cake-img.stor.sinaapp.com/product/product-16.png','15.00','北海道草莓戚风杯',99,'福建厦门'),(5,'http://cake-img.stor.sinaapp.com/product/product-16.png','15.00','榴莲飘飘慕斯盒子',99,'福建厦门');
/*!40000 ALTER TABLE `product_dessert` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zixun`
--

DROP TABLE IF EXISTS `zixun`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zixun` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img_url` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zixun`
--

LOCK TABLES `zixun` WRITE;
/*!40000 ALTER TABLE `zixun` DISABLE KEYS */;
INSERT INTO `zixun` VALUES (1,'http://cake-img.stor.sinaapp.com/company/company-2.png','酸奶芝士蛋糕的做法 无油低热不腻','无油酸奶蛋糕，口感细腻柔滑的芝士蛋糕让人难以拒绝，每一口都含有浓郁的芝士香味，但是夏天吃芝士蛋糕，实在太腻了，而且它的高热量高脂肪让人感到压力。\n\n不添加一滴油的酸奶蛋糕就是炎炎夏日的最佳选择，采用水浴法烤制的蛋糕，可以保持柔嫩，酸奶的加入令蛋糕的口感更加细腻香醇，入口即化，让人感觉在吃芝士蛋糕。\n\n因为一滴油都没有加入，所以这个的热量很低，爽口不腻，做出来的蛋糕也不容易开裂，幸福感爆棚！\n\n \n\n材料：酸奶200克，鸡蛋4个，低筋面粉50克，玉米淀粉25克，细砂糖70克，柠檬汁几滴',1),(2,'http://cake-img.stor.sinaapp.com/company/company-3.png','榴莲千层蛋糕的做法 入口细腻香甜不油腻','对于我来说榴莲是闻着香，吃起来更香，超爱的榴莲肉泥和淡奶油一起做成千层榴莲蛋糕，不油腻，口感上层次分明，入口细腻香甜，吃一口就停不下来了。\n\n做千层，相对麻烦些的是摊可丽饼，面糊混合好了，选对了工具，其实就成功了一半了，选用小点的不粘锅，特别好操作。厚薄度按自己喜好，我摊的比较薄，约30张饼，做千层余下几张，放一点水果和奶油很好吃，瞬间被大宝消灭掉了。\n\n \n\n材料：\n\n饼皮：鸡蛋2个 面粉140克 牛奶460克 白糖40克 玉米油40克 \n\n馅料：淡奶油280克 白糖28克 榴莲适量',1),(3,'http://cake-img.stor.sinaapp.com/company/company-4.png','杨枝甘露蛋糕的做法 还会爆浆噢','吃过杨枝甘露的人大概都会爱上它的味道，满满的芒果味，还有Q弹的西米，一碗下肚，超级满足。\n\n万万没想到，杨枝甘露也能与蛋糕结合，还会爆浆！\n\n轻轻切开蛋糕，内部的奶油酱和表面的芒果如“火山爆发”一样流出来，看着就很有食欲。\n\n用勺子尝一口，嘴里充满芒果的香甜，还有裹着香浓椰浆的软糯西米，口感丰富，甜而不腻，真的超级好吃！\n\n \n\n戚风蛋糕材料：鸡蛋4只，细砂糖80克，低筋面粉40克，色拉油40克, 牛奶40克\n\n淋面材料：淡奶油200克，糖粉20克，西米100克，椰浆100克，芒果2个，西柚少许',1),(4,'http://cake-img.stor.sinaapp.com/company/company-5.png','提拉米苏的做法 520最幸福的事情','甜点是甜蜜的象征，所以很多人会在情人节的时候送蛋糕。\n\n在众多的蛋糕中，没有什么是比提拉米苏更适合的了。\n\n因为，在意大利文里，提拉米苏（Tiramisu）有“带我走”和“记住我”的含义。\n\n所以，在520情人节的时候，亲手做一款提拉米苏，然后跟另一半分享，是最幸福的事情。\n\n浓缩咖啡和可可粉香浓中带着一点苦涩，但是却让提拉米苏的甜味更突出，每一口都入口即化，甜蜜融化在心里。\n\n最重要的是这个蛋糕无需烘焙，即使没有烤箱，也是能轻松完成的呢！\n\n \n\n材料：马斯卡彭芝士250克，淡奶油150克，水 50克，',1),(5,'http://cake-img.stor.sinaapp.com/company/company-6.png','德国布雷结的做法 德国碱水包的做法','几年前从德国回来做过一次碱水包，之后一别就是几年，哈哈。主要是兴致所致，才能把东西做好，没有兴趣的时候。。。就是没兴趣。\n\n当然，兴趣一旦来了是要好好研究，把东西做好的。碱水包之于德国，相当于法棍之于法国，算是国宝级的面包了，是硬质面包的一种，不需要发酵得很蓬松，和贝果有点类似，特殊的整形方法很有意思，像是双手祈祷的样子。\n\n这种造型的结果在成品的口感上营造的不同的结果，细的地方酥脆，粗的地方有嚼劲。今天是的是基础款，之后再做衍生款。\n\n这个配方是下厨房找来的，个人认为比较靠谱，操作性也比较好。这款也非常',1),(6,'http://cake-img.stor.sinaapp.com/company/company-7.png','艾草蒸蛋糕的做法 做一个有“艾”的蛋糕','艾草蒸蛋糕\n\n艾草做的美食，最常见就要数青团，青团的菜谱有很多，所以我就不发了。我想了一些用艾草可以做的美食，其中一个就是艾草蒸蛋糕，天气越来越热了，就想吃点“草”养养生。艾草好像是春天的植物吧，它可以祛湿散寒，一般适合雨水较多的春季，其实对于南方人来说，一年四季似乎没有那么泾渭分明，而且今年气候真的很奇怪，该冷的时候不冷，不该冷的时候又冷了，前段时间还经常下那种绵绵细雨，人都快长出蘑菇了，所以，现在祛湿是重中之重！恰逢520情人节到了，做一个有“艾”的蛋糕，送给自己或送给最爱的人吧！\n\n \n\n【食材】\n',1);
/*!40000 ALTER TABLE `zixun` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-16 22:53:46
