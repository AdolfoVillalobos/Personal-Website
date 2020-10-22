export default () => (
  <div>
    <style jsx global>{`
      html,
      body {
        font-family: Helvetica;
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-family: "Catamaran", sans-serif;
        letter-spacing: 0.3px;
      }
      a {
        text-decoration: none;
      }
      .left,
      .right {
        width: 50%;
        display: inline-block;
        vertical-align: top;
      }
      .left {
        color: #efefef;
        width: 50%;
        height: 100%;
        float: left;
        text-align: center;
        overflow: hidden;
        position: fixed;
        height: 100vh;
      }
      .left .bg-img {
        background: url("../static/assets/hero.jpg") center center no-repeat;
        background-size: cover;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      .left .bg-img:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgb(43, 102, 142);
        background: linear-gradient(-45deg, rgb(4, 97, 159), rgb(51, 104, 140))
          0% 0% / 400% 400%;
        opacity: 0.7;
      }
      .left-inner,
      .right-inner {
        padding: 3em;
      }
      @media screen and (max-width: 600px) {
        .left-inner,
        .right-inner {
          padding: 1.5em;
        }
      }
      .left-inner {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        min-height: 24em;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        height: 100%;
      }
      .left .info {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: #fff;
        margin: 0 auto;
        margin: 0;
        display: flex;
        align-items: center;
        width: 100%;
        flex-direction: column;
        justify-content: center;
      }
      .left .info .name {
        font-weight: 500;
      }
      .left .info .social-links {
        margin-top: 2em;
      }
      .left .info .fa {
        margin: 0.5em;
        color: #fff;
      }
      @media screen and (max-width: 1000px) {
        .left,
        .right {
          display: block;
          width: 100%;
        }
        .left {
          position: static;
        }
      }
      .right {
        float: right;
      }
      .right a {
        color: #000;
      }
      .right h4,
      .right .content {
        display: inline-block;
        vertical-align: top;
      }
      .right h4 {
        width: 20%;
        margin: 0 0 1.2em;
        text-transform: uppercase;
        font-size: 0.8em;
        background-color: #2a54f5;
        background-image: -webkit-linear-gradient(
          45deg,
          #2a54f5 0%,
          #33e5bb 100%
        );
        background-image: linear-gradient(45deg, #2a54f5 0%, #33e5bb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .right ul {
        padding: 0;
        margin: 0;
      }
      .right .content {
        width: 80%;
        padding: 0;
        margin: 0 0 3em;
        font-weight: 300;
        line-height: 1.3;
      }
      .right .content ul.description {
        padding-left: 1.2em;
        margin-top: 10px;
        font-size: 0.9em;
      }
      .right .introduction .intro-p:first-of-type {
        margin-top: 0;
      }
      .right .introduction .job-pls {
        font-weight: 500;
        background-color: #2a54f5;
        background-image: -webkit-linear-gradient(
          45deg,
          #2a54f5 0%,
          #33e5bb 100%
        );
        background-image: linear-gradient(45deg, #2a54f5 0%, #33e5bb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
      }
      .right .skills .skill-category {
        margin-bottom: 10px;
      }
      .right .skills .skill-category:last-of-type {
        margin-bottom: 0px;
      }
      .right .skills .skill-category > strong {
        text-transform: uppercase;
        font-size: 0.8em;
      }
      .right .education {
        font-size: 1em;
      }
      .right .education .university {
        font-weight: 700;
        font-size: 1em;
      }
      .right .education .college {
        font-weight: 700;
        font-style: italic;
        margin-bottom: 10px;
      }
      .right .education .major,
      .right .education .minor,
      .right .education .conc,
      .right .education .study-abroad {
        font-size: 0.9em;
      }
      .right .education .major > strong,
      .right .education .minor > strong,
      .right .education .conc > strong,
      .right .education .study-abroad > strong {
        font-weight: 500;
      }
      .right .education .study-abroad {
        margin-top: 10px;
      }
      .right .education .grad-date {
        text-transform: uppercase;
        color: #aaa;
        font-size: 0.7em;
        font-weight: 500;
        margin-top: 1.2em;
      }
      .right .experience .exp-item {
        margin-bottom: 2em;
      }
      .right .experience .exp-item:last-of-type {
        margin-bottom: 0;
      }
      .right .experience .exp-item .job {
        margin: 0;
        font-weight: 700;
      }
      .right .experience .exp-item .duration {
        font-size: 0.7em;
        font-weight: 500;
        float: right;
        color: #aaa;
        text-transform: uppercase;
        position: relative;
        top: 1px;
        margin-bottom: 5px;
      }
      @media screen and (max-width: 340px) {
        .right .experience .exp-item .duration {
          float: none;
        }
      }
      .right .experience .exp-item .title {
        font-weight: 700;
        font-style: italic;
      }
      .right .projects .project-item {
        margin-bottom: 1.2em;
      }
      .right .projects .project-title {
        font-weight: 700;
      }
      .right .projects .project-desc {
        font-size: 0.8em;
        margin: 0 0 10px;
      }
      .right a.resume {
        display: block;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
        padding: 15px 0px;
        background-color: #f5f5f5;
        border-radius: 5px;
        transition: all 0.3s ease;
      }
      .right a.resume:hover {
        background-color: #f1f1f1;
      }
      .right a.resume .resume-link {
        font-weight: 700;
        font-size: 1em;
        text-transform: uppercase;
        background-color: #2a54f5;
        background-image: -webkit-linear-gradient(
          45deg,
          #2a54f5 0%,
          #33e5bb 100%
        );
        background-image: linear-gradient(45deg, #2a54f5 0%, #33e5bb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      @media screen and (max-width: 600px) {
        .right h4,
        .right .content {
          display: block;
          vertical-align: top;
          width: 100%;
        }
      }
    `}</style>
  </div>
);


