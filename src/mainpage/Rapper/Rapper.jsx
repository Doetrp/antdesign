import "antd/dist/antd.css";
import { Carousel, Image } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../common/MainLayout";

export function Rapper() {
  const [visible, setVisible] = useState(false);
  return (
    <MainLayout>
      <Carousel autoplay>
        <Image
          preview={{ visible: false }}
          height={300}
          width={1260}
          src="https://cdn.gamingdose.com/wp-content/uploads/2020/07/Logic-1.jpeg"
          onClick={() => setVisible(true)}
        />
        <Image
          preview={{ visible: false }}
          height={300}
          width={1260}
          src="https://i2.wp.com/wikiofcelebs.com/wp-content/uploads/2021/07/NF.jpg?w=1077&ssl=1"
          onClick={() => setVisible(true)}
        />
        <Image
          preview={{ visible: false }}
          height={300}
          width={1260}
          src="https://cms.thaiticketmajor.com/imgUpload/imgeditor/01-Eminem-press-by-Craig-McDean-2019-billboard-1548-1024x677.jpg"
          onClick={() => setVisible(true)}
        />
        <Image
          preview={{ visible: false }}
          height={300}
          width={1260}
          src="https://urbanmashup.files.wordpress.com/2016/01/macklemore-white-privilege-ii.jpg?w=625&h=340&crop=1"
          onClick={() => setVisible(true)}
        />
      </Carousel>
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image src="https://cdn.gamingdose.com/wp-content/uploads/2020/07/Logic-1.jpeg" />
          <Image src="https://i2.wp.com/wikiofcelebs.com/wp-content/uploads/2021/07/NF.jpg?w=1077&ssl=1" />
          <Image src="https://cms.thaiticketmajor.com/imgUpload/imgeditor/01-Eminem-press-by-Craig-McDean-2019-billboard-1548-1024x677.jpg" />
        </Image.PreviewGroup>
      </div>
      <div style={{ textAlign: "center" }}>
        <div>
          <h2>Favorite Rapper</h2>
          <div />
        </div>
        <div class="ant-row featureList___3LuG-">
          <div class="ant-col featureItem___IkTjD ant-col-md-6">
            <div class="featureContent___3hjXF" style={{margin: "10px"}}>
              <Link to="/contact">
                <img
                  src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t31.18172-8/11021448_1567723720153209_457006623157917643_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=973b4a&_nc_ohc=7XEFAlRcqXAAX8sWlDC&_nc_ht=scontent.fbkk28-1.fna&oh=a096b9d62e8cac71be673f26899e30ec&oe=61C2AAD5"
                  alt="Eminem"
                  width="100"
                />
                <h4>Eminem</h4>
                <label style={{ color: "black" }}>
                  Marshall Bruce Mathers III
                </label>
              </Link>
            </div>
          </div>
          <div class="ant-col featureItem___IkTjD ant-col-md-6">
            <div class="featureContent___3hjXF" style={{margin: "10px"}}>
              <Link to="/contact">
                <img
                  src="https://files.kstatecollegian.com/2018/10/sam_spratt_logic_ysiv_coverart_final.jpg"
                  alt="Logic"
                  width="100"
                />
                <h4>Logic</h4>
                <label style={{ color: "black" }}>
                  Sir Robert Bryson Hall II
                </label>
              </Link>
            </div>
          </div>
          <div class="ant-col featureItem___IkTjD ant-col-md-6">
            <div class="featureContent___3hjXF" style={{margin: "10px"}}>
              <Link to="/contact">
                <img
                  src="https://artist-assets.hubbardradio.com/nf-3_v1000.jpg"
                  alt="NF"
                  width="100"
                />
                <h4>NF</h4>
                <label style={{ color: "black" }}>Nathan John Feuerstein</label>
              </Link>
            </div>
          </div>
          <div class="ant-col featureItem___IkTjD ant-col-md-6">
            <div class="featureContent___3hjXF" style={{margin: "10px"}}>
              <Link to="/contact">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Macklemore_The_Heist_Tour_1_cropped.jpg/800px-Macklemore_The_Heist_Tour_1_cropped.jpg"
                  alt="Macklemore"
                  width="90"
                />
                <h4>Macklemore</h4>
                <label style={{ color: "black" }}>
                  Benjamin Hammond Haggerty
                </label>
              </Link>
            </div>
          </div>
          <div class="ant-col featureItem___IkTjD ant-col-md-6">
            <div class="featureContent___3hjXF" style={{margin: "10px"}}>
              <Link to="/contact">
                <img
                  src="https://s2.glbimg.com/PAK-TFsgopZmOpyFs7PmIHCJsfM=/e.glbimg.com/og/ed/f/original/2021/06/14/200615761_847973569261384_7456633515386536899_n.jpg"
                  alt="Post Malone"
                  width="85"
                />
                <h4>Post Malone</h4>
                <label style={{ color: "black" }}>Austin Richard Post</label>
              </Link>
            </div>
          </div>
          <div class="ant-col featureItem___IkTjD ant-col-md-6">
            <div class="featureContent___3hjXF" style={{margin: "10px"}}>
              <Link to="/contact">
                <img
                  src="https://images.mubicdn.net/images/cast_member/515896/cache-147075-1464590228/image-w856.jpg?size=240x"
                  alt="Drake"
                  width="90"
                />
                <h4>Drake</h4>
                <label style={{ color: "black" }}>Aubrey Drake Graham</label>
              </Link>
            </div>
          </div>
          <div class="ant-col featureItem___IkTjD ant-col-md-6">
            <div class="featureContent___3hjXF" style={{margin: "10px"}}>
              <Link to="/contact">
                <img
                  src="https://typebeats.com/wp-content/uploads/2021/04/joyner-lucas-type-beat.jpg"
                  alt="Lukas Joyner"
                  width="108"
                />
                <h4>Lukas Joyner</h4>
                <label style={{ color: "black" }}>Gary Lucas</label>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
