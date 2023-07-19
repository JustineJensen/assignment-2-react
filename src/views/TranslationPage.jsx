import withAuth from "../hoc/withAuth"
import TranslationButton from "../components/Translations/TranslationButton"
import TranslationForm from "../components/Translations/TranslationForm"

const TranslationPage = () => { 
<input type="text" placeholder="Hello" />


return (
    <>
    <h2>Translations</h2>
    <section id="translation-notes">
    <TranslationForm />
    </section>

    <section id="translation-options"> 
        <TranslationButton name = "a" image="img/a.png" key="a"/>
        <TranslationButton name = "b" image="img/b.png" key="b"/>
        <TranslationButton name = "c" image="img/c.png" key="c"/>
        <TranslationButton name = "d" image="img/d.png" key="d"/>
        <TranslationButton name = "e" image="img/e.png" key="e"/>
        <TranslationButton name = "f" image="img/f.png" key="f"/>
        <TranslationButton name = "g" image="img/g.png" key="g"/>
        <TranslationButton name = "h" image="img/h.png" key="h"/>
        <TranslationButton name = "i" image="img/i.png" key="i"/>
        <TranslationButton name = "j" image="img/j.png" key="j"/>
        <TranslationButton name = "k" image="img/k.png" key="k"/>
        <TranslationButton name = "l" image="img/l.png" key="l"/>
        <TranslationButton name = "m" image="img/m.png" key="m"/>
        <TranslationButton name = "n" image="img/n.png" key="n"/>
        <TranslationButton name = "o" image="img/o.png" key="o"/>
        <TranslationButton name = "p" image="img/p.png" key="p"/>
        <TranslationButton name = "q" image="img/q.png" key="q"/>
        <TranslationButton name = "r" image="img/r.png" key="r"/>
        <TranslationButton name = "s" image="img/s.png" key="s"/>
        <TranslationButton name = "t" image="img/t.png" key="t"/>
        <TranslationButton name = "u" image="img/u.png" key="u"/>
        <TranslationButton name = "v" image="img/v.png" key="v"/>
        <TranslationButton name = "w" image="img/w.png" key="w"/>
        <TranslationButton name = "x" image="img/x.png" key="x"/>
        <TranslationButton name = "y" image="img/y.png" key="y"/>
        <TranslationButton name = "z" image="img/z.png" key ="z"/>
        
    </section>

    </>
   )
}
export default withAuth(TranslationPage)