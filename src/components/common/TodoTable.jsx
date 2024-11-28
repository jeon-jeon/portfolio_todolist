import { TrashIcon } from "@radix-ui/react-icons";
import { Table } from "@radix-ui/themes";

const TodoTable = ({ content, remove }) => {
  return (
    <Table.Root>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{content}</Table.Cell>
          <Table.Cell justify="end">
            <TrashIcon onClick={remove} />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};

export default TodoTable;
