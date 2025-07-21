import React, { useState, useEffect } from 'react';
import { 
  Hammer, 
  Phone, 
  MessageCircle, 
  Star, 
  Award, 
  Users, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Home, 
  Wrench, 
  PaintBucket, 
  Bed, 
  ChefHat, 
  DoorOpen, 
  Lightbulb,
  Search,
  Filter,
  Calendar,
  User,
  Mail,
  MapPin,
  Shield,
  Zap,
  Target,
  TrendingUp,
  BookOpen,
  Eye,
  ThumbsUp,
  Share2,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Quote,
  Camera,
  Grid,
  List
} from 'lucide-react';
import { ContactForm } from './components/ContactForm';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [galleryView, setGalleryView] = useState<'grid' | 'list'>('grid');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Floating action buttons
  const FloatingButtons = () => (
    <div className="fixed bottom-6 left-6 flex flex-col gap-3 z-40">
      <a
        href="https://wa.me/966549716136"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="تواصل عبر الواتساب"
      >
        <MessageCircle size={24} />
      </a>
      <a
        href="tel:+966549716136"
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="اتصل بنا الآن"
      >
        <Phone size={24} />
      </a>
    </div>
  );

  // Navigation component
  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Hammer className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">نجار شمال الرياض</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'home' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              الرئيسية
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'about' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              من نحن
            </button>
            <button
              onClick={() => setCurrentPage('services')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'services' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              خدماتنا
            </button>
            <button
              onClick={() => setCurrentPage('gallery')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'gallery' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              معرض الأعمال
            </button>
            <button
              onClick={() => setCurrentPage('blog')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'blog' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              المدونة
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'contact' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              تواصل معنا
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { key: 'home', label: 'الرئيسية' },
                { key: 'about', label: 'من نحن' },
                { key: 'services', label: 'خدماتنا' },
                { key: 'gallery', label: 'معرض الأعمال' },
                { key: 'blog', label: 'المدونة' },
                { key: 'contact', label: 'تواصل معنا' }
              ].map(item => (
                <button
                  key={item.key}
                  onClick={() => {
                    setCurrentPage(item.key);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-right px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentPage === item.key ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  // Homepage component
  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  نجار شمال الرياض المحترف
                  <span className="text-blue-600 block">مؤسسة رامي المصري</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  خبرة تزيد عن 15 عاماً في تصميم وتنفيذ أجود أنواع الأثاث الخشبي المخصص. 
                  نحول أحلامك إلى واقع بأيدي حرفيين مهرة وتقنيات حديثة.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  احصل على عرض سعر مجاني
                  <ArrowRight size={20} />
                </button>
                <a
                  href="tel:+966549716136"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  <Phone size={20} />
                  اتصل الآن
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">مشروع منجز</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">15+</div>
                  <div className="text-gray-600">سنة خبرة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">100%</div>
                  <div className="text-gray-600">رضا العملاء</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="نجار محترف في الرياض يعمل على تصميم أثاث خشبي مخصص"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <div>
                    <div className="font-bold text-gray-900">ضمان شامل</div>
                    <div className="text-gray-600">على جميع أعمالنا</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              خدماتنا المتخصصة في النجارة والديكور الخشبي
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من خدمات النجارة والديكور الخشبي المخصص لتلبية جميع احتياجاتك
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: 'تفصيل خزائن ملابس مخصصة',
                description: 'خزائن ملابس مصممة خصيصاً لمساحتك مع تقسيمات ذكية وتشطيبات فاخرة',
                image: 'https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                icon: ChefHat,
                title: 'مطابخ خشبية فاخرة',
                description: 'تصميم وتنفيذ مطابخ خشبية عصرية مع خشب مقاوم للرطوبة والحرارة',
                image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                icon: Bed,
                title: 'أثاث غرف النوم الكامل',
                description: 'تصميم وتنفيذ أثاث غرف النوم من أسرة وكوميدينات وتسريحات بتصاميم عصرية',
                image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                icon: DoorOpen,
                title: 'أبواب خشبية مخصصة',
                description: 'أبواب خشبية داخلية وخارجية بتصاميم متنوعة وعزل صوتي ممتاز',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                icon: PaintBucket,
                title: 'ديكورات خشبية عصرية',
                description: 'جدران خشبية وديكورات داخلية تضفي لمسة دافئة وأنيقة على منزلك',
                image: 'https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                icon: Wrench,
                title: 'نجارة عامة وترميم',
                description: 'خدمات نجارة شاملة تشمل الترميم والصيانة وتصنيع قطع الأثاث المختلفة',
                image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button
                    onClick={() => setCurrentPage('services')}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                  >
                    اعرف المزيد
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('services')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              استكشف جميع خدماتنا
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              لماذا تختار نجار شمال الرياض؟
            </h2>
            <p className="text-xl text-gray-600">
              نتميز بالجودة والاحترافية والالتزام بالمواعيد
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'خبرة 15+ سنة',
                description: 'خبرة طويلة في مجال النجارة والديكور الخشبي'
              },
              {
                icon: Shield,
                title: 'ضمان شامل',
                description: 'ضمان على جميع أعمالنا وقطع الغيار'
              },
              {
                icon: Users,
                title: 'فريق محترف',
                description: 'نجارون مهرة ومدربون على أحدث التقنيات'
              },
              {
                icon: Clock,
                title: 'التزام بالمواعيد',
                description: 'نلتزم بتسليم المشاريع في الوقت المحدد'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            جاهز لتحويل منزلك بأثاث خشبي مخصص؟
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            احصل على استشارة مجانية وعرض سعر مفصل لمشروعك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              احصل على عرض سعر مجاني
            </button>
            <a
              href="https://wa.me/966549716136"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              تواصل عبر الواتساب
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  // About page component
  const AboutPage = () => (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            من نحن - مؤسسة رامي المصري للنجارة
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            رحلة من الشغف والإبداع في عالم النجارة والديكور الخشبي منذ أكثر من 15 عاماً
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">قصتنا مع النجارة والإبداع</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              بدأت مؤسسة رامي المصري كحلم صغير في ورشة متواضعة بشمال الرياض، حيث كان الشغف بالخشب 
              والرغبة في إبداع قطع أثاث فريدة هما المحرك الأساسي. اليوم، نفخر بأننا أصبحنا من أبرز 
              المتخصصين في النجارة والديكور الخشبي المخصص في المملكة.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              نؤمن بأن كل قطعة خشب لها روح وحكاية، ومهمتنا هي إحياء هذه الروح وتحويلها إلى تحفة 
              فنية تضفي الدفء والجمال على منزلك. خبرتنا الطويلة ومعرفتنا العميقة بأنواع الأخشاب 
              وتقنيات التصنيع تضمن لك الحصول على أفضل النتائج.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="ورشة نجارة مؤسسة رامي المصري بأدوات حديثة ومتطورة"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">رؤيتنا</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              أن نكون الخيار الأول لكل من يبحث عن الجودة والإبداع في عالم النجارة والديكور الخشبي، 
              وأن نساهم في تحويل كل منزل إلى مساحة تعكس شخصية أصحابها وتوفر لهم الراحة والجمال.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">مهمتنا</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              تقديم خدمات نجارة وديكور خشبي عالية الجودة تتميز بالإبداع والدقة والالتزام، مع استخدام 
              أجود أنواع الأخشاب وأحدث التقنيات لضمان رضا عملائنا وتحقيق توقعاتهم.
            </p>
          </div>
        </div>

        {/* AI Integration Section */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl mb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  رؤيتنا في استخدام الذكاء الاصطناعي لتحسين خدمات النجارة
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                نؤمن بأن المستقبل يكمن في دمج التقنيات الحديثة مع الحرفية التقليدية. لذلك نستثمر في 
                تقنيات الذكاء الاصطناعي لتحسين عملية التصميم والتخطيط، مما يتيح لنا:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  تصميم ثلاثي الأبعاد دقيق ومفصل
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  محاكاة واقعية للنتيجة النهائية
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  تحسين استخدام المواد وتقليل الهدر
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  تسريع عملية التصميم والتنفيذ
                </li>
              </ul>
            </div>
            <div className="text-center">
              <Zap className="w-32 h-32 text-purple-600 mx-auto mb-4" />
              <p className="text-sm text-gray-600">
                رمز الاحترافية والدقة في النجارة والديكور الخشبي
              </p>
            </div>
          </div>
        </div>

        {/* Team Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">قيمنا ومبادئنا</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'الجودة أولاً',
                description: 'نستخدم أجود أنواع الأخشاب ونطبق أعلى معايير الجودة في كل مشروع'
              },
              {
                icon: Users,
                title: 'رضا العملاء',
                description: 'نضع رضا عملائنا في المقدمة ونسعى لتحقيق توقعاتهم وتجاوزها'
              },
              {
                icon: Clock,
                title: 'الالتزام بالمواعيد',
                description: 'نحترم وقت عملائنا ونلتزم بتسليم المشاريع في المواعيد المحددة'
              },
              {
                icon: Shield,
                title: 'الشفافية والأمانة',
                description: 'نتعامل بشفافية كاملة في الأسعار والمواصفات والمواعيد'
              },
              {
                icon: TrendingUp,
                title: 'التطوير المستمر',
                description: 'نواكب أحدث التقنيات والتصاميم لنقدم أفضل الحلول'
              },
              {
                icon: Lightbulb,
                title: 'الإبداع والابتكار',
                description: 'نبحث دائماً عن حلول إبداعية ومبتكرة لتلبية احتياجات عملائنا'
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-blue-600 text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">اكتشف الفرق معنا</h2>
          <p className="text-xl mb-8">دعنا نحول أفكارك إلى واقع بأيدي خبراء النجارة</p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            تواصل معنا الآن
          </button>
        </div>
      </div>
    </div>
  );

  // Services page component
  const ServicesPage = () => (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            خدماتنا المتخصصة في النجارة والديكور الخشبي
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من خدمات النجارة والديكور الخشبي المخصص بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        {/* Main Services */}
        <div className="space-y-20">
          {/* Custom Closets */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Home className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">تفصيل خزائن ملابس مخصصة</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                نصمم وننفذ خزائن ملابس مخصصة تناسب مساحتك واحتياجاتك بدقة. خزائننا تتميز بالتقسيمات 
                الذكية والتشطيبات الفاخرة مع استغلال أمثل للمساحة المتاحة.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">مميزات خزائن الملابس لدينا:</h3>
                <ul className="space-y-2">
                  {[
                    'تصميم ثلاثي الأبعاد قبل التنفيذ',
                    'تقسيمات داخلية ذكية ومرنة',
                    'أدراج بسكك معدنية عالية الجودة',
                    'إضاءة LED داخلية (اختيارية)',
                    'مرايا مدمجة بتصاميم عصرية',
                    'خشب مقاوم للرطوبة والتشقق'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                احصل على تصميم مجاني
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="خزانة ملابس مخصصة بتصميم عصري وتقسيمات ذكية"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Kitchen Cabinets */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="مطبخ خشبي فاخر بتصميم عصري ووحدات تخزين متطورة"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <ChefHat className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">مطابخ خشبية فاخرة</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                نصمم مطابخ خشبية عصرية تجمع بين الجمال والوظيفية. مطابخنا مصنوعة من أجود أنواع 
                الخشب المقاوم للرطوبة والحرارة مع تصاميم تناسب جميع الأذواق والمساحات.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">خصائص مطابخنا الخشبية:</h3>
                <ul className="space-y-2">
                  {[
                    'خشب مقاوم للرطوبة والحرارة',
                    'تصميم وظيفي يحقق أقصى استفادة',
                    'وحدات تخزين ذكية ومتنوعة',
                    'كاونترات من أجود المواد',
                    'إكسسوارات ألمانية عالية الجودة',
                    'تشطيبات متنوعة (مات، لامع، خشبي)'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                استشارة مطبخ مجانية
              </button>
            </div>
          </div>

          {/* Bedroom Furniture */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Bed className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-900">أثاث غرف النوم الكامل</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                نصمم وننفذ أثاث غرف النوم الكامل من أسرة وكوميدينات وتسريحات بتصاميم عصرية تضفي 
                الراحة والأناقة على غرفتك. جميع قطعنا مصنوعة من أجود أنواع الخشب.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">مجموعة أثاث غرف النوم:</h3>
                <ul className="space-y-2">
                  {[
                    'أسرة بتصاميم عصرية ومريحة',
                    'كوميدينات بأدراج وتخزين إضافي',
                    'تسريحات مع مرايا مضيئة',
                    'خزائن ملابس مدمجة',
                    'طاولات دراسة وعمل',
                    'وحدات تلفزيون مخصصة'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                صمم غرفة نومك
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="أثاث غرفة نوم كامل بتصميم عصري وخشب فاخر"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Wooden Doors */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="باب خشبي مخصص بتصميم عصري وتشطيب فاخر"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <DoorOpen className="w-8 h-8 text-orange-600" />
                <h2 className="text-3xl font-bold text-gray-900">أبواب خشبية مخصصة</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                نصنع أبواب خشبية داخلية وخارجية بتصاميم متنوعة تناسب جميع الأذواق. أبوابنا تتميز 
                بالمتانة والعزل الصوتي الممتاز مع تشطيبات فاخرة تدوم طويلاً.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">أنواع الأبواب المتوفرة:</h3>
                <ul className="space-y-2">
                  {[
                    'أبواب داخلية بتصاميم عصرية',
                    'أبواب خارجية مقاومة للعوامل الجوية',
                    'أبواب منزلقة لتوفير المساحة',
                    'أبواب مزدوجة للمداخل الرئيسية',
                    'عزل صوتي وحراري ممتاز',
                    'إكسسوارات وأقفال عالية الجودة'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                اطلب بابك المخصص
              </button>
            </div>
          </div>
        </div>

        {/* AI Services Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                كيف يمكن للذكاء الاصطناعي تحسين تصميم الديكور الخشبي
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              نستخدم أحدث تقنيات الذكاء الاصطناعي لتقديم تجربة تصميم متطورة ودقيقة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'تصميم دقيق',
                description: 'تصميم ثلاثي الأبعاد بدقة عالية يظهر النتيجة النهائية'
              },
              {
                icon: TrendingUp,
                title: 'تحسين المساحة',
                description: 'استغلال أمثل للمساحات مع حلول ذكية ومبتكرة'
              },
              {
                icon: Shield,
                title: 'تقليل الأخطاء',
                description: 'تجنب الأخطاء في القياسات والتصميم قبل التنفيذ'
              },
              {
                icon: Clock,
                title: 'توفير الوقت',
                description: 'تسريع عملية التصميم والموافقة من العميل'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">خدمات إضافية</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: PaintBucket,
                title: 'ديكورات خشبية عصرية',
                description: 'جدران خشبية وديكورات داخلية تضفي لمسة دافئة وأنيقة',
                link: 'تعرف على المزيد'
              },
              {
                icon: Wrench,
                title: 'نجارة عامة وترميم',
                description: 'خدمات نجارة شاملة تشمل الترميم والصيانة وقطع الأثاث',
                link: 'خدمات الترميم'
              },
              {
                icon: Lightbulb,
                title: 'استشارات تصميم',
                description: 'استشارات متخصصة في التصميم الداخلي والديكور الخشبي',
                link: 'احجز استشارة'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                >
                  {service.link}
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-blue-600 text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">جاهز لبدء مشروعك؟</h2>
          <p className="text-xl mb-8">احصل على استشارة مجانية وعرض سعر مفصل</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              احصل على عرض سعر مجاني
            </button>
            <a
              href="https://wa.me/966549716136"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              تواصل عبر الواتساب
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  // Gallery page component
  const GalleryPage = () => {
    const galleryItems = [
      {
        id: 1,
        title: 'خزانة ملابس مخصصة بتصميم عصري',
        category: 'closets',
        image: 'https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'خزانة ملابس مصممة خصيصاً مع تقسيمات ذكية وإضاءة LED'
      },
      {
        id: 2,
        title: 'مطبخ خشبي فاخر بوحدات تخزين متطورة',
        category: 'kitchens',
        image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'مطبخ خشبي عصري مع كاونتر رخامي ووحدات تخزين ذكية'
      },
      {
        id: 3,
        title: 'أثاث غرفة نوم كامل بتشطيب أبيض أنيق',
        category: 'bedrooms',
        image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'مجموعة أثاث غرفة نوم كاملة مع خزانة مدمجة وتسريحة'
      },
      {
        id: 4,
        title: 'باب خشبي داخلي بتصميم عصري',
        category: 'doors',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'باب خشبي بتصميم عصري مع عزل صوتي ممتاز'
      },
      {
        id: 5,
        title: 'جدار خشبي بشرائح عمودية للمكاتب',
        category: 'decor',
        image: 'https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'ديكور جداري خشبي بشرائح عمودية يضفي لمسة عصرية'
      },
      {
        id: 6,
        title: 'وحدة تلفزيون خشبية مع تخزين إضافي',
        category: 'furniture',
        image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'وحدة تلفزيون عصرية مع أدراج وأرفف للتخزين'
      }
    ];

    const categories = [
      { key: 'all', label: 'جميع الأعمال', count: galleryItems.length },
      { key: 'closets', label: 'خزائن الملابس', count: galleryItems.filter(item => item.category === 'closets').length },
      { key: 'kitchens', label: 'المطابخ', count: galleryItems.filter(item => item.category === 'kitchens').length },
      { key: 'bedrooms', label: 'غرف النوم', count: galleryItems.filter(item => item.category === 'bedrooms').length },
      { key: 'doors', label: 'الأبواب', count: galleryItems.filter(item => item.category === 'doors').length },
      { key: 'decor', label: 'الديكورات', count: galleryItems.filter(item => item.category === 'decor').length },
      { key: 'furniture', label: 'الأثاث', count: galleryItems.filter(item => item.category === 'furniture').length }
    ];

    const filteredItems = selectedCategory === 'all' 
      ? galleryItems 
      : galleryItems.filter(item => item.category === selectedCategory);

    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              معرض أعمالنا في النجارة والديكور الخشبي
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              استكشف مجموعة من أفضل أعمالنا في تصميم وتنفيذ الأثاث الخشبي المخصص
            </p>
          </div>

          {/* Filters and View Toggle */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-gray-600">عرض:</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setGalleryView('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    galleryView === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setGalleryView('list')}
                  className={`p-2 rounded-md transition-colors ${
                    galleryView === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          {galleryView === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map(item => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover cursor-pointer"
                      loading="lazy"
                      onClick={() => setSelectedImage(item.image)}
                    />
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                      <Camera className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <button
                      onClick={() => setCurrentPage('contact')}
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                    >
                      اطلب مشروع مماثل
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Gallery List */
            <div className="space-y-8">
              {filteredItems.map(item => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 md:h-full object-cover cursor-pointer"
                        loading="lazy"
                        onClick={() => setSelectedImage(item.image)}
                      />
                    </div>
                    <div className="md:col-span-2 p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4 text-lg">{item.description}</p>
                      <div className="flex gap-4">
                        <button
                          onClick={() => setCurrentPage('contact')}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                          اطلب مشروع مماثل
                        </button>
                        <button
                          onClick={() => setSelectedImage(item.image)}
                          className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
                        >
                          <Eye size={20} />
                          عرض بالحجم الكامل
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Image Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
              <div className="relative max-w-4xl max-h-full">
                <img
                  src={selectedImage}
                  alt="عرض بالحجم الكامل"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-800" />
                </button>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-20 text-center bg-blue-600 text-white p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">أعجبك أحد التصاميم؟</h2>
            <p className="text-xl mb-8">تواصل معنا لتنفيذ تصميم مماثل أو مخصص حسب احتياجاتك</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                احصل على عرض سعر
              </button>
              <a
                href="https://wa.me/966549716136"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                تواصل عبر الواتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Blog page component
  const BlogPage = () => {
    const blogPosts = [
      {
        id: 1,
        title: 'نصائل لاختيار أفضل أنواع الخشب للمطابخ',
        excerpt: 'دليل شامل لاختيار نوع الخشب المناسب لمطبخك مع مراعاة الرطوبة والحرارة والمتانة',
        content: `
          <h2>مقدمة عن أهمية اختيار الخشب المناسب للمطابخ</h2>
          <p>يعتبر اختيار نوع الخشب المناسب للمطبخ من أهم القرارات التي يجب اتخاذها عند تصميم مطبخ جديد. المطبخ بيئة معرضة للرطوبة والحرارة والبخار، مما يتطلب اختيار أنواع خشب تتحمل هذه الظروف وتحافظ على جمالها ومتانتها لسنوات طويلة.</p>
          
          <h2>أفضل أنواع الخشب للمطابخ</h2>
          
          <h3>1. خشب البلوط (Oak)</h3>
          <p>يعتبر خشب البلوط من أقوى وأمتن أنواع الأخشاب المستخدمة في المطابخ. يتميز بمقاومته العالية للرطوبة والخدوش، كما أن ألوانه الطبيعية الجميلة تضفي دفئاً وأناقة على المطبخ.</p>
          
          <h3>2. خشب الماهوجني (Mahogany)</h3>
          <p>خشب فاخر يتميز بلونه الأحمر الداكن الجميل ومقاومته الممتازة للرطوبة. يعتبر خياراً مثالياً للمطابخ الكلاسيكية والفاخرة.</p>
          
          <h3>3. خشب الزان (Beech)</h3>
          <p>خشب صلب ومتين، يتميز بلونه الفاتح وملمسه الناعم. مقاوم جيد للرطوبة ومناسب للتصاميم العصرية.</p>
          
          <h2>عوامل يجب مراعاتها عند الاختيار</h2>
          
          <h3>مقاومة الرطوبة</h3>
          <p>المطبخ بيئة رطبة بطبيعتها، لذا يجب اختيار أنواع خشب تتحمل الرطوبة دون تشقق أو تشويه.</p>
          
          <h3>سهولة التنظيف والصيانة</h3>
          <p>اختر أنواع خشب سهلة التنظيف ولا تتطلب صيانة معقدة أو مكلفة.</p>
          
          <h3>التكلفة والميزانية</h3>
          <p>حدد ميزانيتك واختر النوع الذي يوفر أفضل قيمة مقابل المال.</p>
          
          <h2>نصائح للعناية بالمطابخ الخشبية</h2>
          <ul>
            <li>نظف الأسطح فوراً بعد انسكاب السوائل</li>
            <li>استخدم منتجات تنظيف مخصصة للخشب</li>
            <li>تجنب استخدام المواد الكيميائية القاسية</li>
            <li>احرص على التهوية الجيدة للمطبخ</li>
            <li>قم بصيانة دورية للطلاء والورنيش</li>
          </ul>
          
          <h2>خلاصة</h2>
          <p>اختيار نوع الخشب المناسب للمطبخ استثمار طويل الأمد. استشر خبراء النجارة للحصول على أفضل النصائح المناسبة لاحتياجاتك وميزانيتك.</p>
        `,
        image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'مطابخ',
        date: '2024-01-15',
        readTime: '5 دقائق',
        views: 1250,
        likes: 89
      },
      {
        id: 2,
        title: 'أفكار ديكورات خشبية لغرف النوم الصغيرة',
        excerpt: 'حلول إبداعية لاستغلال المساحات الصغيرة في غرف النوم باستخدام الأثاث الخشبي الذكي',
        content: `
          <h2>تحديات غرف النوم الصغيرة</h2>
          <p>تواجه غرف النوم الصغيرة تحديات خاصة في التصميم والتأثيث. الهدف هو تحقيق أقصى استفادة من المساحة المتاحة مع الحفاظ على الراحة والجمال.</p>
          
          <h2>حلول التخزين الذكية</h2>
          
          <h3>الأسرة مع التخزين المدمج</h3>
          <p>استخدم أسرة بأدراج مدمجة أسفلها لتخزين الملابس والبياضات. هذا الحل يوفر مساحة كبيرة ويقلل الحاجة لخزائن إضافية.</p>
          
          <h3>الخزائن المعلقة</h3>
          <p>استغل المساحة العمودية بتركيب خزائن معلقة على الجدران. يمكن تصميمها بأشكال وأحجام مختلفة لتناسب ديكور الغرفة.</p>
          
          <h3>الأثاث متعدد الاستخدامات</h3>
          <p>اختر قطع أثاث تؤدي أكثر من وظيفة، مثل كرسي بتخزين داخلي أو طاولة جانبية بأدراج.</p>
          
          <h2>استخدام الألوان الفاتحة</h2>
          <p>الألوان الفاتحة تعكس الضوء وتجعل المساحة تبدو أكبر. اختر أخشاب بألوان فاتحة أو استخدم دهانات فاتحة على الأثاث الخشبي.</p>
          
          <h2>المرايا والإضاءة</h2>
          <p>دمج المرايا في تصميم الخزائن يضاعف الإحساس بالمساحة. الإضاءة الجيدة أيضاً تلعب دوراً مهماً في جعل الغرفة تبدو أوسع.</p>
          
          <h2>أفكار إبداعية للتصميم</h2>
          <ul>
            <li>استخدام الزوايا بذكاء لوضع خزائن مثلثة</li>
            <li>تصميم رفوف عائمة بدلاً من الطاولات الجانبية</li>
            <li>استخدام الأبواب المنزلقة بدلاً من المفصلية</li>
            <li>تصميم مكتب قابل للطي مدمج في الجدار</li>
          </ul>
          
          <h2>خلاصة</h2>
          <p>بالتخطيط الذكي والتصميم الإبداعي، يمكن تحويل غرفة النوم الصغيرة إلى مساحة مريحة وعملية وجميلة.</p>
        `,
        image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'غرف نوم',
        date: '2024-01-10',
        readTime: '4 دقائق',
        views: 980,
        likes: 67
      },
      {
        id: 3,
        title: 'كيفية صيانة الأبواب الخشبية للحفاظ على جمالها',
        excerpt: 'دليل شامل للعناية بالأبواب الخشبية وحمايتها من التلف والحفاظ على مظهرها الجميل',
        content: `
          <h2>أهمية صيانة الأبواب الخشبية</h2>
          <p>الأبواب الخشبية استثمار طويل الأمد يتطلب عناية منتظمة للحفاظ على جماله ووظيفته. الصيانة الدورية تطيل عمر الباب وتحافظ على قيمته.</p>
          
          <h2>التنظيف اليومي</h2>
          
          <h3>الأدوات المطلوبة</h3>
          <ul>
            <li>قطعة قماش ناعمة وجافة</li>
            <li>منظف خشب متخصص</li>
            <li>قطعة قماش مبللة قليلاً</li>
            <li>قطعة قماش جافة للتلميع</li>
          </ul>
          
          <h3>خطوات التنظيف</h3>
          <ol>
            <li>امسح الغبار بقطعة قماش جافة</li>
            <li>استخدم منظف الخشب حسب التعليمات</li>
            <li>امسح بقطعة قماش مبللة قليلاً</li>
            <li>جفف الباب تماماً بقطعة قماش جافة</li>
          </ol>
          
          <h2>الصيانة الدورية</h2>
          
          <h3>فحص الطلاء والورنيش</h3>
          <p>افحص حالة الطلاء والورنيش كل 6 أشهر. ابحث عن علامات التقشر أو البهتان أو التشقق.</p>
          
          <h3>إعادة الطلاء</h3>
          <p>عند الحاجة، قم بصنفرة المناطق المتضررة برفق وأعد طلاءها بنفس نوع الطلاء الأصلي.</p>
          
          <h2>حماية من العوامل الجوية</h2>
          
          <h3>الرطوبة</h3>
          <p>تجنب تعرض الباب للرطوبة المفرطة. استخدم مزيل الرطوبة في المناطق الرطبة.</p>
          
          <h3>أشعة الشمس</h3>
          <p>الأبواب المعرضة لأشعة الشمس المباشرة تحتاج حماية إضافية بطلاء مقاوم للأشعة فوق البنفسجية.</p>
          
          <h2>إصلاح المشاكل الشائعة</h2>
          
          <h3>الخدوش الصغيرة</h3>
          <p>استخدم قلم إصلاح الخشب أو شمع الخشب لملء الخدوش الصغيرة.</p>
          
          <h3>التشققات</h3>
          <p>املأ التشققات بمعجون الخشب واتركه يجف ثم اصنفره وأعد طلاءه.</p>
          
          <h2>نصائح للحفاظ على الأبواب</h2>
          <ul>
            <li>تجنب استخدام المواد الكيميائية القاسية</li>
            <li>لا تستخدم الماء بكثرة في التنظيف</li>
            <li>احرص على التهوية الجيدة</li>
            <li>افحص المفصلات والأقفال دورياً</li>
            <li>استخدم واقيات للحماية من الصدمات</li>
          </ul>
          
          <h2>متى تحتاج لمساعدة محترف؟</h2>
          <p>اتصل بخبير النجارة عند وجود تلف كبير، مشاكل في الهيكل، أو عندما تحتاج لإعادة تشطيب كامل للباب.</p>
        `,
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'أبواب',
        date: '2024-01-05',
        readTime: '6 دقائق',
        views: 1100,
        likes: 78
      },
      {
        id: 4,
        title: 'دليل اختيار الأبواب الخشبية المناسبة لمنزلك',
        excerpt: 'كل ما تحتاج معرفته لاختيار الباب الخشبي المثالي من حيث النوع والتصميم والوظيفة',
        content: `
          <h2>أنواع الأبواب الخشبية</h2>
          
          <h3>الأبواب الصلبة (Solid Wood)</h3>
          <p>مصنوعة من قطعة خشب واحدة أو عدة قطع ملصقة. تتميز بالمتانة والعزل الصوتي الممتاز لكنها أغلى ثمناً.</p>
          
          <h3>الأبواب المجوفة (Hollow Core)</h3>
          <p>تحتوي على إطار خشبي مع حشو خفيف. أقل تكلفة لكن أقل متانة وعزل صوتي.</p>
          
          <h3>الأبواب المركبة (Engineered Wood)</h3>
          <p>تجمع بين مميزات النوعين السابقين. توفر متانة جيدة بتكلفة معقولة.</p>
          
          <h2>اختيار التصميم المناسب</h2>
          
          <h3>التصميم الكلاسيكي</h3>
          <p>يناسب المنازل التقليدية والكلاسيكية. يتميز بالنقوش والتفاصيل الزخرفية.</p>
          
          <h3>التصميم العصري</h3>
          <p>خطوط بسيطة ونظيفة تناسب المنازل الحديثة. قد يتضمن زجاج أو معدن.</p>
          
          <h3>التصميم الريفي</h3>
          <p>يعطي إحساساً بالدفء والطبيعة. مناسب للمنازل ذات الطابع الريفي.</p>
          
          <h2>عوامل الاختيار المهمة</h2>
          
          <h3>الموقع والاستخدام</h3>
          <ul>
            <li>أبواب خارجية: تحتاج مقاومة أكبر للعوامل الجوية</li>
            <li>أبواب داخلية: التركيز على الجمال والعزل الصوتي</li>
            <li>أبواب الحمامات: مقاومة الرطوبة أولوية</li>
          </ul>
          
          <h3>الأمان والحماية</h3>
          <p>للأبواب الخارجية، اختر أنواع خشب صلبة مع أقفال متطورة وتعزيزات أمنية.</p>
          
          <h3>العزل الحراري والصوتي</h3>
          <p>مهم خاصة للأبواب الخارجية وأبواب غرف النوم والمكاتب.</p>
          
          <h2>أنواع الخشب المناسبة</h2>
          
          <h3>خشب البلوط</h3>
          <p>قوي ومتين، مقاوم للخدوش، مناسب للاستخدام الكثيف.</p>
          
          <h3>خشب الماهوجني</h3>
          <p>فاخر وجميل، مقاوم للحشرات، مناسب للأبواب الخارجية.</p>
          
          <h3>خشب الصنوبر</h3>
          <p>اقتصادي وخفيف، مناسب للأبواب الداخلية.</p>
          
          <h2>التشطيبات والألوان</h2>
          
          <h3>الطلاء</h3>
          <p>يوفر حماية ممتازة ومجموعة واسعة من الألوان.</p>
          
          <h3>الورنيش</h3>
          <p>يحافظ على المظهر الطبيعي للخشب مع توفير الحماية.</p>
          
          <h3>التشطيب الطبيعي</h3>
          <p>يبرز جمال الخشب الطبيعي لكن يحتاج صيانة أكثر.</p>
          
          <h2>نصائح للشراء</h2>
          <ul>
            <li>قس المساحة بدقة قبل الطلب</li>
            <li>اطلب عينات من الخشب والتشطيبات</li>
            <li>تأكد من جودة المفصلات والأقفال</li>
            <li>اسأل عن الضمان وخدمات ما بعد البيع</li>
            <li>احرص على التركيب المحترف</li>
          </ul>
        `,
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'أبواب',
        date: '2023-12-20',
        readTime: '7 دقائق',
        views: 850,
        likes: 56
      },
      {
        id: 5,
        title: 'أفكار إبداعية لحلول التخزين في المساحات الصغيرة',
        excerpt: 'حلول ذكية ومبتكرة لاستغلال كل سنتيمتر في منزلك باستخدام الأثاث الخشبي المخصص',
        content: `
          <h2>تحديات المساحات الصغيرة</h2>
          <p>المساحات الصغيرة تتطلب تفكيراً إبداعياً لتحقيق أقصى استفادة من كل متر مربع. الهدف هو إيجاد حلول تخزين ذكية دون التضحية بالجمال أو الراحة.</p>
          
          <h2>استغلال المساحات العمودية</h2>
          
          <h3>الرفوف العالية</h3>
          <p>استخدم الجدران من الأرض حتى السقف لتركيب رفوف للكتب والديكورات والأغراض الموسمية.</p>
          
          <h3>الخزائن المعلقة</h3>
          <p>خزائن معلقة في المطبخ والحمام وغرف النوم توفر تخزين إضافي دون شغل مساحة أرضية.</p>
          
          <h2>الأثاث متعدد الوظائف</h2>
          
          <h3>طاولة القهوة بالتخزين</h3>
          <p>طاولة قهوة بأدراج أو مساحة تخزين مخفية لحفظ المجلات والألعاب والأغراض الصغيرة.</p>
          
          <h3>الكراسي بالتخزين</h3>
          <p>كراسي بمقاعد قابلة للفتح لتخزين البطانيات والوسائد والأغراض الموسمية.</p>
          
          <h3>السرير بالأدراج</h3>
          <p>أسرة بأدراج مدمجة أسفلها لتخزين الملابس والبياضات.</p>
          
          <h2>حلول الزوايا الذكية</h2>
          
          <h3>خزائن الزاوية</h3>
          <p>استغل الزوايا المهملة بخزائن مثلثة أو دائرية مصممة خصيصاً.</p>
          
          <h3>رفوف الزاوية العائمة</h3>
          <p>رفوف عائمة في الزوايا لعرض الديكورات أو تخزين الكتب.</p>
          
          <h2>التخزين المخفي</h2>
          
          <h3>الدرج بالأدراج</h3>
          <p>استغل المساحة تحت الدرج بتصميم أدراج أو خزائن مخصصة.</p>
          
          <h3>التخزين خلف المرايا</h3>
          <p>خزائن صغيرة مخفية خلف المرايا في الحمام أو غرفة النوم.</p>
          
          <h2>حلول المطبخ الصغير</h2>
          
          <h3>الرفوف المغناطيسية</h3>
          <p>رفوف مغناطيسية على جانب الثلاجة لحفظ التوابل والأدوات الصغيرة.</p>
          
          <h3>خزائن السقف</h3>
          <p>خزائن إضافية حتى السقف لتخزين الأطباق والأواني نادرة الاستخدام.</p>
          
          <h3>الأدراج العميقة</h3>
          <p>أدراج عميقة بدلاً من الخزائن التقليدية لسهولة الوصول للأغراض.</p>
          
          <h2>تنظيم الخزائن</h2>
          
          <h3>الفواصل والمنظمات</h3>
          <p>استخدم فواصل خشبية ومنظمات لتقسيم الأدراج والخزائن بكفاءة.</p>
          
          <h3>الصناديق المتدرجة</h3>
          <p>صناديق بأحجام مختلفة تتداخل لاستغلال أمثل للمساحة.</p>
          
          <h2>نصائح للتنفيذ</h2>
          <ul>
            <li>قس المساحات بدقة قبل التصميم</li>
            <li>فكر في احتياجاتك المستقبلية</li>
            <li>اختر ألوان فاتحة لتوسيع المساحة بصرياً</li>
            <li>استخدم الإضاءة لإبراز حلول التخزين</li>
            <li>اجعل الحلول قابلة للتعديل والتطوير</li>
          </ul>
          
          <h2>خلاصة</h2>
          <p>بالإبداع والتخطيط الذكي، يمكن تحويل أي مساحة صغيرة إلى مكان منظم وعملي وجميل. المفتاح هو التفكير خارج الصندوق واستغلال كل فرصة للتخزين.</p>
        `,
        image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'تخزين',
        date: '2023-12-15',
        readTime: '5 دقائق',
        views: 720,
        likes: 45
      },
      {
        id: 6,
        title: 'ألوان المطابخ العصرية: كيف تختار اللون المناسب؟',
        excerpt: 'دليل شامل لاختيار ألوان المطبخ التي تناسب ذوقك وتواكب أحدث صيحات التصميم',
        content: `
          <h2>أهمية اللون في تصميم المطبخ</h2>
          <p>اللون يلعب دوراً محورياً في تحديد شخصية المطبخ ومزاجه العام. الاختيار الصحيح للألوان يمكن أن يجعل المطبخ يبدو أكبر وأكثر إشراقاً وترحيباً.</p>
          
          <h2>الألوان الرائجة في 2024</h2>
          
          <h3>الأبيض الكلاسيكي</h3>
          <p>يبقى الأبيض الخيار الأول لكثير من المصممين. يعطي إحساساً بالنظافة والاتساع ويتماشى مع جميع الأنماط.</p>
          
          <h3>الرمادي الدافئ</h3>
          <p>بديل عصري للأبيض، يضفي أناقة وعمق على المطبخ دون أن يكون قاتماً.</p>
          
          <h3>الأزرق البحري</h3>
          <p>لون جريء يضفي شخصية قوية على المطبخ، خاصة عند دمجه مع الذهبي أو النحاسي.</p>
          
          <h3>الأخضر الطبيعي</h3>
          <p>يجلب الطبيعة إلى داخل المنزل ويخلق جواً مريحاً ومنعشاً.</p>
          
          <h2>نصائح لاختيار اللون</h2>
          
          <h3>حجم المطبخ</h3>
          <ul>
            <li>المطابخ الصغيرة: اختر ألوان فاتحة لتوسيع المساحة</li>
            <li>المطابخ الكبيرة: يمكن استخدام ألوان داكنة لإضافة الدفء</li>
          </ul>
          
          <h3>الإضاءة الطبيعية</h3>
          <ul>
            <li>إضاءة قوية: يمكن استخدام ألوان داكنة</li>
            <li>إضاءة ضعيفة: الألوان الفاتحة تعكس الضوء</li>
          </ul>
          
          <h3>نمط المنزل</h3>
          <ul>
            <li>كلاسيكي: الأبيض والكريمي والبيج</li>
            <li>عصري: الرمادي والأسود والأبيض</li>
            <li>ريفي: الألوان الطبيعية والخشبية</li>
          </ul>
          
          <h2>تنسيق الألوان</h2>
          
          <h3>القاعدة 60-30-10</h3>
          <ul>
            <li>60% لون أساسي (الخزائن عادة)</li>
            <li>30% لون ثانوي (الجدران أو الكاونتر)</li>
            <li>10% لون مميز (الإكسسوارات)</li>
          </ul>
          
          <h3>الألوان المتكاملة</h3>
          <p>استخدم عجلة الألوان لاختيار ألوان متناغمة أو متضادة حسب التأثير المرغوب.</p>
          
          <h2>ألوان الخزائن الشائعة</h2>
          
          <h3>الخزائن البيضاء</h3>
          <p>خالدة وعملية، تتماشى مع أي لون للجدران والكاونتر.</p>
          
          <h3>الخزائن الرمادية</h3>
          <p>عصرية وأنيقة، تخفي البقع أفضل من الأبيض.</p>
          
          <h3>الخزائن الخشبية الطبيعية</h3>
          <p>تضفي دفئاً وطبيعية، مناسبة للأنماط الريفية والانتقالية.</p>
          
          <h2>ألوان الكاونتر</h2>
          
          <h3>الرخام الأبيض</h3>
          <p>كلاسيكي وفاخر، لكن يحتاج عناية خاصة.</p>
          
          <h3>الكوارتز الرمادي</h3>
          <p>عملي ومتين، متوفر بدرجات مختلفة من الرمادي.</p>
          
          <h3>الجرانيت الأسود</h3>
          <p>أنيق ومقاوم، يتطلب إضاءة جيدة لتجنب القتامة.</p>
          
          <h2>أخطاء شائعة يجب تجنبها</h2>
          <ul>
            <li>اختيار ألوان عصرية قد تصبح قديمة سريعاً</li>
            <li>إهمال تأثير الإضاءة على الألوان</li>
            <li>عدم مراعاة ألوان باقي المنزل</li>
            <li>استخدام ألوان كثيرة جداً</li>
            <li>عدم اختبار الألوان في ظروف مختلفة</li>
          </ul>
          
          <h2>نصائح للتطبيق</h2>
          <ul>
            <li>اطلب عينات واختبرها في مطبخك</li>
            <li>انظر للألوان في أوقات مختلفة من اليوم</li>
            <li>ابدأ بالألوان المحايدة وأضف اللمسات الملونة</li>
            <li>فكر في سهولة التنظيف والصيانة</li>
            <li>استشر مصمم داخلي عند الحاجة</li>
          </ul>
        `,
        image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'مطابخ',
        date: '2023-12-10',
        readTime: '6 دقائق',
        views: 950,
        likes: 72
      }
    ];

    const categories = ['جميع المقالات', 'مطابخ', 'غرف نوم', 'أبواب', 'تخزين'];
    
    const filteredPosts = searchTerm || selectedCategory !== 'جميع المقالات'
      ? blogPosts.filter(post => {
          const matchesSearch = !searchTerm || 
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesCategory = selectedCategory === 'جميع المقالات' || post.category === selectedCategory;
          return matchesSearch && matchesCategory;
        })
      : blogPosts;

    const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!selectedPost ? (
            <>
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  مدونة نجار شمال الرياض
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  نصائح وأفكار متخصصة في النجارة والديكور الخشبي لتحويل منزلك إلى تحفة فنية
                </p>
              </div>

              {/* Search and Filter */}
              <div className="flex flex-col lg:flex-row gap-6 mb-12">
                <div className="flex-1 relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="ابحث في المقالات..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {filteredPosts.map(post => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{post.category}</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => setSelectedPost(post)}
                          className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                        >
                          اقرأ المزيد
                          <ArrowRight size={16} />
                        </button>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Eye size={16} />
                            {post.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <ThumbsUp size={16} />
                            {post.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* No results */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد مقالات</h3>
                  <p className="text-gray-600">جرب البحث بكلمات مختلفة أو اختر فئة أخرى</p>
                </div>
              )}

              {/* CTA */}
              <div className="text-center bg-blue-600 text-white p-12 rounded-2xl">
                <h2 className="text-3xl font-bold mb-4">هل لديك سؤال حول النجارة؟</h2>
                <p className="text-xl mb-8">تواصل معنا للحصول على استشارة مجانية من خبرائنا</p>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  استشارة مجانية
                </button>
              </div>
            </>
          ) : (
            /* Single Post View */
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setSelectedPost(null)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
              >
                <ArrowRight size={20} className="rotate-180" />
                العودة للمدونة
              </button>

              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-64 lg:h-96 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">{selectedPost.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {selectedPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {selectedPost.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye size={16} />
                      {selectedPost.views}
                    </span>
                  </div>

                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{selectedPost.title}</h1>
                  
                  <div 
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  />

                  <div className="flex items-center justify-between pt-8 mt-8 border-t border-gray-200">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <ThumbsUp size={20} />
                        أعجبني ({selectedPost.likes})
                      </button>
                      <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <Share2 size={20} />
                        مشاركة
                      </button>
                    </div>
                    <button
                      onClick={() => setCurrentPage('contact')}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      تواصل معنا
                    </button>
                  </div>
                </div>
              </article>

              {/* Related Posts */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">مقالات ذات صلة</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts
                    .filter(post => post.id !== selectedPost.id && post.category === selectedPost.category)
                    .slice(0, 2)
                    .map(post => (
                      <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-32 object-cover"
                          loading="lazy"
                        />
                        <div className="p-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h4>
                          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                          <button
                            onClick={() => setSelectedPost(post)}
                            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                          >
                            اقرأ المزيد
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Contact page component
  const ContactPage = () => (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            تواصل مع نجار شمال الرياض
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن هنا لمساعدتك في تحويل أفكارك إلى واقع. تواصل معنا للحصول على استشارة مجانية وعرض سعر مفصل
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">واتساب</h3>
                    <p className="text-gray-600">تواصل سريع ومباشر</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/966549716136"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2"
                >
                  +966 54 971 6136
                  <ExternalLink size={16} />
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">هاتف</h3>
                    <p className="text-gray-600">للاستفسارات والطوارئ</p>
                  </div>
                </div>
                <a
                  href="tel:+966549716136"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  +966 54 971 6136
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">منطقة الخدمة</h3>
                    <p className="text-gray-600">نخدم جميع أحياء شمال الرياض</p>
                  </div>
                </div>
                <div className="text-gray-700">
                  <p>• حي النرجس</p>
                  <p>• حي الياسمين</p>
                  <p>• حي الملقا</p>
                  <p>• حي العارض</p>
                  <p>• حي الصحافة</p>
                  <p>• وجميع الأحياء المجاورة</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">ساعات العمل</h3>
                    <p className="text-gray-600">نعمل 7 أيام في الأسبوع</p>
                  </div>
                </div>
                <div className="text-gray-700">
                  <p>السبت - الخميس: 8:00 ص - 10:00 م</p>
                  <p>الجمعة: 2:00 م - 10:00 م</p>
                  <p className="text-green-600 font-semibold mt-2">متاح للطوارئ 24/7</p>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ضماناتنا لك</h3>
              <div className="space-y-3">
                {[
                  'استجابة خلال 24 ساعة',
                  'عرض سعر مجاني ومفصل',
                  'استشارة تصميم مجانية',
                  'ضمان شامل على جميع الأعمال',
                  'التزام بالمواعيد المحددة',
                  'خدمة ما بعد البيع'
                ].map((guarantee, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">أسئلة شائعة</h3>
              <div className="space-y-4">
                {[
                  {
                    question: 'كم يستغرق تنفيذ مشروع خزانة ملابس؟',
                    answer: 'عادة ما يستغرق تنفيذ خزانة ملابس مخصصة من 2-3 أسابيع حسب التعقيد والحجم.'
                  },
                  {
                    question: 'هل تقدمون ضمان على أعمالكم؟',
                    answer: 'نعم، نقدم ضمان شامل لمدة سنتين على جميع أعمال النجارة وقطع الغيار.'
                  },
                  {
                    question: 'هل يمكنكم العمل في المساحات الصغيرة؟',
                    answer: 'بالطبع، نتخصص في تصميم حلول ذكية للمساحات الصغيرة لتحقيق أقصى استفادة.'
                  },
                  {
                    question: 'ما هي أنواع الخشب التي تستخدمونها؟',
                    answer: 'نستخدم أجود أنواع الأخشاب مثل البلوط والماهوجني والزان حسب المشروع والميزانية.'
                  },
                  {
                    question: 'هل تقدمون خدمة التصميم ثلاثي الأبعاد؟',
                    answer: 'نعم، نقدم تصميم ثلاثي الأبعاد مجاني لجميع المشاريع لضمان رضاكم قبل التنفيذ.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full p-4 text-right flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="p-4 pt-0 text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">نصائح سريعة للعناية بالأثاث الخشبي</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'الحماية من الرطوبة',
                tip: 'تجنب تعرض الأثاث للرطوبة المباشرة واستخدم مزيل الرطوبة في الأماكن الرطبة'
              },
              {
                icon: Lightbulb,
                title: 'التنظيف المنتظم',
                tip: 'نظف الأثاث بقطعة قماش ناعمة ومنتجات تنظيف مخصصة للخشب'
              },
              {
                icon: Clock,
                title: 'الصيانة الدورية',
                tip: 'افحص الأثاث كل 6 أشهر وقم بإعادة طلاء المناطق المتضررة'
              },
              {
                icon: Star,
                title: 'الاستخدام الصحيح',
                tip: 'تجنب وضع أشياء ثقيلة جداً أو حادة على الأسطح الخشبية'
              }
            ].map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tip.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navigation />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'gallery' && <GalleryPage />}
      {currentPage === 'blog' && <BlogPage />}
      {currentPage === 'contact' && <ContactPage />}
      
      <FloatingButtons />
    </div>
  );
};

export default App;