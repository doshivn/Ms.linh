import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Ship, 
  Plane, 
  FileCheck2, 
  Globe2, 
  ArrowRight, 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2,
  PackageCheck,
  Building2,
  Anchor
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                Ms.Linh <span className="text-blue-500">VIMC</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['Trang chủ', 'Dịch vụ', 'Về chúng tôi', 'Liên hệ'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    isScrolled ? 'text-slate-600' : 'text-slate-100'
                  }`}
                >
                  {item}
                </a>
              ))}
              <a
                href="#quote"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-blue-600/20"
              >
                Nhận báo giá
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t mt-4"
            >
              <div className="px-4 py-6 space-y-4 flex flex-col">
                {['Trang chủ', 'Dịch vụ', 'Về chúng tôi', 'Liên hệ'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-base font-medium text-slate-900 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#quote"
                  className="bg-blue-600 text-white px-5 py-3 rounded-lg font-medium text-center mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Nhận báo giá ngay
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="trang-chủ" className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8ed7c83a56?q=80&w=2070&auto=format&fit=crop" 
            alt="Logistics container port border" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="max-w-2xl"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="flex items-center gap-2 mb-6">
                <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                  Giải Pháp Hàng Đầu
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              >
                Vận chuyển vươn tầm <br className="hidden sm:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  thế giới.
                </span>
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl"
              >
                Ms.Linh VIMC tự hào cung cấp dịch vụ vận tải quốc tế, thủ tục hải quan và xuất nhập khẩu trọn gói, an toàn, và tiết kiệm chi phí tối đa cho doanh nghiệp của bạn.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <a href="#dịch-vụ" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-semibold text-center transition-all flex items-center justify-center gap-2 group">
                  Khám phá dịch vụ
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#liên-hệ" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-full font-semibold text-center transition-all backdrop-blur-sm">
                  Liên hệ tư vấn
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
               <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 scale-105 opacity-20 blur-lg"></div>
               <img 
                 src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                 alt="Businesswoman Logistics"
                 className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-2xl border border-white/10"
               />
               
               {/* Floating elements */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                 className="absolute -left-10 top-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-3 backdrop-blur-md bg-white/90"
               >
                 <div className="bg-blue-100 p-2 rounded-lg">
                   <Plane className="w-6 h-6 text-blue-600" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 font-medium">Đường hàng không</p>
                   <p className="text-sm font-bold text-slate-900">Siêu tốc</p>
                 </div>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                 className="absolute -right-8 bottom-16 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-3 backdrop-blur-md bg-white/90"
               >
                 <div className="bg-cyan-100 p-2 rounded-lg">
                   <Ship className="w-6 h-6 text-cyan-600" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 font-medium">Đường biển</p>
                   <p className="text-sm font-bold text-slate-900">An toàn</p>
                 </div>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Trust Bar */}
      <section className="bg-blue-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-blue-500/50">
            {[
              { label: 'Quốc gia', value: '50+', icon: Globe2 },
              { label: 'Lô hàng thành công', value: '10,000+', icon: PackageCheck },
              { label: 'Kinh nghiệm', value: '10+ Năm', icon: Building2 },
              { label: 'Khách hàng hài lòng', value: '99%', icon: CheckCircle2 },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center px-4"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-blue-200" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-blue-100 font-medium text-sm lg:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="dịch-vụ" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Dịch Vụ Của Chúng Tôi</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Giải pháp logistics toàn diện</h3>
            <p className="text-slate-600 text-lg">
              Chúng tôi mang đến chuỗi cung ứng hoàn hảo với các dịch vụ chuyên biệt, đáp ứng mọi nhu cầu xuất nhập khẩu của đối tác.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Ship className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Vận chuyển Quốc tế</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Cung cấp cước vận tải biển (FCL/LCL) và đường hàng không cạnh tranh. Mạng lưới đại lý toàn cầu đảm bảo hàng hóa đến nơi an toàn, đúng hẹn.
              </p>
              <ul className="space-y-2 mb-6">
                {['Đường biển quốc tế', 'Đường hàng không', 'Vận tải nội địa (Trucking)'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <FileCheck2 className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Thủ tục Hải quan</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Khai báo hải quan nhanh chóng, chính xác. Giải quyết các vướng mắc hồ sơ chuyên ngành, giúp hàng hóa thông quan thuận lợi nhất.
              </p>
              <ul className="space-y-2 mb-6">
                {['Khai báo hải quan điện tử', 'Tư vấn mã HS Code', 'Kiểm tra chuyên ngành'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Globe2 className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Ủy thác Xuất Nhập Khẩu</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Đại diện doanh nghiệp đàm phán, ký kết hợp đồng ngoại thương, thanh toán quốc tế và thực hiện toàn bộ quy trình xuất/nhập hàng.
              </p>
              <ul className="space-y-2 mb-6">
                {['Xin giấy phép XNK', 'Nghiệp vụ thanh toán L/C, T/T', 'Làm C/O các form'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Split Section */}
      <section id="về-chúng-tôi" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1577705481773-455b57d6b49e?q=80&w=2070&auto=format&fit=crop" 
                alt="Truck logistics" 
                className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl flex items-center gap-4 max-w-xs border border-slate-100">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle2 className="text-green-600 w-8 h-8" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">Đúng Hẹn</p>
                  <p className="text-sm text-slate-500">Cam kết thời gian chuẩn xác</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Tại sao chọn Ms. Linh</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Đối tác tin cậy cho mọi kiện hàng của bạn
              </h3>
              <p className="text-slate-600 text-lg mb-8">
                Tối ưu hóa thời gian và chi phí là tôn chỉ hoạt động của chúng tôi. Với đội ngũ giàu kinh nghiệm, chúng tôi giải quyết mọi vấn đề phức tạp nhất trong khâu vận chuyển và thủ tục hải quan.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Chuyên môn sâu rộng', desc: 'Đội ngũ tư vấn am hiểu luật pháp và cập nhật chính sách liên tục.' },
                  { title: 'Tối ưu chi phí', desc: 'Báo giá minh bạch, cước phí cạnh tranh nhất thị trường.' },
                  { title: 'Hỗ trợ 24/7', desc: 'Luôn sát cánh và cập nhật lộ trình hàng hóa cho khách hàng mọi lúc.' }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                        <div className="bg-blue-600 w-3 h-3 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="liên-hệ" className="py-24 bg-slate-900 relative">
        <div className="absolute inset-0 z-0 opacity-10">
           <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40V0H40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sẵn sàng vận chuyển hàng hóa của bạn?</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-lg">
                Để lại thông tin lô hàng của bạn, đội ngũ chuyên viên của Ms.Linh VIMC sẽ liên hệ báo giá tốt nhất trong vòng 30 phút.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-lg">0901.xxx.xxx (Ms. Linh)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-lg">contact@mslinhlogistics.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">Quận 1, TP. Hồ Chí Minh, Việt Nam</span>
                </div>
              </div>
            </div>

            <div id="quote" className="lg:w-1/2 w-full max-w-md bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Yêu cầu báo giá</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Họ và tên</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Nhập tên của bạn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Số điện thoại</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nhu cầu vụ (Vận chuyển, Hải quan...)</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Nhu cầu dịch vụ của bạn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Chi tiết lô hàng</label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="Mô tả loại hàng, tuyến đường, khối lượng..."
                  ></textarea>
                </div>
                <button 
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2"
                >
                  Gửi yêu cầu <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Anchor className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold tracking-tight text-white">
                Ms.Linh <span className="text-blue-500">VIMC</span>
              </span>
            </div>
            <p className="max-w-sm mb-6">
              Đồng hành cùng sự phát triển vươn xa của doanh nghiệp Việt Nam ra thị trường quốc tế thông qua các giải pháp logistics tối ưu.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Dịch vụ</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Vận chuyển Đường biển</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Vận chuyển Hàng không</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Thủ tục Hải quan</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Ủy thác XNK</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4">Công ty</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#về-chúng-tôi" className="hover:text-blue-400 transition-colors">Về chúng tôi</a></li>
              <li><a href="#dịch-vụ" className="hover:text-blue-400 transition-colors">Dịch vụ</a></li>
              <li><a href="#liên-hệ" className="hover:text-blue-400 transition-colors">Liên hệ</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Ms.Linh VIMC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

