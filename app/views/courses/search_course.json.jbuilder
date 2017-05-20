json.array!(@course) do |result|
  json.id result.id
  json.value result.name
end
