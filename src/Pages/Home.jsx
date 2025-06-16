import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const initialState = {
    heroBanner: {
      title: 'हर्षित के कलम से में आपका स्वागत है',
      subtitle: 'बिहार और झारखंड की ताज़ा खबरें, राजनीति, अपराध और करियर समाचार',
      button1Text: 'ताज़ा खबरें पढ़ें',
      button2Text: 'वीडियो देखें',
      images: ['https://source.unsplash.com/random/800x600?patna,news'],
    },
    topBanners: [
      {
        title: 'बिहार: मुख्यमंत्री ने लॉन्च की नई योजना',
        image: 'https://source.unsplash.com/random/600x400?bihar,government',
        link: '/news/bihar-new-scheme',
        category: 'बिहार'
      },
      {
        title: 'झारखंड: खनन घोटाले में 3 अधिकारी गिरफ्तार',
        image: 'https://source.unsplash.com/random/600x400?jharkhand,mining',
        link: '/news/jharkhand-mining-scam',
        category: 'झारखंड'
      },
      {
        title: 'पटना मेट्रो में नई सुविधा',
        image: 'https://source.unsplash.com/random/600x400?patna,metro',
        link: '/news/patna-metro',
        category: 'विकास'
      }
    ],
    youtubeVideo: {
      title: 'बिहार की ताज़ा राजनीतिक खबरें | नीतीश कुमार का बड़ा बयान',
      videoId: 'dQw4w9WgXcQ',
    },
  };

  const [state] = useState(initialState);

  return (
    <div className="bg-gray-50 font-hindi w-full min-h-screen">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Welcome Banner - Centered Content */}
          <div className="w-full lg:w-1/2 h-[512px] relative group text-center">
            <div className="h-full relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 group-hover:shadow-2xl">
              <img 
                src={state.heroBanner.images[0]} 
                alt="Welcome Banner"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex flex-col justify-center items-center p-8 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {state.heroBanner.title}
                </h1>
                <p className="text-white mt-4 text-lg md:text-xl max-w-lg">
                  {state.heroBanner.subtitle}
                </p>
                <div className="flex gap-4 mt-6 justify-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-md font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    {state.heroBanner.button1Text}
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-md font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    {state.heroBanner.button2Text}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side Column */}
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-6 text-center">
            {/* News Banners - Centered Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              {state.topBanners.map((banner, index) => (
                <Link 
                  to={banner.link} 
                  key={index}
                  className="relative h-40 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <img 
                    src={banner.image} 
                    alt={banner.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-col justify-end items-center text-center">
                    <span className="text-xs font-semibold text-yellow-400 mb-2 bg-black/30 px-2 py-1 rounded-full">
                      {banner.category}
                    </span>
                    <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">
                      {banner.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* YouTube Video Box - Centered Content */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl">
                <div className="relative pt-[56.25%] overflow-hidden rounded-t-xl">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${state.youtubeVideo.videoId}?autoplay=0&rel=0`}
                    title={state.youtubeVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 bg-gradient-to-b from-gray-50 to-white text-center">
                  <h3 className="font-bold text-lg text-gray-800 line-clamp-2">
                    {state.youtubeVideo.title}
                  </h3>
                  <div className="flex items-center justify-center mt-3">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">YouTube</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Sections */}
      <div className="container px-4 md:px-6 py-12 max-w-[1400px] mx-auto">
        {/* Crime News Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-red-500 inline-block">Bihar Crime News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'बिहार में अधिवक्ता के घर डकैती, अकेली बेटी को बंधक बनाकर लूटे लाखों के गहने और नकदी...',
              'भरी पंचायत में बेटे ने पिता को उतारा मौत के घाट, छापेमारी जारी...',
              'बाढ़ में गैंगवार, 20 राउंड फायरिंग में 2 को लगी गोली...',
              'ROHTAS: जेल से छूटकर आने के बाद भाई के जख्म का लिया बदला, चलती बस में आरोपी को मारा चाकू ...'
            ].map((title, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-3">{title}</h3>
                  <Link to="#" className="text-blue-600 text-sm font-medium hover:underline">Read more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Politics News Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-500 inline-block">राजनीति</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'बिहार चुनाव 2025 से पहले NDA घटक दलों की सियासी हलचल तेज, चिराग और कुशवाहा करेंगे शक्ति प्रदर्शन...',
              'कृष्णा अल्लावारू का बड़ा बयान; सर्वे के आधार पर तय होंगे कांग्रेस के उम्मीदवार...',
              'क्या नीतीश कुमार लालू यादव की राह पर चल पड़े हैं? चुनावी रथ से बिहार भ्रमण...',
              'बिहार में विकास कार्यों की रफ्तार बढ़ाने में जुटे नीतीश कुमार, अधिकारियों को दिए सख्त निर्देश...'
            ].map((title, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-3">{title}</h3>
                  <Link to="#" className="text-blue-600 text-sm font-medium hover:underline">Read more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bihar News Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-green-500 inline-block">बिहार</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'पहली पत्नी के रहते बिहार पुलिस चालक ने की दूसरी शादी, दहेज उत्पीड़न का मामला दर्ज...',
              'बिहार में यहां खुलेगा भारत का चौथा शेर प्रजनन केंद्र, वन विभाग ने शुरू की तैयारी...',
              'मुजफ्फरपुर से नरकटियागंज जा रही डेमू ट्रेन का संचालन बाधित, तार टूटने से बीच में रुकी...',
              'मक्का लोड पिकअप दुर्घटनाग्रस्त, 5 की मौत; 20 घायल...'
            ].map((title, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-3">{title}</h3>
                  <Link to="#" className="text-blue-600 text-sm font-medium hover:underline">Read more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jharkhand News Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-yellow-500 inline-block">झारखंड</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'पब्लिक प्लेस पर सिगरेट पीने वाले हो जाए सावधान, नहीं तो देना होगा 1000 रुपये जुर्माना...',
              'रांची में इलेक्ट्रिक स्कूटी चार्ज करते वक्त लगी आग, पूरा घर जलकर राख ...',
              'झारखंड में कोरोना से पहली मौत, स्वास्थ्य विभाग अलर्ट...',
              '8 IPS अधिकारियों को मिला अतिरिक्त प्रभार, सरकार ने जारी किया आदेश...'
            ].map((title, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-3">{title}</h3>
                  <Link to="#" className="text-blue-600 text-sm font-medium hover:underline">Read more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* National News Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-purple-500 inline-block">देश</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'बाप-बेटे ने किया कमाल: एक साथ पुलिस ने हुए भर्ती, अब साथ लेंगे ट्रेनिंग ...',
              'मिसाइल हमले के बीच अमेरिकी राष्ट्रपति का बड़ा बयान, भारत-पाकिस्तान में सुलह कराई, अब ईरान-इजरायल की जंग रुकवाउंगा...',
              'पुणे के इंद्रायनी नदी पर बने लोहे का पुल ढहने से 6 की मौत, 30 से अधिक पर्यटक बहें, पुल की गुणवत्ता पर उठ रहे सवाल...',
              'कौन है 17 वर्षीय नाबालिग, जो विमान हादसे का बना गवाह? पुलिस ने की पूछताछ...'
            ].map((title, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-3">{title}</h3>
                  <Link to="#" className="text-blue-600 text-sm font-medium hover:underline">Read more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career News Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-indigo-500 inline-block">करियर</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'नीट यूजी 2025 की काउंसिलिंग शुरू, बिहार में MBBS की 1490 और BDS की 140 सीटें उपलब्ध...',
              '12वीं के बाद पायलट बनने का सपना करें पूरा, जानें... कौन सा कोर्स है जरूरी...',
              '19 जून को इस जिले में लगेगा रोजगार कैंप, 8वीं पास से लेकर ITI वालों तक के लिए नौकरी...',
              'कौन है बिहार के IPS कार्तिकेय शर्मा जिन्होंने अपराधियों की नींद उड़ा दी? जानें... सफलता की कहानी...'
            ].map((title, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-3">{title}</h3>
                  <Link to="#" className="text-blue-600 text-sm font-medium hover:underline">Read more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending News Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-pink-500 inline-block">ट्रेंडिंग न्यूज़</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'बिहार चुनाव 2025 से पहले NDA घटक दलों की सियासी हलचल तेज, चिराग और कुशवाहा करेंगे शक्ति प्रदर्शन...',
              'भरी पंचायत में बेटे ने पिता को उतारा मौत के घाट, छापेमारी जारी...',
              'बिहार में यहां खुलेगा भारत का चौथा शेर प्रजनन केंद्र, वन विभाग ने शुरू की तैयारी...',
              'बाढ़ में गैंगवार, 20 राउंड फायरिंग में 2 को लगी गोली...'
            ].map((title, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-3">{title}</h3>
                  <Link to="#" className="text-blue-600 text-sm font-medium hover:underline">Read more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;