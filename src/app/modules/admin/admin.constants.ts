// Admin constants
export const adminFilterableFields = ['searchTerm', 'role', 'status'];

export const adminSearchableFields = ['name', 'email'];

export const adminSortableFields = ['createdAt', 'name', 'email', 'role', 'status'];

export const adminRelationalFields = ['role', 'status'];

export const adminRelationalFieldsMapper: { [key: string]: string } = {
  role: 'role',
  status: 'status',
};