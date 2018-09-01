<template>
    <div id="dashboard">
            <div class="row">
                <div class="col m8">
                    <!-- <div class="row"> -->
                        <article class="una">
                            <div class="row">
                            <div class="col m12 s12">
                          <div id="judulcard" class="card blue-grey darken-5">
                            <div class="card-content white-text">
                              <div v-for="blog in blogs"><span class="card-title">{{ blog.title }}</span></div>
                            </div>
                          </div></div>
                        </div>
                        
                        <div id="cardconten">
                            <div class="card contenku">
                                <div class="card-image">
                                    <img src="https://picsum.photos/1270/720/?random">
                                </div>
                                    <div class="card-content">
                                        <div v-for="blog in blogs" class="single-blog">
                                            <p>{{ blog.body }}</p>
                                        </div>
                                    </div>
                                    <div class="card-action">
                                      <a href="#">This is a link</a>
                                      <span><a class="waves-effect waves-light btn red">Read More</a></span>
                                    </div>
                            </div>
                        </div>
                    </article>
                    <article>
                            <div class="row">
                            <div class="col m12 s12">
                          <div id="judulcard" class="card blue-grey darken-1">
                            <div class="card-content white-text">
                              <div v-for="blog in blogs"><span class="card-title">{{ blog.title }}</span></div>
                            </div>
                          </div></div>
                        </div>
                        
                        <div id="cardconten">
                            <div class="card contenku">
                                <div class="card-image">
                                    <img src="https://picsum.photos/1280/720/?random">
                                </div>
                                    <div class="card-content">
                                       <div v-for="blog in blogs" class="single-blog">
                                            <p>{{ blog.body }}</p>
                                        </div>
                                    </div>
                                    <div class="card-action">
                                      <a href="#">This is a link</a>
                                      <span><a class="waves-effect waves-light btn red">Read More</a></span>
                                    </div>
                            </div>
                        </div>
                    </article>
                    <article class="una">
                            <div class="row">
                            <div class="col m12 s12">
                          <div id="judulcard" class="card blue-grey darken-5">
                            <div class="card-content white-text">
                                <div v-for="blog in blogs"><span class="card-title">{{ blog.title }}</span></div>
                            </div>
                          </div></div>
                        </div>
                        
                        <div id="cardconten">
                            <div class="card contenku">
                                <div class="card-image">
                                    <img src="https://picsum.photos/1260/720/?random">
                                </div>
                                    <div class="card-content">
                                        <div v-for="blog in blogs">
                                            <p>{{ blog.body }}</p>
                                        </div>
                                    </div>
                                    <div class="card-action">
                                      <a href="#">This is a link</a>
                                      <span><a class="waves-effect waves-light btn red">Read More</a></span>
                                    </div>
                            </div>
                        </div>
                    </article>
                </div>

                <!-- panel -->
                <div id="panel" class="col m4 s6">
                    <ul class="" >     
                        <div class="card darken-1 red">
                        <div class="card-content white-text center">
                            <img src="https://scontent.fsub5-1.fna.fbcdn.net/v/t1.0-1/19060043_1725833820777762_205997335347774658_n.jpg?_nc_cat=0&oh=74eb8833c41bc009f2fb320c7dfeb4ef&oe=5C306A92" alt="" srcset="" class="responsive-img">
                        <h5>Dinivan Nendra Gunawan</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, nesciunt.</p>
                        </div>
                        <div class="card-action center">
                            <!-- <router-link to="https://www.facebook.com/dean.n.indra"><i class="fab fa-facebook-square"></i></router-link> -->
                            <a href="https://www.facebook.com/dean.n.indra" ><i class="fab fa-facebook-square"></i></a>
                            <a href="https://twitter.com/IvanDeanova"><i class="fab fa-twitter"></i></a>
                            <a href=""><i class="fab fa-google-plus-g "></i></a>
                            <a href="https://www.linkedin.com/in/dinivan-gunawan-bb0a64122/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://codepen.io/unaivan/" ><i class="fab fa-codepen"></i></a>
                            <a href="https://github.com/unaivan22"><i class="fab fa-github"></i></a>
                        </div>
                    </div>       
                    </ul>                
                </div>
                <div id="Search" class="col m4 s6">
                    <ul class="" >     
                        <div class="card darken-1">
                        <div class="card-content white-text">
                            <p><i class="fas fa-search"></i> Search</p>
                            <hr>
                            <div class="input-field">
                                <input id="email" type="email" class="validate">
                                <label for="email">Search Something</label><br>
                                <a class="waves-effect waves-light btn-small center">Cari</a>
                            </div>
                        </div>
                    </div>       
                    </ul>                
                </div>
                <div id="sosmed" class="col m4 s6">
                    <ul class="" >     
                        <div class="card darken-1 col m12">
                        <div class="card-content col m12">
                            <p><i class="fas fa-signal"></i> Social Network</p>
                            <hr>
                            <div class="sosmed">
                                <a class="col m12 s12 waves-effect blue btn"><i class="fab fa-facebook-square left"></i>2K</a>
                                <a class="col m12 s12 waves-effect blue darken-1 btn"><i class="fab fa-twitter left"></i>11500</a>
                                <a class="col m12 s12 waves-effect red btn"><i class="fab fa-youtube left"></i>21K</a>
                                <a class="col m12 s12 waves-effect pink btn"><i class="fab fa-instagram left"></i>9K</a> 
                            </div>
                                   
                        </div>
                    </div>       
                    </ul>                
                </div>
                <div id="Categories" class="col m4 s12">
                    <ul class="" >     
                        <div class="card darken-1">
                        <div class="card-content ">
                            <p><i class="fas fa-list"></i> Categories</p>
                            <hr>
                            <div class="collection">
                                <a href="#!" class="collection-item">Design <i class="fas fa-plus right"></i></a>
                                <a href="#!" class="collection-item">Android <i class="fas fa-plus right"></i></a>
                                <a href="#!" class="collection-item">UI/UX <i class="fas fa-plus right"></i></a>
                                <a href="#!" class="collection-item">Javascript <i class="fas fa-plus right"></i></a>
                                <a href="#!" class="collection-item">SEO <i class="fas fa-plus right"></i></a>
                                <a href="#!" class="collection-item">Humor <i class="fas fa-plus right"></i></a>
                                <a href="#!" class="collection-item">Hilarious <i class="fas fa-plus right"></i></a>
                            </div>
                        </div>
                    </div>       
                    </ul>                
                </div>
                <!-- end panel -->
            </div>    
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: []
        }
    },
    methods: {

    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(2,3);
            this.blogs = data.title.slice(3,4);
        })
    }
}

</script>


<style lang="scss" scoped>
        @import '../assets/Dashboard.scss'
</style>