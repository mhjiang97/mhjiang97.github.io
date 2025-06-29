// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Listed in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-vitae",
          title: "Vitae",
          description: "A short CV. You can press the button on the right to view a full one.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-repositories",
              title: "Repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repositories/";
              },
            },{id: "dropdown-teaching",
              title: "Teaching",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/teaching/";
              },
            },{id: "dropdown-people",
              title: "People",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/people/";
              },
            },{id: "post-diet",
        
          title: "Diet",
        
        description: "Eating less and feeling more energetic",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/diet/";
          
        },
      },{id: "post-about-this-webpage",
        
          title: "About this webpage",
        
        description: "Why I am here",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/first-post/";
          
        },
      },{id: "news-recently-i-purchased-a-new-mac-mini-equipped-with-the-m2-pro-chip-for-daily-work-needs-because-my-old-macbook-pro-intel-2018-is-broken-due-to-overheat",
          title: 'Recently, I purchased a new Mac mini equipped with the M2 Pro chip...',
          description: "",
          section: "News",},{id: "news-i-am-delighted-to-share-that-the-manuscript-titled-transcription-factor-12-mediated-self-feedback-regulatory-mechanism-is-required-in-dux4-fusion-leukemia-has-been-accepted-by-the-esteemed-journal-clinical-and-translational-medicine-following-an-extensive-review-and-revision-process-spanning-nearly-two-years-i-would-like-to-express-my-sincere-gratitude-to-dr-zhihui-li-one-of-the-co-authors-for-her-invaluable-assistance-without-her-contributions-i-believe-it-would-not-have-been-possible-for-us-to-have-this-entire-story-accepted-by-ctm",
          title: 'I am delighted to share that the manuscript titled Transcription factor 12 mediated...',
          description: "",
          section: "News",},{id: "news-i-forgot-to-mention-that-hongxin-has-published-a-preview-titled-finish-the-unfinished-chd1-resolving-hexasome-nucleosome-complex-with-fact-on-19-september",
          title: 'I forgot to mention that Hongxin has published a preview titled Finish the...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%69%61%6E%67%30%31@%69%63%6C%6F%75%64.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mhjiang97", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/minghao-jiang-a10b52247", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-3309-9185", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=4kcn9z0AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/minghaojiang01", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
