CREATE TABLE frayer_model (
    id SERIAL PRIMARY KEY,
    fileName VARCHAR(255) UNIQUE NOT NULL,
    number UUID UNIQUE NOT NULL,
    prompt TEXT,
    Concept TEXT,
    Definition TEXT,
    Characteristics TEXT,
    Examples TEXT,
    NonExamples TEXT,
    created_at timestamptz
);