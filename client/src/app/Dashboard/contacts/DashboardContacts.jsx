const DashboardContacts = (props) => {
  const { comment, email, name, lastName } = props;

  return (
    <tr className="border-b border-gray-700">
      <td className="py-3 px-2">{email}</td>
      <td className="py-3 px-2">{name}</td>
      <td className="py-3 px-2">{lastName}</td>
      <td className="py-3 px-2">{comment}</td>
    </tr>
  );
};

export default DashboardContacts;
