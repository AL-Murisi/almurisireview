import "./App.css";
import FeedbackForm from "./components/feedbackForm";

function App() {
  return (
    <section className="hero-section">
      {/* Left Side - Logo Image */}
      <div className="hero-content">
        <FeedbackForm />
      </div>

      {/* Right Side - Text Content */}
      <div className="hero-content">
        <h2>مراجعاتكم وملاحظاتكم</h2>
        <p className="hero-description">
          رأيكم يهمنا! تساعدنا ملاحظاتكم على تحسين خدماتنا وتقديم أفضل تجربة
          ممكنة لكم. نحن نؤمن بأن تطويرنا المستمر يعتمد على آرائكم واقتراحاتكم.
        </p>
        <div className="features">
          <div className="feature">
            <span className="feature-icon">🌟</span>
            <h3>خدمة متميزة</h3>
            <p>نسعى دائماً لتقديم أفضل خدمة صرافة وتحويل أموال</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🤝</span>
            <h3>ثقة العملاء</h3>
            <p>نبني علاقات طويلة الأمد مع عملائنا الكرام</p>
          </div>
          <div className="feature">
            <span className="feature-icon">📈</span>
            <h3>تطوير مستمر</h3>
            <p>ملاحظاتكم هي الأساس لتحسين خدماتنا باستمرار</p>
          </div>  <div className="feature">
            <span className="feature-icon">📈</span>
            <h3>تطوير مستمر</h3>
            <p>ملاحظاتكم هي الأساس لتحسين خدماتنا باستمرار</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
