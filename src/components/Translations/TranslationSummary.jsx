const TranslationSummary = ({ translation }) => {
  return (
    <section>
      <h4>Translation Summary</h4>
      <img src={translation} alt={translation.id} />
      <p>Your translated text is{translation.id}</p>
      {translation && <TranslationSummary translation={translation} />}
    </section>
  );
};
export default TranslationSummary;
