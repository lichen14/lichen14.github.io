const site = {
    year: "2020-2024",
    url: "https://github.com/lichen14/duducheng.github.io",
    lastUpdated: "Nov, 2024",
    showPageviews: false,
    navbar: [
        {
            tag: "Home",
            href: "#"
        },
        {
            tag: "Publications",
            href: "#publications"
        },
        {
            tag: "Talks",
            href: "#talks"
        },
    ],
    relatedProjects: [
        {
            tag: "AttENT",
            href: "https://github.com/lichen14/AttENT"
        },
        {
            tag: "TOWER",
            href: "https://github.com/lichen14/TOWER"
        },
        {
            tag: "CROTS",
            href: "https://github.com/luoxin13/CROTS"
        },
        {
            tag: "Others Learning Notes from duducheng",
            href: "https://github.com/duducheng/Learning-Notes"
        },
        {
            tag: "AI Conference Deadlines (CCF)",
            href: "https://ccfddl.github.io/"
        },
//         {
//             tag: "Export: Source Data (json)",
//             href: "export/data.html"
//         },
//         {
//             tag: "Export: Publications (resume)",
//             href: "export/publications.html"
//         },   
    ]
};

const about = {
    nameEN: "Chen Li",
    nameCN: "李晨",
    affiliation: "Ph.D. Candidate, National University of Defense Technology",
    avatar: "assets/imgs/7c_副本.jpg",
    contacts: [
        {
            //Please make sure the first one is always Google Scholar.
            href: "https://scholar.google.com/citations?user=2xiuYdgAAAAJ",
            src: "assets/site/google_scholar.jpg"
        },
        {
            href: "https://www.linkedin.com/in/lichen14/",
            src: "assets/site/linkedin.jpg"
        },
        {
            href: "https://github.com/lichen14",
            src: "assets/site/github.jpg"
        },
        {
            href: "mailto:lichen14@nudt.edu.cn",
            src: "assets/site/mail.png"
        }
    ]
};

const biography = `I am a PhD student in the College of Computer, National University of Defense Technology, advised by <a href="https://scholar.google.com/citations?user=LGwaNSwAAAAJ">Prof. Yusong Tan</a> and <a href="https://scholar.google.com/">Wei Chen</a>. I received CS Bachelor and Master degree from the same university.  <br> 
I focus on medical image analysis, computer vision and weak/unsupervised learning. I have authored 10+ papers on top-tier journals / conferences, e.g., IJCV, ACM MM, NN, IEEE RAL, IEEE ICASSP, IEEE BIBM, IEE ICIP, IEEE ICPR.`

const news = [
    {
        "mmyyyy": "11/2024",
        "text": "Accept the invitation to review for the top journal IEEE Transactions on Circuits and Systems for Video Technology."
    },
    {
        "mmyyyy": "08/2024",
        "text": "1 more paper on esophageal cancer T-stage diagnosis was published by Expert Systems with Applications."
    },
    {
        "mmyyyy": "05/2024",
        "text": "Begin to work as a reviewer in the top journal IEEE Transactions on Neural Networks and Learning Systems."
    },
    {
        "mmyyyy": "02/2024",
        "text": "Begin to work as a reviewer in the two journals Knowledge-Based Systems and Computerized Medical Imaging and Graphics."
    },
    {
        "mmyyyy": "01/2024",
        "text": "Accept the invitation to review for conference MICCAI'2024."
    },
    {
        "mmyyyy": "12/2023",
        "text": "Give a talk on the 3rd Postgraduate Academic Forum of Journal of image and Graphics."
    },
    {
        "mmyyyy": "10/2023",
        "text": "1 more paper on Self-supervised Learning was published by Neural Networks (TOWER)."
    },
    {
        "mmyyyy": "07/2023",
        "text": "Begin to work as a reviewer in the journal (Neural Networks)."
    },
    {
        "mmyyyy": "07/2023",
        "text": "1 more paper on medical image segmentation by unsupervised domain adaptation was accepted by IEEE ICASSP'2023. (DLM)."
    },
    {
        "mmyyyy": "06/2023",
        "text": "1 more paper on Source-Free Domain Adaptive Semantic Segmentation was accepted by International Journal of Computer Vision. (CROTS)."
    },
    {
        "mmyyyy": "01/2023",
        "text": "Accept the invitation to review for MICCAI'2023 and Computer Methods and Programs in Biomedicine (CMPB)."
    },
    {
        "mmyyyy": "10/2022",
        "text": "1 more paper on Source-Free Model Adaptation was published by IEEE Robotics and Automation Letters. (Multi-Level Consistency Learning for Source-Free Model Adaptation)"
    },
    {
        "mmyyyy": "09/2022",
        "text": "1 more paper on Unsupervised Domain Adaptation was published by Neural Networks. (Adversarial Style Discrepancy Minimization for Unsupervised Domain Adaptation)"
    },
    {
        "mmyyyy": "02/2022",
        "text": "Accept the invitation to review for MICCAI'2022 and Measurement."
    },
    {
        "mmyyyy": "01/2022",
        "text": "1 more paper on Pseudo Labeling was accepted by IEEE ICASSP'2022. (Adaptive Pseudo Labeling for Source-Free Domain Adaptation in Medical Image Segmentation)"
    },
    {
        "mmyyyy": "12/2021",
        "text": "Invited to be the session chair (Biomedical Image Analysis) of BIBM'2021."
    },
    {
        "mmyyyy": "10/2021",
        "text": "2 more paper on medical image segmentation by unsupervised domain adaptation were accepted by IEEE BIBM'2021. (AttENT and TriDL)"
    },
    {
        "mmyyyy": "09/2021",
        "text": "Begin to work as a reviewer in the IJMI (International Journal of Medical Imaging) from Sept.2021 to Sept.2023 and Applied Sciences, Biology, Sensors."
    },
    {
        "mmyyyy": "06/2021",
        "text": "1 more paper on Lane Detection was accepted by ACM MM'2021. (Fast and Accurate Lane Detection via Frequency Domain Learning)"
    },
    {
        "mmyyyy": "02/2021",
        "text": "1 more paper on Stereo Matching was accepted by Sensors.<a href='https://doi.org/10.3390/s21041430'>"
    },
    {
        "mmyyyy": "10/2021",
        "text": "1 more paper on Object Detection was accepted by ICPR‘2020.<a href='https://doi.org/10.3390/s21041430'>"
    },
    {
        "mmyyyy": "08/2020",
        "text": "2 papers (Render-based method and point-sampling method for multi-organs & tumors segmentation) were accepted by Applied Science.)"
    },
    {
        "mmyyyy": "05/2020",
        "text": "1 paper on liver CT segmentation with attention u-net++ was accepted by ICIP'2020.<a href = 'https://ieeexplore.ieee.org/abstract/document/9190761'>"
    },
    {
        "mmyyyy": "02/2020",
        "text": "1 paper on Stereo Matching was published in Remote Sensors.<a href='https://doi.org/10.3390/rs12030588'>"
    },
    {
        "mmyyyy": "01/2020",
        "text": "1 paper on the application of u-net was accepted by MICAD'20."
    }
];


const publications = [
    {
        title: "Segmentation prompts classification: A nnUNet-based 3D transfer learning framework with ROI tokenization and cross-task attention for esophageal cancer T-stage diagnosis",
        file: "https://doi.org/10.1016/j.eswa.2024.125067",
        venue: "Expert Systems with Applications",
        year: "2024",
        authors: ["Chen Li", "Runyuan Wang", "Ping He", "Wei Chen", "Wei Wu", "Yi Wu"],
        img: "assets/imgs/eswa2024.jpg",
        materials: [
            {
                tag: "paper",
                href: "assets/publication/eswa2024.pdf"
            },
        ]
    },
    {
        title: "A knowledge-based learning framework for self-supervised pre-training towards enhanced recognition of biomedical microscopy images",
        file: "https://doi.org/10.1016/j.neunet.2023.09.001",
        venue: "Neural Networks",
        year: "2023",
        authors: ["Wei Chen", "Chen Li*", "Dan Chen", "Xin Luo"],
        img: "assets/imgs/tower.jpg",
        materials: [
            {
                tag: "paper",
                href: "https://doi.org/10.1016/j.neunet.2023.09.001"
            },
            {
                tag: "code",
                href: "https://github.com/lichen14/TOWER"
            },
        ]
    },
    {
        title: "Crots: Cross-Domain Teacher–Student Learning for Source-Free Domain Adaptive Semantic Segmentation",
        file: "https://doi.org/10.1007/s11263-023-01863-1",
        venue: "International Journal of Computer Vision",
        year: "2023",
        authors: ["Xin Luo", "Wei Chen*", "Zhengfa Liang", "Longqi Yang", "Siwei Wang", "Chen Li"],
        img: "assets/imgs/crots.jpg",
        materials: [
            {
                tag: "paper",
                href: "https://doi.org/10.1007/s11263-023-01863-1"
            },
            {
                tag: "code",
                href: "https://github.com/luoxin13/CROTS"
            },
        ]
    },
    {
        title: "Domain Generalized Fundus Image Segmentation via Dual-Level Mixing",
        file: "https://doi.org/10.1109/ICASSP49357.2023.10096623",
        venue: "ICASSP (IEEE International Conference on Acoustics, Speech and Signal Processing)",
        year: "2023",
        authors: ["Xin Luo", "Wei Chen*", "Chen Li", "Bin Zhou", "Yusong Tan"],
        img: "assets/imgs/dlm.jpg",
        materials: [
            {
                tag: "paper",
                href: "https://doi.org/10.1109/ICASSP49357.2023.10096623"
            }
        ]
    },
    {
        title: "Adversarial style discrepancy minimization for unsupervised domain adaptation",
        file: "https://doi.org/10.1016/j.neunet.2022.10.015",
        venue: "Neural Networks",
        year: "2023",
        authors: ["Xin Luo", "Wei Chen*","Zhengfa Liang",  "Chen Li","Yusong Tan"],
        img: "assets/imgs/nn2022.png",
        materials: [
            {
                tag: "paper",
                href: "https://doi.org/10.1016/j.neunet.2022.10.015"
            }
        ]
    },
    {
        title: "Multi-Level Consistency Learning for Source-Free Model Adaptation",
        file: "https://ieeexplore.ieee.org/document/9928327",
        venue: "IEEE Robotics and Automation Letters",
        year: "2022",
        authors: ["Xin Luo", "Wei Chen*", "Chen Li","Bin Zhou", "Yusong Tan"],
        img: "assets/imgs/ral2022.png",
        materials: [
            {
                tag: "paper",
                href: "https://ieeexplore.ieee.org/document/9928327"
            }
        ]
    },
    {
        title: "Adaptive Pseudo Labeling For Source-Free Domain Adaptation In Medical Image Segmentation",
        file: "https://ieeexplore.ieee.org/document/9746286",
        venue: "ICASSP (IEEE International Conference on Acoustics, Speech and Signal Processing)",
        year: "2022",
        authors: ["Chen Li","Wei Chen*","Xin Luo",  "Yulin He", "Yusong Tan"],
        img: "assets/imgs/icassp2021.png",
        materials: [
            {
                tag: "paper",
                href: "assets/publication/icassp2022.pdf"
            },
            {
                tag: "poster",
                href: "assets/materials/icassp_2021_poster.pdf"
            },
            {
                tag: "ppt",
                href: "assets/materials/icassp_2021_Presentation.pdf"
            }
        ]
    },
    {
        title: "AttENT: Domain-Adaptive Medical Image Segmentation via Attention-Aware Translation and Adversarial Entropy Minimization",
        file: "https://doi.org/10.1109/BIBM52615.2021.9669620",
        venue: "BIBM (IEEE International Conference on Bioinformatics and Biomedicine)",
        year: "2021",
        authors: ["Chen Li","Xin Luo", "Wei Chen*", "Yulin He", "Mingfei Wu" , "Yusong Tan"],
        img: "assets/imgs/attent.jpg",
        materials: [
            {
                tag: "paper",
                href: "assets/publication/BIBM_AttENT.pdf"
            },
            {
                tag: "code",
                href: "https://github.com/lichen14/AttENT"
            },
            {
                tag: "ppt",
                href: "assets/materials/BIBM_2021_Presentation-B221-AttENT.pdf"
            }
        ]
    },
    {
        title: "Tri-Directional Tasks Complementary Learning for Unsupervised Domain Adaptation of Cross-modality Medical Image Semantic Segmentation",
        file: "https://doi.org/10.1109/BIBM52615.2021.9669615",
        venue: "BIBM (IEEE International Conference on Bioinformatics and Biomedicine)",
        year: "2021",
        authors: ["Chen Li", "Wei Chen*", "Mingfei Wu","Xin Luo" , "Yulin He", "Yusong Tan"],
        img: "assets/imgs/tridl.jpg",
        materials: [
            {
                tag: "paper",
                href: "assets/publication/BIBM_TriDL.pdf"
            },
            {
                tag: "ppt",
                href: "assets/materials/BIBM 2021 Presentation-B521-TriDL.pdf"
            }
        ]
    },
    {
        title: "Fast and Accurate Lane Detection via Frequency Domain Learning",
        file: "https://doi.org/10.1145/3474085.3475267",
        venue: "MM (ACM International Conference on Multimedia)",
        year: "2021",
        authors: ["Yulin He", " Wei Chen",  "Zhengfa Liang",  "Dan Chen",  "Yusong Tan",  "Xin Luo", "Chen Li", "Yulan Guo"],
        img: "assets/imgs/ACM_MM_2021.png",
        materials: [
            {
                tag: "paper",
                href: "assets/publication/ACM_MM_2021.pdf"
            },
            {
                tag: "code",
                href: "https://github.com/harrylin-hyl/MSLD"
            }
        ]
    },
    {
        title: "Multi-Scale Cost Volumes Cascade Network for Stereo Matching",
        file: "https://doi.org/10.1109/ICRA48506.2021.9560864",
        venue: "ICRA (IEEE International Conference on Robotics and Automation)",
        //         abbr: "CG",
        year: "2021",
        authors: ["Xiaogang Jia","Wei Chen","Chen Li","Zhengfa Liang","Mingfei Wu","Yusong Tan"," Libo Huang"],
        img: "assets/imgs/ICAR_2021.png",
        materials: [
            {
                tag: "paper",
                href: "assets/publication/ICAR_2021.pdf"
            },
        //             ,
        //             {
        //                 tag: "preprint",
        //                 href: "https://arxiv.org/abs/1911.10477"
        //             }
        ]
    },
    {
        title: "Render U-Net: A Unique Perspective on Render to Explore Accurate Medical Image Segmentation",
        file: "https://www.mdpi.com/2076-3417/10/18/6439",
        venue: "Applied Sciences",
//         abbr: "ISBI",
        year: "2020",
        authors: ["Chen Li", "Wei Chen*", "Yusong Tan"],
        img: "assets/imgs/overview3d1.png",
        materials: [
            {
                tag: "paper",
                href: "assets/publication/applsci-10-06439.pdf"
            }
//             {
//                 tag: "dataset",
//                 href: "https://medmnist.github.io/#dataset"
//             },
//             {
//                 tag: "preprint",
//                 href: "https://arxiv.org/abs/2010.14925"
//             }
        ]
    },
    {
        title: "Attention Unet++: A Nested Attention-Aware U-Net for Liver CT Image Segmentation",
        file: "https://doi.org/10.1016/j.ebiom.2020.103106",
        venue: "IEEE International Conference on Image Processing",
        abbr: "ICIP",
        year: "2020",
        authors: ["Chen Li", "Yusong Tan*", "Wei Chen", "Xin Luo", "Yuanming Gao", "Xiaogang Jia", "Zhiying Wang"],
        img: "assets/imgs/deepsup.png",
        materials: [
            {
                tag: "paper",
                href: "assets/publication/ICIP 论文全文.pdf"
            },
//             {
//                 tag: "project page",
//                 href: "https://m3dv.github.io/FracNet/"
//             },
//             {
//                 tag: "code",
//                 href: "#TODO"
//             }
//             {
//                 tag: "dataset",
//                 href: "https://ribfrac.grand-challenge.org/"
//             },
//             {
//                 tag: "commentary",
//                 href: "https://doi.org/10.1016/j.ebiom.2020.103158"
//             }
        ]
    },
    {
        title: "CenterRepp: Predict Central Representative Point Set's Distribution For Detection",
        file: "https://ieeexplore.ieee.org/abstract/document/9190761",
        venue: "ICPR (International Conference on Pattern Recognition)",
        //         abbr: "CG",
        year: "2020",
        authors: ["Yulin He", "Limeng Zhang", "Wei Chen", "Xin Luo", "Xiaogang Jia", "Chen Li"],
        img: "assets/imgs/centerrepp.gif",
        materials: [
            {
                tag: "paper",
                href: "assets/publication/centerrepp.pdf"
            },
            {
                tag: "code",
                href: "#TODO"
            }
        //             ,
        //             {
        //                 tag: "preprint",
        //                 href: "https://arxiv.org/abs/1911.10477"
        //             }
        ]
    },
    {
        title: "A Joint 2D-3D Complementary Network for Stereo Matching",
        file: "https://doi.org/10.3390/s21041430",
        abbr: "Sensors",
        year: "2020",
        authors: ["Xiaogang Jia","Wei Chen *","Zhengfa Liang","Xin Luo","Mingfei Wu","Chen Li","Yulin He","Yusong Tan","Libo Huang"],
//         img: "assets/imgs/LeBA NeurIPS20.png",
        materials: [
            {
                tag: "publication",
                href: "assets/publication/sensors_2021.pdf"
            },
//             {
//                 tag: "code",
//                 href: "#TODO"
//             }
//             {
//                 tag: "short slides",
//                 href: "assets/materials/LeBA NeurIPS20 slides.pdf"
//             },
//             ,
//             {
//                 tag: "poster",
//                 href: "assets/materials/LeBA NeurIPS20 poster.pdf"
//             }
        ]
    },
    {
        title: "Application of U-Shaped Convolutional Neural Network Based on Attention Mechanism in Liver CT Image Segmentation",
        file: "http://doi.org/10.1007/978-3-030-59719-1_55",
        venue: "International Conference on Medical Imaging and Computer-Aided Diagnosis",
        abbr: "MICAD",
        year: "2020",
        authors: ["Chen Li", "Wei Chen", "Xin Luo", "Mingfei Wu", "Xiaogang Jia", "Yusong Tan", "Zhiying Wang"],
//         highlight: "Early Accepted",
        materials: [
            {
                tag: "paper",
                href: "assets/publication/21.pdf"
            },
//             {
//                 tag: "code",
//                 href: "#TODO"
//             },
//             {
//                 tag: "video",
//                 href: "https://www.bilibili.com/video/BV1qT4y1c73k/"
//             },
//             {
//                 tag: "slides",
//                 href: "assets/materials/AlignShift MICCAI20 slides.pdf"
//             }
//             {
//                 tag: "graphical abstract",
//                 href: "assets/materials/AlignShift MICCAI20 abstract.pdf"
//             }
        ]
//         img: "assets/imgs/AlignShift MICCAI20.jpg"
    },
    {
        title: "Point-Sampling Method Based on 3D U-Net Architecture to Reduce the Influence of False Positive and Solve Boundary Blur Problem in 3D CT Image Segmentation",
        file: "https://doi.org/10.3390/app10196838",
        venue: "Applied Sciences",
        year: "2020",
        authors: ["Chen Li", "Wei Chen*", "Yusong Tan"],
        img: "assets/imgs/point-sampling.png",
        materials: [
            {
                tag: "paper",
                href: "assets/publication/applsci-10-06838（Point-Sampling Method Based on 3D U-Net Architecture to Reduce the Influence of False Positive and Solve Boundary Blur Problem in 3D CT Image Segmentation）.pdf"
            },
//             {
//                 tag: "code",
//                 href: "#TODO"
//             }
        ]
    },
    {
        title: "A Unified Framework for Depth Prediction from a Single Image and Binocular Stereo Matching",
        file: "https://doi.org/10.3390/rs12030588",
        venue: "Remote Sensors",
//         abbr: "ISBI",
        year: "2020",
        authors: ["Wei Chen","Xin Luo","Zhengfa Liang","Chen Li","Mingfei Wu","Yuanming Gao","Xiaogang Jia"],
        img: "",
        materials: [
            {
                tag: "paper",
                href: "assets/publication/remote_sensing_2020.pdf"
            },
//             {
//                 tag: "project page",
//                 href: "https://medmnist.github.io/"
//             },
//             {
//                 tag: "code",
//                 href: "https://github.com/lichen14/RenderUNet-Pytorch"
//             }
//             {
//                 tag: "dataset",
//                 href: "https://medmnist.github.io/#dataset"
//             },
//             {
//                 tag: "preprint",
//                 href: "https://arxiv.org/abs/2010.14925"
//             }
        ]
    }
//     {
//         title: "医学三维计算机视觉: 研究进展和挑战",
//         file: "assets/publication/M3DV CJIG.pdf",
//         note: '"Advances and Challenges in Medical 3D Computer Vision"; in Chinese',
//         venue: "中国图象图形学报 (Journal of Image and Graphics)",
//         year: "2020",
//         authors: ["Jiancheng Yang", "Bingbing Ni"],
//         img: "assets/imgs/M3DV CJIG.jpg",
//         materials: [
//             {
//                 tag: "publication",
//                 href: "http://doi.org/10.11834/jig.200244"
//             }
//         ]
//     },
//     {
//         title: "AlignShift: Bridging the Gap of Imaging Thickness in 3D Anisotropic Volumes",
//         file: "assets/publication/AlignShift MICCAI20.pdf",
//         venue: "International Conference on Medical Image Computing and Computer-Assisted Intervention",
//         abbr: "MICCAI",
//         year: "2020",
//         authors: ["Jiancheng Yang*", "Yi He*", "Xiaoyang Huang", "Jingwei Xu", "Xiaodan Ye", "Guangyu Tao", "Bingbing Ni"],
//         highlight: "Early Accepted",
//         materials: [
//             {
//                 tag: "publication",
//                 href: "http://doi.org/10.1007/978-3-030-59719-1_55",
//             },
//             {
//                 tag: "code",
//                 href: "https://github.com/M3DV/AlignShift",
//             },
//             {
//                 tag: "video",
//                 href: "https://www.bilibili.com/video/BV1qT4y1c73k/"
//             },
//             {
//                 tag: "slides",
//                 href: "assets/materials/AlignShift MICCAI20 slides.pdf"
//             },
//             {
//                 tag: "graphical abstract",
//                 href: "assets/materials/AlignShift MICCAI20 abstract.pdf"
//             }
//         ],
//         img: "assets/imgs/AlignShift MICCAI20.jpg"
//     },
//     {
//         title: "Hierarchical Classification of Pulmonary Lesions: A Large-Scale Radio-Pathomics Study",
//         file: "assets/publication/Hier MICCAI20.pdf",
//         venue: "International Conference on Medical Image Computing and Computer-Assisted Intervention",
//         abbr: "MICCAI",
//         year: "2020",
//         authors: ["Jiancheng Yang*", "Mingze Gao*", "Kaiming Kuang", "Bingbing Ni", "Yunlang She", "Dong Xie", "Chang Chen"],
//         highlight: "Early Accepted",
//         materials: [
//             {
//                 tag: "publication",
//                 href: "https://doi.org/10.1007/978-3-030-59725-2_48",
//             },
//             {
//                 tag: "video",
//                 href: "https://www.bilibili.com/video/BV11a4y157TR/"
//             },
//             {
//                 tag: "slides",
//                 href: "https://docs.qq.com/pdf/DS2thQ1ZpSWtYb0lZ"
//             },
//             {
//                 tag: "graphical abstract",
//                 href: "assets/materials/Hier MICCAI20 abstract.pdf"
//             }
//         ],
//         img: "assets/imgs/Hier MICCAI20.jpg"
//     },
//     {
//         title: "MIA-Prognosis: A Deep Learning Framework to Predict Therapy Response",
//         file: "assets/publication/MIA MICCAI20.pdf",
//         venue: "International Conference on Medical Image Computing and Computer-Assisted Intervention",
//         abbr: "MICCAI",
//         year: "2020",
//         authors: ["Jiancheng Yang*", "Jiajun Chen*", "Kaiming Kuang", "Tiancheng Lin", "Junjun He", "Bingbing Ni"],
//         highlight: "Early Accepted; Student Travel Award",
//         materials: [
//             {
//                 tag: "publication",
//                 href: "http://doi.org/10.1007/978-3-030-59713-9_21",
//             },
//             {
//                 tag: "video",
//                 href: "https://www.bilibili.com/video/BV1AV411278k/"
//             },
//             {
//                 tag: "slides",
//                 href: "https://docs.qq.com/pdf/DS3JDVGhyR2dScFdp"
//             },
//             {
//                 tag: "graphical abstract",
//                 href: "assets/materials/MIA MICCAI20 abstract.pdf"
//             },
//             {
//                 tag: "code",
//                 href: "https://github.com/M3DV/SimTA"
//             }
//         ],
//         img: "assets/imgs/MIA MICCAI20.jpg"
//     },
//     {
//         title: "Learning Tumor Growth via Follow-Up Volume Prediction for Lung Nodules",
//         file: "assets/publication/NoFo MICCAI20.pdf",
//         venue: "International Conference on Medical Image Computing and Computer-Assisted Intervention",
//         abbr: "MICCAI",
//         year: "2020",
//         authors: ["Yamin Li*", "Jiancheng Yang*", "Yi Xu", "Jingwei Xu", "Xiaodan Ye", 'Guangyu Tao', 'Xueqian Xie', 'Liu Guixue'],
//         img: "assets/imgs/NoFo MICCAI20.jpg",
//         materials: [
//             {
//                 tag: "publication",
//                 href: "https://doi.org/10.1007/978-3-030-59725-2_49",
//             },
//             {
//                 tag: "video",
//                 href: "https://www.bilibili.com/video/BV1954y117Rz/"
//             },
//             {
//                 tag: "slides",
//                 href: "https://docs.qq.com/pdf/DS1ZnUENFc1Rra1lt"
//             },
//             {
//                 tag: "graphical abstract",
//                 href: "assets/materials/NoFo MICCAI20 abstract.pdf"
//             }
//         ]
//     },
//     {
//         title: "Decoupled Gradient Harmonized Detector for Partial Annotation: Application to Signet Ring Cell Detection",
//         file: "assets/publication/LTC Neurocomputing.pdf",
//         note: "1st runner up solution for MICCAI DigestPath 2019 challenge detection track",
//         venue: "Neurocomputing",
//         year: "2020",
//         authors: ["Tiancheng Lin", 'Yuanfan Guo', 'Canqian Yang', 'Jiancheng Yang', "Yi Xu"],
//         img: "assets/imgs/LTC Neurocomputing.jpg",
//         materials: [
//             {
//                 tag: "publication",
//                 href: "https://doi.org/10.1016/j.neucom.2020.03.128"
//             }
//         ]
//     },
//     {
//         title: "Deep Kinematics Analysis for Monocular 3D Pose Estimation",
//         file: "assets/publication/XJW CVPR20.pdf",
//         venue: "IEEE Conference on Computer Vision and Pattern Recognition",
//         abbr: "CVPR",
//         year: "2020",
//         authors: ["Jingwei Xu", "Zhenbo Yu", "Bingbing Ni", "Jiancheng Yang", "Xiaokang Yang", "Wenjun Zhang"],
//         materials: [
//             {
//                 tag: "publication",
//                 href: "https://doi.org/10.1109/CVPR42600.2020.00098"
//             },
//             {
//                 tag: "video",
//                 href: "https://www.youtube.com/watch?v=zm0yYZOsMig"
//             }
//         ],
//         img: "assets/imgs/XJW CVPR20.jpg"
//     },
//     {
//         title: "Relational Learning between Multiple Pulmonary Nodules via Deep Set Attention Transformers",
//         file: "assets/publication/NoduleSAT ISBI20.pdf",
//         venue: "IEEE International Symposium on Biomedical Imaging",
//         abbr: "ISBI",
//         year: "2020",
//         authors: ["Jiancheng Yang", "Haoran Deng", "Xiaoyang Huang", "Bingbing Ni", "Yi Xu"],
//         materials: [
//             {
//                 tag: "publication",
//                 href: "https://doi.org/10.1109/ISBI45749.2020.9098722"
//             },
//             {
//                 tag: "slides",
//                 href: "assets/materials/NoduleSAT ISBI20 slides.pdf"
//             },
//             {
//                 tag: "video",
//                 href: "https://www.bilibili.com/video/BV1AK411K7GW/",
//             }
//         ],
//         img: "assets/imgs/NoduleSAT ISBI20.jpg"
//     },
//     {
//         title: "Dynamic Points Agglomeration for Hierarchical Point Sets Learning",
//         file: "assets/publication/LJX ICCV19.pdf",
//         venue: "IEEE International Conference on Computer Vision",
//         abbr: "ICCV",
//         year: "2019",
//         authors: ["Jinxian Liu", "Bingbing Ni", "Caiyuan Li", "Jiancheng Yang", "Qi Tian"],
//         materials: [
//             {
//                 tag: "publication",
//                 href: "https://doi.org/10.1109/ICCV.2019.00764"
//             }
//         ],
//         img: "assets/imgs/LJX ICCV19.jpg"
//     },
//     {
//         title: "Probabilistic Radiomics: Ambiguous Diagnosis with Controllable Shape Analysis",
//         file: "assets/publication/Radiomics MICCAI19.pdf",
//         venue: "International Conference on Medical Image Computing and Computer-Assisted Intervention",
//         abbr: "MICCAI",
//         year: "2019",
//         authors: ["Jiancheng Yang*", "Rongyao Fang*", "Bingbing Ni", "Yamin Li", "Yi Xu", "Linguo Li"],
//         highlight: "Early Accepted",
//         materials: [
//             {
//                 tag: "publication",
//                 href: "https://doi.org/10.1007/978-3-030-32226-7_73"
//             },
//             {
//                 tag: "poster",
//                 href: "assets/materials/MICCAI19_poster_581.pdf"
//             }
//         ],
//         img: "assets/imgs/Radiomics MICCAI19.jpg"
//     },
//     {
//         title: "Toward Automatic Prediction of EGFR Mutation Status in Pulmonary Adenocarcinoma with 3D Deep Learning",
//         file: "assets/publication/EGFR Cancer Medicine.pdf",
//         venue: "Cancer Medicine",
//         year: "2019",
//         authors: ["Wei Zhao*", "Jiancheng Yang*", "Bingbing Ni", "Dexi Bi", "Yingli Sun", "Mengdi Xu", "Xiaoxia Zhu", "Cheng Li", "Liang Jin", "Pan Gao", "Peijun Wang", "Yanqing Hua", "Ming Li"],
//         highlight: "Cover Article",
//         materials: [
//             {
//                 tag: "publication",
//                 href: "https://doi.org/10.1002/cam4.2233"
//             },
//             {
//                 tag: "cover image",
//                 href: "https://doi.org/10.1002/cam4.2391"
//             }
//         ],
//         img: "assets/imgs/EGFR Cancer Medicine.jpg"
//     },
//     {
//         title: "Modeling Point Clouds with Self-Attention and Gumbel Subset Sampling",
//         file: "assets/publication/PAT CVPR19.pdf",
//         venue: "IEEE Conference on Computer Vision and Pattern Recognition",
//         abbr: "CVPR",
//         year: "2019",
//         authors: ["Jiancheng Yang", "Qiang Zhang", "Bingbing Ni", "Linguo Li", "Jinxian Liu", "Qi Tian"],
//         materials: [
//             {
//                 tag: "publication",
//                 href: "https://doi.org/10.1109/CVPR.2019.00344"
//             },
//             {
//                 tag: "poster",
//                 href: "assets/materials/cvpr19_poster_2003.pdf"
//             }
//         ],
//         img: "assets/imgs/PAT CVPR19.jpg"
//     },
//     {
//         title: "3D Deep Learning from CT Scans Predicts Tumor Invasiveness of Subcentimeter Pulmonary Adenocarcinomas",
//         file: "assets/publication/Invasiveness Cancer Research.pdf",
//         venue: "Cancer Research",
//         year: "2018",
//         authors: ["Wei Zhao*", "Jiancheng Yang*", "Yingli Sun", "Cheng Li", "Weilan Wu", "Liang Jin", "Zhiming Yang", "Bingbing Ni", "Pan Gao", "Peijun Wang", "Yanqing Hua", "Ming Li"],
//         highlight: "Impact Factor: 9.130",
//         materials: [
//             {
//                 tag: "publication",
//                 href: "http://doi.org/10.1158/0008-5472.CAN-18-0696"
//             },
//             {
//                 tag: "code",
//                 href: "https://github.com/duducheng/DenseSharp"
//             },
//             {
//                 tag: "graphical abstract",
//                 href: "assets/materials/CR Graphical Abstract.pdf"
//             }
//         ],
//         img: "assets/imgs/Invasiveness Cancer Research.jpg"
//     }
];

const preprints = [
    {
        title: "A Knowledge-based Learning Framework for Self-supervised Pre-training Towards Enhanced Recognition of Medical Images",
        file: "https://arxiv.org/abs/2211.14715",
        venue: "/",
        year: "2023",
        authors: ["Wei Chen", "Chen Li","Dan Chen","Xin Luo"],
        img: "assets/imgs/tower.png",
        materials: [
            {
                tag: "paper",
                href: "https://arxiv.org/pdf/2211.14715.pdf"
            },
            {
                tag: "code",
                href: "https://github.com/lichen14/TOWER"
            }
        ]
    },
];

const honors = [
    {
        "yyyy": "12/2023",
        "text": "Best poster at the Chongqing Digital Medicine Annual Conference.",
        "materials": [
            {
                tag: "poster",
                href: "assets/imgs/cq2023-poster.png"
            },
        ]
    },
    {
        "yyyy": "11/2023",
        "text": "湖南省优秀硕士学位论文.",
        "materials": [
            {
                tag: "certificate",
                href: "http://jyt.hunan.gov.cn/jyt/sjyt/xxgk/tzgg/202312/t20231204_32456028.html"
            },
        ]
    },
//     {
//         "yyyy": "2020",
//         "text": "China National PhD Scholarship (top 2%)."
//     },
//     {
//         "yyyy": "2020",
//         "text": "<a href='https://bmvc2020.github.io/people/reviewers/'>BMVC 2020 Outstanding Reviewer Award</a>."
//     },
//     {
//         "yyyy": "2020",
//         "text": "MICCAI 2020 Student Travel Award."
//     },
//     {
//         "yyyy": "2020",
//         "text": "<a href='https://www.kaggle.com/c/prostate-cancer-grade-assessment'>MICCAI 2020 Prostate cANcer graDe Assessment (PANDA) Challenge</a>: Kaggle Silver. <i>Role: team mentor</i>."
//     },
];

const activities = {
//     organizer: [
//         "Lead organizer for <a href='https://ribfrac.grand-challenge.org/'>MICCAI 2020 RibFrac Challenge: Rib Fracture Detection and Classification</a>."
//     ],
    conference: [
        {
            venue: "Medical Image Computing and Computer-Assisted Intervention",
            year: "2022,2023",
            abbr: "MICCAI"
        },
        {
            venue: "IEEE International Symposium on Biomedical Imaging",
            year: "2024",
            abbr: "ISBI"
        }
    ],
    journal: [
        {
            venue: "IEEE Transactions on Neural Networks and Learning Systems (ISSN:2162-2388, IF 10.4)"
        },
        {
            venue: "Knowledge-Based Systems (ISSN:0950-7051, IF 8.8)"
        },
        {
            venue: "IEEE Transactions on Circuits and Systems for Video Technology (ISSN:1051-8215, IF 8.3)"
        },
        {
            venue: "Neural Networks (ISSN:1879-2782, IF 7.8)"
        },
        {
            venue: "Computers in Biology and Medicine (ISSN:0010-4825, IF 7.7)"
        },
        {
            venue: "Computer Methods and Programs in Biomedicine (ISSN:0169-2607, IF 6.1)"
        },
        {
            venue: "Computerized Medical Imaging and Graphics (ISSN:0895-6111, IF 5.7)"
        },
        {
            venue: "Measurement (ISSN:0263-2241, IF 5.6)"
        },
        // {
        //     venue: "Applied Sciences (ISSN:2076-3417, IF 2.7)"
        // },
        // {
        //     venue: "International Journal of Medical Imaging (ISSN:2330-8303)",
        //     abbr: "IJMI"
        // }
        
//         {
//             venue: "Applied Sciences"
//         },
//         {
//             venue: "Remote Sensing"
//         }
    ]
};

const talks = [
    {
        title: "面向稀疏标注医学影像的表征学习方法",
        materials: [
            // {
            //     tag: "slides",
            //     href: "https://docs.qq.com/pdf/DS1Bab21waEhtdXNF"
            // },
            {
                tag: "video (Bilibili)",
                href: "https://www.bilibili.com/video/BV1734y1c7dn/?spm_id_from=333.999.0.0"
            }
        ],
        turns: [
            {
                mmyyyy: "11/2023",
                where: " 第三届中国图象图形学报研究生学术论坛",
                note: "Host: <a href='http://www.cjig.cn/jig/ch/en/index.aspx' target='_blank'>Journal of image and graphics</a>"
            }
        ]
    },
//     {
//         title: "How to Develop Open Research Dataset: Examples of Medical Images",
//         materials: [
//             {
//                 tag: "slides",
//                 href: "https://docs.qq.com/pdf/DS0xDdEVwTkd2RnBW"
//             },
//             {
//                 tag: "video (in Chinese)",
//                 href: "https://www.slidestalk.com/Baiyulan/20210126OpenData163895?video=&_fuid=40979"
//             }
//         ],
//         turns: [
//             {
//                 mmyyyy: "01/2021",
//                 where: "AI Institute, SJTU, Shanghai",
//                 note: "<a href='https://mp.weixin.qq.com/s/vVzECjq3ekjh2SxKcqTa3g' target='_blank'>Flyer</a> & <a href='https://mp.weixin.qq.com/s/XmjkcJWKlelpvCu4QLI5zQ' target='_blank'>Press</a> in Chinese"
//             }
//         ]
//     },
//     {
//         title: "Towards Trustworthy Medical 3D Vision",
//         materials: [
//             {
//                 tag: "slides",
//                 href: "https://docs.qq.com/pdf/DS3FaQnRialJBWGl5"
//             }
//         ],
//         turns: [
//             {
//                 mmyyyy: "12/2020",
//                 where: "CV/CG/ML Reading Group (online)",
//                 note: "Host: <a href='http://www-personal.umich.edu/~zzhengxi/' target='_blank'>Zhengxia Zou</a>"
//             }
//         ]
//     },
//     {
//         title: "迈向可信的医学3D视觉：研究方法与感悟",
//         turns: [
//             {
//                 mmyyyy: "11/2020",
//                 where: "第四届上海交通大学&复旦大学联合电子信息技术学术论坛开幕式 (SJTU, Shanghai)"
//             }
//         ]
//     },
//     {
//         title: "Review of MICCAI 2020 RibFrac Challenge",
//         materials: [
//             {
//                 tag: "videos & slides",
//                 href: "https://ribfrac.grand-challenge.org/program/"
//             }
//         ],
//         turns: [
//             {
//                 mmyyyy: "10/2020",
//                 where: "<a href='https://ribfrac.grand-challenge.org/' target='_blank'>MICCAI 2020 Satellite Event (RibFrac Challenge)</a>"
//             }
//         ]
//     },
//     {
//         title: "Tutorial: Techniques, Tricks and Trends in Deep Learning",
//         materials: [
//             {
//                 tag: "slides",
//                 href: "https://docs.qq.com/pdf/DS09HV21tVGxXQ2NO"
//             }
//         ],
//         turns: [
//             {
//                 mmyyyy: "04/2020",
//                 where: "SJTU Course: EE228 Machine Learning for AI Class"
//             }
//         ]
//     },
//     {
//         title: "Tutorial: Design of Modern CNNs",
//         materials: [
//             {
//                 tag: "slides",
//                 href: "https://docs.qq.com/pdf/DS3ZsVUtVWW1uUGl2"
//             }
//         ],
//         turns: [
//             {
//                 mmyyyy: "10/2019",
//                 where: "SJTU Course: EE369 Machine Learning"
//             }
//         ]
//     },
//     {
//         title: "3D视觉遇上医学图像计算",
//         turns: [
//             {
//                 mmyyyy: "08/2019",
//                 where: "上海交通大学人工智能研究生学术论坛 (SJTU, Shanghai)"
//             }
//         ]
//     },
//     {
//         title: "3rd-Place Solution for Alibaba Medical AI Competition",
//         materials: [
//             {
//                 tag: "slides",
//                 href: "https://docs.qq.com/pdf/DS2xWUFdiZWdWdVlE"
//             }
//         ],
//         turns: [
//             {
//                 mmyyyy: "10/2017",
//                 where: "Alibaba Group, Hangzhou"
//             },
//             {
//                 mmyyyy: "10/2017",
//                 where: "<a href='https://zhuanlan.zhihu.com/p/30346668' target='_blank'>AI Challenger Webinar</a>"
//             }
//         ]
//     }
];

const misc = [
//     "<i>Teaching</i>: Machine Learning (EE369: Aut’18, Aut’19), Machine Learning for AI class (EE228: Spr’19, Spr’20).",
    "<i>Tools</i>: Python (7+ years), PyTorch, scikit-learn, Javascript, etc.",
    "<i>Patent</i>: 4 CN patents granted and several pending.",
    "<i>Language</i>: I use 中文, <i>English</i>.",
//     "I enjoy <a href='https://book.douban.com/people/209295222/' target='_blank'>reading</a>, traveling, tennis, swimming, Go (amateur 2 dan rank) and Nintendo games."
];
