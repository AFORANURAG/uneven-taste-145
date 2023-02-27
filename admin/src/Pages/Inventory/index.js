import React from 'react';
import ReactDOM from 'react-dom';
import CRUDTable,
{
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm,
} from 'react-crud-table';

// Component's Base CSS
import './style.css';

const DescriptionRenderer = ({ field }) => <textarea {...field} />;

let tasks = [
  {
    id: 1,
    title: 'Dentist',
    description: 'Department have many service realted to Teeths and Surgury',
  },
  {
    id: 2,
    title: 'Medicine',
    description: 'This department provide common service for viral fever or infection',
  },
];

const SORTERS = {
  NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
  NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
  STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
  STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a)),
};

const getSorter = (data) => {
  const mapper = x => x[data.field];
  let sorter = SORTERS.STRING_ASCENDING(mapper);

  if (data.field === 'id') {
    sorter = data.direction === 'ascending' ?
      SORTERS.NUMBER_ASCENDING(mapper) : SORTERS.NUMBER_DESCENDING(mapper);
  } else {
    sorter = data.direction === 'ascending' ?
      SORTERS.STRING_ASCENDING(mapper) : SORTERS.STRING_DESCENDING(mapper);
  }

  return sorter;
};


let count = tasks.length;
const service = {
  fetchItems: (payload) => {
    let result = Array.from(tasks);
    result = result.sort(getSorter(payload.sort));
    return Promise.resolve(result);
  },
  create: (task) => {
    count += 1;
    tasks.push({
      ...task,
      id: count,
    });
    return Promise.resolve(task);
  },
  update: (data) => {
    const task = tasks.find(t => t.id === data.id);
    task.title = data.title;
    task.description = data.description;
    return Promise.resolve(task);
  },
  delete: (data) => {
    const task = tasks.find(t => t.id === data.id);
    tasks = tasks.filter(t => t.id !== task.id);
    return Promise.resolve(task);
  },
};

const styles = {
  container: { margin: 'auto', width: 'fit-content' },
};

const Inventory = () => (
  <div style={styles.container}>
    <CRUDTable
      caption="Departments"
      fetchItems={payload => service.fetchItems(payload)}
    >
      <Fields>
        <Field
          name="id"
          label="Department ID"
          hideInCreateForm
          readOnly
        />
        <Field
          name="title"
          label="Name"
          placeholder="Title"
        />
        <Field
          name="description"
          label="Description"
          render={DescriptionRenderer}
        />
      </Fields>
      <CreateForm
        title="Task Creation"
        message="Add a new Department!"
        trigger="Add New Department"
        onSubmit={task => service.create(task)}
        submitText="Create"
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Please, provide task\'s title';
          }

          if (!values.description) {
            errors.description = 'Please, provide task\'s description';
          }

          return errors;
        }}
      />

      <UpdateForm
        title="Task Update Process"
        message="Update Department"
        trigger="Update"
        onSubmit={task => service.update(task)}
        submitText="Update"
        validate={(values) => {
          const errors = {};

          if (!values.id) {
            errors.id = 'Please, provide id';
          }

          if (!values.title) {
            errors.title = 'Please, provide task\'s title';
          }

          if (!values.description) {
            errors.description = 'Please, provide task\'s description';
          }

          return errors;
        }}
      />

      <DeleteForm
        title="Task Delete Process"
        message="Are you sure you want to delete the Department?"
        trigger="Delete"
        onSubmit={task => service.delete(task)}
        submitText="Delete"
        validate={(values) => {
          const errors = {};
          if (!values.id) {
            errors.id = 'Please, provide id';
          }
          return errors;
        }}
      />
    </CRUDTable>
  </div>
);

export default Inventory;
// Example.propTypes = {};

// ReactDOM.render(
//   <Example />,
//   document.getElementById('root')
// );
// import { Avatar, Rate, Space, Table, Typography } from "antd";
// import { useEffect, useState } from "react";
// import { getInventory } from "../../API";

// function Inventory() {
//   const [loading, setLoading] = useState(false);
//   const [dataSource, setDataSource] = useState([]);

//   useEffect(() => {
//     setLoading(true);
//     getInventory().then((res) => {
//       setDataSource(res.products);
//       setLoading(false);
//     });
//   }, []);

//   return (
//     <Space size={20} direction="vertical">
//       <Typography.Title level={4}>All De</Typography.Title>
//       <Table
//         loading={loading}
//         columns={[
//           {
//             title: "Thumbnail",
//             dataIndex: "thumbnail",
//             render: (link) => {
//               return <Avatar src={link} />;
//             },
//           },
//           {
//             title: "Title",
//             dataIndex: "title",
//           },
//           {
//             title: "Price",
//             dataIndex: "price",
//             render: (value) => <span>${value}</span>,
//           },
//           {
//             title: "Rating",
//             dataIndex: "rating",
//             render: (rating) => {
//               return <Rate value={rating} allowHalf disabled />;
//             },
//           },
//           {
//             title: "Stock",
//             dataIndex: "stock",
//           },

//           {
//             title: "Brand",
//             dataIndex: "brand",
//           },
//           {
//             title: "Category",
//             dataIndex: "category",
//           },
//         ]}
//         dataSource={dataSource}
//         pagination={{
//           pageSize: 5,
//         }}
//       ></Table>
//     </Space>
//   );
  
// }
// export default Inventory;
