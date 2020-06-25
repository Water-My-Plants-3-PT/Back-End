# Back-End

Examples

// POST
// Register a user /api/auth/register
{
	"username": "bob",
	"password": "password",
	"phoneNumber": "1234567890"
}

//login /api/auth/login
{
  "username": "bob",
	"password": "password"
}

//add a plant /api/plants
{
	"nickname": "daisy",
	"species": "daisy",
	"h2oFrequency": 2
}


// GETS
// Get all plants /api/plants
Response data
{
	"nickname": "daisy",
	"species": "daisy",
	"h2oFrequency": 2
}

// Get plant by ID /api/plants/plants_1
Response data
{
  "id": 1,
	"nickname": "daisy",
	"species": "daisy",
	"h2oFrequency": 2
}

// PUT
// Update plant /api/plants/plants_1
{
  "id": 1,
	"nickname": "sunshine",
	"species": "daisy",
	"h2oFrequency": 2
}


// Delete
// Delete plant /api/plants/plants_id
{
  "id": 1
}


