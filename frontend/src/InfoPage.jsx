function InfoPage() {
  return (
    <div className="info-page">
      <ul className="tree-view">
        <li>
          <details>
            <summary>DATE & TIME</summary>
            <li>Monday, September 7th @ 3:00 p.m.</li>
          </details>
        </li>
        <li>
          <details>
            <summary>LOCATION</summary>
            <li>2030 Halstead Ave, Lakewood, OH 44107</li>
          </details>
        </li>
      </ul>
    </div>
  );
}

export default InfoPage;
