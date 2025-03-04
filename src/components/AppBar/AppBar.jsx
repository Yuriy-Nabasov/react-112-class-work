import TextInput from '../TextInput/TextInput';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

export default function AppBar({ filter, lang, onFilter, onSelectLang }) {
  return (
    <header
      style={{
        border: '1px solid orangered',
        padding: 8,
        display: 'flex',
        gap: 20,
      }}
    >
      <TextInput value={filter} onFilter={onFilter} />
      <LangSwitcher value={lang} onSelect={onSelectLang} />
    </header>
  );
}
