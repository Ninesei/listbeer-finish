import beers from "../pages/beer/beer";

function BeerSearch(props) {
  const { value, onValueChange } = props;
  return (
    <div className="beer-search">
      <input
        className="beer-search-input"
        type="text"
        placeholder="กรอกชื่อเบียร์ที่ต้องการหา"
        value={value}
        onChange={(event) => {
          onValueChange(event.target.name);
        }}
      />
    </div>
  );
}
export default BeerSearch;
