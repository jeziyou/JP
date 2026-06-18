import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'ホーム', labelCn: '首页', icon: '🏠' },
  { to: '/kana', label: '五十音', labelCn: '五十音', icon: 'あ' },
  { to: '/vocabulary', label: '単語', labelCn: '单词', icon: '単' },
  { to: '/grammar', label: '文法', labelCn: '语法', icon: '文' },
  { to: '/reading', label: '読解', labelCn: '阅读', icon: '読' },
  { to: '/test', label: '词汇练习', labelCn: 'Practice', icon: '🏆', highlight: true },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen sticky top-0 flex flex-col bg-white border-r border-border">
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold text-primary tracking-tight">
          <span className="text-accent">日</span>本語学習
        </h1>
        <p className="text-xs text-ink-muted mt-1 font-sans">
          Japanese Learning Tool
        </p>
      </div>

      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-primary text-white shadow-sm'
                  : item.highlight
                  ? 'text-gold-dark hover:bg-gold-soft/20 hover:text-gold-dark'
                  : 'text-ink-light hover:bg-paper-dark hover:text-ink'
              }`
            }
          >
            <span className="text-lg w-7 text-center font-serif">
              {item.icon}
            </span>
            <span className="font-sans">{item.label}</span>
            <span className="ml-auto text-xs text-ink-muted font-sans">
              {item.labelCn}
            </span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="bg-paper-dark rounded-lg p-4 text-center">
          <p className="text-xs text-ink-muted mb-2 font-sans">今日の一言</p>
          <p className="text-base font-serif text-primary font-medium">
            継続は力なり
          </p>
          <p className="text-xs text-ink-muted mt-1 font-sans">
            坚持就是力量
          </p>
        </div>
      </div>
    </aside>
  );
}