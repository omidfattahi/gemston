import { useContext } from "react";
import "../../public/styles/stone.scss";
import { State_context } from "@/hooks/Context";
import { useParams } from "next/navigation";
import { Stone_table_type, Stone_type } from "@/api/api";

// in this component we get stone table data then we show it in our table and if the item was null we wont show it
function Stone_table() {
  // get the id of our page
  const { id } = useParams<any>();

  // get the stone table object fotm context
  const total: any[] = useContext(State_context);
  const table: Stone_table_type[] = total[2];
  const Stone: Stone_type[] = total[1];

  // find the current table we need base on our stone object

  // find stone base on page url
  const finded_url: Stone_type | undefined = Stone.find(
    (e: Stone_type) => e.url === id
  );

  const finded_table: Stone_table_type | undefined = table.find(
    (e: any) => e.id === finded_url?.id
  );

  return (
    <>
      <table
        style={{
          order: finded_table?.order,
        }} /* Applies custom ordering based on finded_table.order */
        className="main-table-layout" /* Assigns a class for styling */
      >
        <tbody>
          {finded_table?.color /* Conditionally renders a row for color if data exists */ && (
            <tr>
              <td>رنگ</td>
              {/* Joins multiple colors with hyphens */}
              <td>{finded_table?.color.join(" - ")}</td>
            </tr>
          )}
          {finded_table?.dustColor /* Conditionally renders a row for dust color */ && (
            <tr>
              <td>رنگ خاکه</td>
              <td>{finded_table?.dustColor}</td>
            </tr>
          )}
          {/* Similarly renders rows for other properties based on data availability */}
          {finded_table?.opacity && (
            <tr>
              <td>شفافیت</td>
              <td>{finded_table?.opacity}</td>
            </tr>
          )}
          {finded_table?.kelivazh && (
            <tr>
              <td>کلیواژ</td>
              <td>{finded_table?.kelivazh}</td>
            </tr>
          )}
          {finded_table?.jala && (
            <tr>
              <td>جلا</td>
              <td>{finded_table?.jala}</td>
            </tr>
          )}
          {finded_table?.zaribshekast && (
            <tr>
              <td>ضریب سختی نور</td>
              <td>{finded_table?.zaribshekast}</td>
            </tr>
          )}
          {finded_table?.hardness && (
            <tr>
              <td>سختی موس</td>
              <td>{finded_table?.hardness}</td>
            </tr>
          )}
          {finded_table?.weigth && (
            <tr>
              <td>وزن مخصوص</td>
              <td>{finded_table?.weigth}</td>
            </tr>
          )}
          {finded_table?.system && (
            <tr>
              <td>سیستم کریستالی</td>
              <td>{finded_table?.system}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Stone_table;
