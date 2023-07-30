function skillsMember() {
  // Here, we're using the "this" keyword to refer to the object that this function is a part of
  // This is the same as saying "var1 + var2"
  return this.strength + this.agility + this.intelligence;
}
