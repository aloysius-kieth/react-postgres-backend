DROP TABLE IF EXISTS employees;

CREATE TABLE IF NOT EXISTS employees 
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    title VARCHAR(50) NOT NULL,
    hire_date VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL,
    reports_to VARCHAR(50) NOT NULL,
    employee_image TEXT NOT NULL,
    created_at TIMESTAMP WITH time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP WITH time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO employees (name, title, hire_date, country, reports_to, employee_image) VALUES
('Aloysius', 'Software Developer', '02/02/2022', 'Singapore', 'Wendy', 'Image1'),
('Wendy', 'Animator', '02/01/2022', 'Singapore', 'Aloysius', 'Image2'),
('aiai', 'husband', '02/02/2020', 'Singapore', 'xinxin', 'Image3'),
('xinxin', 'wife', '02/02/2020', 'Singapore', 'aiai', 'Image4');
